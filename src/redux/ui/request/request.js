import { createSlice } from "@reduxjs/toolkit";

export const RequestSlice = createSlice({
  name: "request",
  initialState: {},
  extraReducers: (builder) => builder.addMatcher(({type})=>type.endsWith('/pending')),
});
