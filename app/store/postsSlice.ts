import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';

export type Post = {
  text: string;
  img: string | null | ArrayBuffer;
  likesCount: number | 0;
  id: number;
  userName: string;
  time: number;
};
type PostsState = {
  postsArr: Post[];
  choicenImg: string | null | ArrayBuffer;
};

const initialState: PostsState = {
  postsArr: [],
  choicenImg: null,
};
type PostAdd = {
  text: string;
  img: string | null | ArrayBuffer;
  userName: string;
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
        userName: action.payload.userName,
        time: new Date().getTime(),
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
    setPreloadImg(state, action: PayloadAction<string | null | ArrayBuffer>) {
      state.choicenImg = action.payload;
    },
  },
});

export const { addPost, removePost, addLike } = postsSlice.actions;

export default postsSlice.reducer;
