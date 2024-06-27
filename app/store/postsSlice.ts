import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Post = {
	text: string;
	img: string | false;
	likesCount: number;
}
type PostsState = {
	postsArr: Post[];
}

const initialState: PostsState = {
	postsArr: [],
}

const postsSlice = createSlice({
	name: 'posts',
	initialState,
	reducers: {}
})

export default postsSlice.reducer;