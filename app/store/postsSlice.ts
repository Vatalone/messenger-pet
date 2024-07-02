import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';

type Post = {
  text: string;
  img: string | false | null | ArrayBuffer;
  likesCount: number | 0;
  id: number;
};
type PostsState = {
  postsArr: Post[];
};

const initialState: PostsState = {
  postsArr: [],
};
type PostAdd = {
  text: string;
  img: string | false | null | ArrayBuffer;
};

type PostLike = {
  id: number;
  action: boolean;
};

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    addPost(state, action: PayloadAction<PostAdd>) {
      state.postsArr.push({
        text: action.payload.text,
        img: action.payload.img,
        likesCount: 0,
        id: new Date().getTime(),
      });
    },
    removePost(state, action: PayloadAction<number>) {
      state.postsArr = state.postsArr.filter(post => {
        return post.id !== action.payload;
      });
    },
    addLike(state, action: PayloadAction<PostLike>) {
      if (action.payload.action === true) {
        state.postsArr.forEach(el => {
          if (el.id === action.payload.id) el.likesCount += 1;
        });
      }
      if (action.payload.action === false) {
        state.postsArr.forEach(el => {
          if (el.id === action.payload.id) el.likesCount -= 1;
        });
      }
    },
  },
});

export const { addPost, removePost, addLike } = postsSlice.actions;

export default postsSlice.reducer;
