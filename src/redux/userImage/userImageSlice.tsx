/*
 * @Author: Shen Shu
 * @Date: 2022-05-22 15:10:30
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-06-05 22:19:08
 * @FilePath: /uwcssa_ca/src/redux/userImage/userImageSlice.tsx
 * @Description:
 *
 */

import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from '@reduxjs/toolkit';

import API from '@aws-amplify/api';
import { RootState } from 'redux/store';
import Storage from '@aws-amplify/storage';
import awsmobile from '../../aws-exports';
import { createUserImage } from 'graphql/mutations';
import { graphqlOperation } from '@aws-amplify/api-graphql';
import { userImageSortByCreatedAt } from 'graphql/queries';
import { v4 as uuid } from 'uuid';

const { aws_user_files_s3_bucket, aws_user_files_s3_bucket_region } = awsmobile;

export type UserImage = {
  id: string; //id 必须要有
  objectURL: string;
  key: string;
  name: string;
  size: number;
  type: string;
  compressedWidth?: number | null;
  objectCompressedURL: string;
  thumbnailWidth?: number | null;
  objectThumbnailURL: string;
  targetTable: string;
  lastModified?: string | null;
  lastModifiedDate?: string | null;
  active: 'T' | 'F';
  createdAt?: string | null;
  updatedAt?: string | null;
  owner: string;
};

const userImageAdapter = createEntityAdapter<UserImage>({
  // selectId: (item) => item.id,
  sortComparer: (a, b) => b.createdAt.localeCompare(a.createdAt),
});

const initialState = userImageAdapter.getInitialState({
  nextToken: null,
  fetchUserImageListStatus: 'idle',
  fetchUserImageListError: null,
  postUserImageStatus: 'idle',
  postUserImageError: null,
});

export const fetchUserImageList = createAsyncThunk(
  'userImage/fetchUserImageList',
  async () => {
    try {
      const result: any = await API.graphql({
        query: userImageSortByCreatedAt,
        variables: {
          active: 'T',
          sortDirection: 'DESC',
          limit: 20,
        },
      });
      return result.data.userImageSortByCreatedAt;
    } catch (error) {
      console.log(error);
    }
  },
);

export const moreUserImageList = createAsyncThunk(
  'userImage/moreUserImageList',
  async (nextToken: string) => {
    try {
      const result: any = await API.graphql({
        query: userImageSortByCreatedAt,
        variables: {
          active: 'T',
          sortDirection: 'DESC',
          limit: 20,
          nextToken,
        },
      });

      return result.data.userImageSortByCreatedAt;
    } catch (error) {
      console.log(error);
    }
  },
);

interface MyFile extends File {
  lastModifiedDate?: Date;
}

export const postUserImage = createAsyncThunk(
  'userImage/postUserImage',
  async ({
    targetTable,
    file,
    authUser,
    compressedWidth = 700,
    thumbnailWidth = 200,
  }: {
    targetTable: string;
    file: MyFile; //自己编的一个type
    authUser: { identityId: string; username: string }; //这个type编的也不太好
    compressedWidth?: number;
    thumbnailWidth?: number;
  }) => {
    const id = uuid();
    const fileEXT = file.name.split('.').pop();
    const { identityId, username } = authUser;
    const key = `protected/${identityId}/${targetTable}/${id}.${fileEXT}`;
    const compressedKey = `protected/${identityId}/${targetTable}/c-${id}.${fileEXT}`;
    const thumbnailKey = `protected/${identityId}/${targetTable}/t-${id}.${fileEXT}`;
    const createUserImageInput = {
      id,
      objectURL: `https://${aws_user_files_s3_bucket}.s3.${aws_user_files_s3_bucket_region}.amazonaws.com/${key}`,
      key: key,
      name: file.name,
      size: file.size,
      type: file.type,
      compressedWidth: compressedWidth,
      objectCompressedURL: `https://${aws_user_files_s3_bucket}.s3.${aws_user_files_s3_bucket_region}.amazonaws.com/${compressedKey}`,
      thumbnailWidth: thumbnailWidth,
      objectThumbnailURL: `https://${aws_user_files_s3_bucket}.s3.${aws_user_files_s3_bucket_region}.amazonaws.com/${thumbnailKey}`,
      targetTable: targetTable,
      lastModified: file.lastModified,
      lastModifiedDate: file.lastModifiedDate,
      active: 'T',
      owner: username,
    };
    // console.log(createUserImageInput);

    try {
      await Storage.put(`${targetTable}/${id}.${fileEXT}`, file, {
        level: 'protected',
        contentType: 'image/*',
      });
      const result: any = await API.graphql(
        graphqlOperation(createUserImage, { input: createUserImageInput }), //当这里发上去之后lambda function 会开始做两个东西，一个是压缩，一个是做thumbnail
      );
      return result.data.createUserImage;
    } catch (error) {
      console.log(error);
      return error;
    }
  },
);

const userImageSlice = createSlice({
  name: 'userImage',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder // Cases for status of fetchArticleList (pending, fulfilled, and rejected)
      .addCase(fetchUserImageList.pending, (state) => {
        state.fetchUserImageListStatus = 'loading';
      })
      .addCase(fetchUserImageList.fulfilled, (state, action) => {
        userImageAdapter.setAll(state, action.payload.items);
        state.nextToken = action.payload.nextToken;
      })
      .addCase(fetchUserImageList.rejected, (state, action) => {
        state.fetchUserImageListStatus = 'failed';
        state.fetchUserImageListError = action.error.message;
      })
      .addCase(moreUserImageList.fulfilled, (state, action) => {
        userImageAdapter.upsertMany(state, action.payload.items);
        state.nextToken = action.payload.nextToken;
      })
      // Cases for status of postUserImage (pending, fulfilled, and rejected)
      .addCase(postUserImage.pending, (state) => {
        state.postUserImageStatus = 'loading';
      })
      .addCase(postUserImage.fulfilled, (state, action) => {
        state.postUserImageStatus = 'succeed';
        userImageAdapter.addOne(state, action.payload);
      })
      .addCase(postUserImage.rejected, (state, action) => {
        state.postUserImageStatus = 'failed';
        state.postUserImageError = action.error.message;
      });
  },
});

export const {
  selectAll: selectAllUserImages,
  selectById: selectUserImageById,
  selectIds: selectUserImageIds,
} = userImageAdapter.getSelectors((state: RootState) => state.userImage);

export const getNextToken = (state: { userImage: { nextToken: any } }) =>
  state.userImage?.nextToken;

export default userImageSlice.reducer;
