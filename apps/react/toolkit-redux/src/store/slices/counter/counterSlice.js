import { createSlice } from "@reduxjs/toolkit";

const initialSlice = {
  value: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialSlice,
  reducers: {
    increment: (state) => {
      state.counter += 1;
    },
  },
});

export const { increment } = counterSlice.actions;
