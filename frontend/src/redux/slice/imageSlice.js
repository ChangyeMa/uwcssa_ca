import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";

import Storage from "@aws-amplify/storage";

const imageAdapter = createEntityAdapter();
const initialState = imageAdapter.getInitialState({
  getImageStatus: "idle",
  getImageError: null,
});

export const getImage = createAsyncThunk(
  "images/getImage",
  async ({ url, id }) => {
    const imgUrl = await Promise.all(
      Array.from(url).map((key) =>
        Storage.get(key, {
          level: "public",
          expires: 120,
          download: false,
        })
      )
    );
    const response = { imgUrl, id };
    return response;
  }
);

export const updateImage = createAsyncThunk(
  "images/updateImage",
  async ({ url, id, prevUrl }) => {
    const imgUrl = await Promise.all(
      Array.from(url).map((key) =>
        Storage.get(key, {
          level: "public",
          expires: 120,
          download: false,
        })
      )
    );
    const response = { imgUrl, id, prevUrl };
    return response;
  }
);

const imageSlice = createSlice({
  name: "images",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getImage.pending, (state, action) => {
        state.getImageStatus = "loading";
      })
      .addCase(getImage.fulfilled, (state, action) => {
        state.getImageStatus = "succeeded";
        const allUrls = action.meta.arg.url;
        const temp = Object.fromEntries(
          action.payload.imgUrl.map((key, idx) => [allUrls[idx], key])
        );
        const temp2 = Object.fromEntries([
          ["id", action.meta.arg.id],
          ["images", temp],
        ]);
        imageAdapter.addOne(state, temp2);
      })
      .addCase(getImage.rejected, (state, action) => {
        state.getImageStatus = "failed";
        state.getImageError = action.error.message;
      })
      .addCase(updateImage.fulfilled, (state, action) => {
        const allUrls = action.meta.arg.url;
        const temp = Object.fromEntries(
          Object.entries(action.payload.prevUrl).concat(
            action.payload.imgUrl.map((key, idx) => [allUrls[idx], key])
          )
        );
        console.log("check here", temp);
        const temp2 = Object.fromEntries([
          ["id", action.meta.arg.id],
          ["images", temp],
        ]);
        imageAdapter.upsertOne(state, temp2);
      });
  },
});

// export const { addImages } = imageSlice.actions;

export default imageSlice.reducer;

export const {
  selectAll: selectAllImages,
  selectById: selectImageById,
  selectIds: selectImageIds,
} = imageAdapter.getSelectors((state) => state.images);
