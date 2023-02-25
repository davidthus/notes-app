import { configureStore } from "@reduxjs/toolkit";
import notesReducer from "../features/notesSlice";
import userReducer from "../features/userSlice";

const store = configureStore({
  reducer: {
    notes: notesReducer,
    user: userReducer,
  },
});

export default store;
