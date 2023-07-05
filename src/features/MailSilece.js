import { createSlice } from "@reduxjs/toolkit"


const initialState = {
  isComposeOpen: false,
}

const mailslice = createSlice({
  name: 'mail',
  initialState: initialState,
  reducers: {
    composeOpenHandler(state) {
      state.isComposeOpen = true;
    },
    composeCloseHandler(state) {
      state.isComposeOpen = false;
    }
  }
})


export const { composeOpenHandler, composeCloseHandler } = mailslice.actions;

export default mailslice.reducer;