import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const initialState = {
  users: []
};

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setState: (state, action) => {
      console.log(action);
      state.users = action.payload.users
    },
    addUser: (state, action) => {
      let users = state.users
      users.push({
        id: uuidv4(),
        ...action.payload,
        address: {
          city: action.payload.address
        }
      })
      state.users = users
    },
    deleteUser: (state, action) => {
      let users = state.users.filter(user => user.id != action.payload.id)
      state.users = users
    },
  }
});

export const { addUser, deleteUser, setState } = usersSlice.actions;

export const selectUsers = (state) => state.users;

export default usersSlice.reducer;
