import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Messages = {
  addr: string;
  text: string;
};
export type User = {
  name: string;
  descr: string;
  logo: string;
  id: number;
  messages?: Messages;
};
export type friendsEnv = {
  id: number;
  list: User[];
  others: User[];
};
type InitialState = {
  currentUser: User;
  friendsList: friendsEnv[];
  usersList: User[];
};
const initialState: InitialState = {
  currentUser: {
    name: 'Vitaliy Scherba',
    descr: 'was born in 2007',
    logo: '',
    id: 3,
  },
  friendsList: [
    {
      id: 1,
      list: [],
      others: [],
    },
    {
      id: 2,
      list: [],
      others: [],
    },
    {
      id: 3,
      list: [],
      others: [],
    },
  ],
  usersList: [
    {
      name: 'Polina Leonenko',
      descr: 'was born in 2009',
      logo: '',
      id: 1,
    },
    {
      name: 'Nikita Shugai',
      descr: 'was born in 1989',
      logo: '',
      id: 2,
    },
    {
      name: 'Vitaliy Scherba',
      descr: 'was born in 2007',
      logo: '',
      id: 3,
    },
  ],
};

const users = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addToFriens(state, action: PayloadAction<User>) {
      let user = state.friendsList.find(el => {
        return el.id === state.currentUser.id;
      });
      let addresser = state.friendsList.find(el => {
        return el.id === action.payload.id;
      });
      if (user && addresser) {
        user.list.push({
          name: action.payload.name,
          descr: action.payload.descr,
          id: action.payload.id,
          logo: action.payload.logo,
        });
        addresser.list.push({
          name: state.currentUser.name,
          descr: state.currentUser.descr,
          logo: state.currentUser.logo,
          id: state.currentUser.id,
        });
        user.others = user.others.filter(user => user.id !== action.payload.id);
        addresser.others = addresser.others.filter(
          user => user.id !== state.currentUser.id,
        );
      }
    },
    deleteFromFriends(state, action: PayloadAction<User>) {
      let user = state.friendsList.find(el => {
        return el.id === state.currentUser.id;
      });
      let addresser = state.friendsList.find(el => {
        return el.id === action.payload.id;
      });
      if (user && addresser) {
        user.others.push({
          name: action.payload.name,
          descr: action.payload.descr,
          logo: action.payload.logo,
          id: action.payload.id,
        });
        addresser.others.push({
          name: state.currentUser.name,
          descr: state.currentUser.descr,
          logo: state.currentUser.logo,
          id: state.currentUser.id,
        });
        user.list = user.list.filter(user => user.id !== action.payload.id);
        addresser.list = addresser.list.filter(
          user => user.id !== state.currentUser.id,
        );
      }
    },
    changeCurrent(state, action) {
      let user = {
        name: 'Polina Leonenko',
        descr: 'was born in 2009',
        logo: '',
        id: 1,
      };
      state.currentUser = user;
    },
    pushusers(state, action) {
      let user = state.friendsList.find(el => {
        return el.id === state.currentUser.id;
      });
      if (user) {
        user.others.push(...action.payload);
      }
    },
  },
});

export default users.reducer;

export const { addToFriens, deleteFromFriends, changeCurrent, pushusers } =
  users.actions;
