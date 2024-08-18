// import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// export type Message = {
//   text: string;
//   addresserId: number;
//   getterId: number;
// };
// export type User = {
//   name: string;
//   id: number;
//   messages: Message[] | false;
// };

// type InitialState = {
//   currentAddr: User | false;
//   usersList: User[];
// };
// const initialState: InitialState = {
//   currentAddr: false,
//   usersList: [],
// };

// const messages = createSlice({
//   name: 'messages',
//   initialState,
//   reducers: {
//     addToList(state, action: PayloadAction<User>) {
//       state.usersList.push({
//         name: action.payload.name,
//         id: action.payload.id,
//         messages: action.payload.messages,
//       });
//     },
//     changeAddr(state, action: PayloadAction<User>) {
//       state.currentAddr = {
//         name: action.payload.name,
//         id: action.payload.id,
//         messages: action.payload.messages,
//       };
//     },
//   },
// });

// export default messages.reducer;

// export const { addToList, changeAddr } = messages.actions;
