import { createSlice } from "@reduxjs/toolkit"

const userData = JSON.parse(localStorage.getItem('user'))

const initialState = {
    user: userData,
}

const authSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {
        signIn(state, action) {
            state.user = action.payload;
            localStorage.setItem('user', JSON.stringify(action.payload))
        },
        signOut(state) {
            state.user = null;
            localStorage.removeItem('user')
        },
    }
})


export const { signIn, signOut } = authSlice.actions;

export default authSlice.reducer;