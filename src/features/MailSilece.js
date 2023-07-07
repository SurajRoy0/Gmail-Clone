import { createSlice } from "@reduxjs/toolkit"


const initialState = {
  isComposeOpen: false,
  selectedMail: null,
}

const mailSlice = createSlice({
  name: 'mail',
  initialState: initialState,
  reducers: {
    composeOpenHandler(state) {
      state.isComposeOpen = true;
    },
    composeCloseHandler(state) {
      state.isComposeOpen = false;
    },
    selectedMailHandler(state, action) {
      state.selectedMail = action.payload;
    }
  }
})


export const { composeOpenHandler, composeCloseHandler, selectedMailHandler } = mailSlice.actions;

export default mailSlice.reducer;