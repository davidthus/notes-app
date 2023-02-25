import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isEditing: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    toggleIsEditing: (state) => {
      if (state.isEditing) {
        return { isEditing: false };
      } else {
        return { isEditing: true };
      }
    },
  },
});

export const { toggleIsEditing } = userSlice.actions;
export default userSlice.reducers;
