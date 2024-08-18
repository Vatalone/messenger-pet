import { configureStore } from '@reduxjs/toolkit';
import postsReducer from './postsSlice';
import usersReducer from './usersSlice';
import messagesReducer from './messagesSlice';

const store = configureStore({
  reducer: {
    posts: postsReducer,
    users: usersReducer,
    messages: messagesReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
