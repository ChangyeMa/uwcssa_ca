/*
 * @Author: Shen Shu
 * @Date: 2022-05-20 21:02:00
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-05-26 18:28:01
 * @FilePath: /uwcssa_ca/src/redux/comment/commentSlice.tsx
 * @Description:
 *
 */
/* eslint-disable @typescript-eslint/no-explicit-any */

import {
  commentSortByArticleCommentsIdCreatedAt,
  createComment,
} from './custom_q_m_s';
import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from '@reduxjs/toolkit';

import API from '@aws-amplify/api';
import { RootState } from 'redux/store';
import { getComment } from 'graphql/queries';
import { graphqlOperation } from '@aws-amplify/api-graphql';
import { updateComment } from 'graphql/mutations';

export type Comment = {
  id: string;
  content: string;
  isDeleted: boolean;
  articleCommentId: string;
  createdAt: string;
  updatedAt: string;
  owner: string;
  user?: { avatarURL: string; id: string; name: string };
};

const commentAdapter = createEntityAdapter<Comment>({
  // selectId: (item) => item.id,
  sortComparer: (a, b) => b.createdAt.localeCompare(a.createdAt),
});

const initialState = commentAdapter.getInitialState({
  fetchCommentListStatus: 'idle',
  fetchCommentListError: null,
  fetchCommentStatus: 'idle',
  fetchCommentError: null,
  postCommentStatus: 'idle',
  postCommentError: null,
  postCommentImgStatus: 'idle',
  postCommentImgError: null,
  updateCommentDetailStatus: 'idle',
  updateCommentDetailError: null,
});

export const fetchCommentList = createAsyncThunk(
  'comment/fetchCommentList',
  async ({
    isAuth,
    articleCommentsId,
  }: {
    isAuth: boolean;
    articleCommentsId: string;
  }) => {
    try {
      const result: any = await API.graphql({
        query: commentSortByArticleCommentsIdCreatedAt,
        variables: {
          articleCommentsId: articleCommentsId,
          isDeleted: false,
          sortDirection: 'DESC',
          limit: 10,
        },
        authMode: isAuth ? undefined : 'AWS_IAM',
      });
      return result.data.commentSortByArticleCommentsIdCreatedAt.items;
    } catch (error) {
      console.log(error);
    }
  },
);

export const fetchComment = createAsyncThunk(
  'comment/fetchComment',
  async ({ commentId, isAuth }: { commentId: string; isAuth: boolean }) => {
    try {
      const result: any = await API.graphql({
        query: getComment,
        variables: { id: commentId },
        authMode: isAuth ? undefined : 'AWS_IAM',
      });
      if (result.data.getComment === null) {
        return { id: commentId, description: 'not-found' };
      }
      return result.data.getComment;
    } catch (error) {
      console.log(error);
    }
  },
);

export const postComment = createAsyncThunk(
  'comment/postComment',
  async ({ createCommentInput }: { createCommentInput: Comment }) => {
    try {
      const result: any = await API.graphql(
        graphqlOperation(createComment, { input: createCommentInput }),
      );
      return result.data.createComment;
    } catch (error) {
      console.log(error);
    }
  },
);

export const updateCommentDetail = createAsyncThunk(
  'comment/updateCommentDetail',
  async ({ updateCommentInput }: { updateCommentInput: Comment }) => {
    try {
      const result: any = await API.graphql(
        graphqlOperation(updateComment, { input: updateCommentInput }),
      );
      return result.data.updateComment;
    } catch (error) {
      console.log(error);
    }
  },
);

const commentSlice = createSlice({
  name: 'comment',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      // Cases for status of fetchCommentList (pending, fulfilled, and rejected)
      .addCase(fetchCommentList.pending, (state) => {
        state.fetchCommentListStatus = 'loading';
      })
      .addCase(fetchCommentList.fulfilled, (state, action) => {
        state.fetchCommentListStatus = 'succeed';
        //commentAdapter.removeAll(state);
        commentAdapter.upsertMany(state, action.payload);
      })
      .addCase(fetchCommentList.rejected, (state, action) => {
        state.fetchCommentListStatus = 'failed';
        state.fetchCommentError = action.error.message;
      })
      // Cases for status of selectedComment (pending, fulfilled, and rejected)
      .addCase(fetchComment.pending, (state) => {
        state.fetchCommentStatus = 'loading';
      })
      .addCase(fetchComment.fulfilled, (state, action) => {
        state.fetchCommentStatus = 'succeed';
        commentAdapter.upsertOne(state, action.payload);
      })
      .addCase(fetchComment.rejected, (state, action) => {
        state.fetchCommentStatus = 'failed';
        state.fetchCommentError = action.error.message;
      })
      // Cases for status of postComment (pending, fulfilled, and rejected)
      .addCase(postComment.pending, (state) => {
        state.postCommentStatus = 'loading';
      })
      .addCase(postComment.fulfilled, (state, action) => {
        state.postCommentStatus = 'succeed';
        // state.comments.unshift(action.payload.data.createComment);
        commentAdapter.addOne(state, action.payload);
        // state.postCommentStatus = "idle";
      })
      .addCase(postComment.rejected, (state, action) => {
        state.postCommentStatus = 'failed';
        state.postCommentError = action.error.message;
      })
      // Cases for status of updateComment (pending, fulfilled, and rejected)
      .addCase(updateCommentDetail.pending, (state) => {
        state.updateCommentDetailStatus = 'loading';
      })
      .addCase(updateCommentDetail.fulfilled, (state) => {
        state.updateCommentDetailStatus = 'succeed';
        //state.comments.unshift(action.payload.data.createComment);
        //commentAdapter.upsertOne(state, action.payload);
        // state.updateCommentStatus = "idle";
      })
      .addCase(updateCommentDetail.rejected, (state, action) => {
        state.updateCommentDetailStatus = 'failed';
        state.updateCommentDetailError = action.error.message;
      });
  },
});

export const {
  selectAll: selectAllComments,
  selectById: selectCommentById,
  selectIds: selectCommentIds,
} = commentAdapter.getSelectors((state: RootState) => state.comment);

export default commentSlice.reducer;
