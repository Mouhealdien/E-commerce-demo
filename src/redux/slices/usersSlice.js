import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
  name: "users",
  initialState: {
    users: [
      {
        id: "44584",
        email: "admin@admin.com",
        password: "admin",
      },
      {
        id: "561634",
        email: "user1@user1.com",
        password: "user1",
      },
    ],
  },
  reducers: {
    addUser: (state, action) => {
      const newUser = {
        id: String(Math.floor(1000000000 + Math.random() * 9000000000)),
        ...action.payload,
      };
      state.users.push(newUser);
    },
  },
});

export const { addUser } = usersSlice.actions;

export default usersSlice.reducer;
