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
    editUser: (state, action) => {
      let users = state.users
      const { name, username, email, address } = action.payload.data
      const index = users.findIndex(user => user.id == action.payload.id)
      let user = users[index]
      user.name = name
      user.username = username
      user.email = email
      user.address.city = address
      users[index] = user
      state.users = users
    },
    deleteUser: (state, action) => {
      let users = state.users.filter(user => user.id != action.payload.id)
      state.users = users
    },
    sortUsers: (state, action) => {
      let newUsersOrder = state.users.sort((a, b) => {
        var usernameA = a.username.toLowerCase(),
          usernameB = b.username.toLowerCase()
        if (usernameA < usernameB)
          return -1
        if (usernameA > usernameB)
          return 1
        return 0
      })

      if (action.payload.sort == 'dsc') {
        newUsersOrder.reverse()
      }

      state.users = newUsersOrder
    }
  }
});

export const { setState, addUser, editUser, deleteUser, sortUsers } = usersSlice.actions;

export const selectUsers = (state) => state.users;

export default usersSlice.reducer;
