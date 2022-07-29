import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice( {
    name: 'auth',
    initialState: {isloagedIn : false , name: "Taha hussain"},
    reducers: {
        logInOut: (state ) => {
            state.isloagedIn = !state.isloagedIn
        }
    }
} )

export const {logInOut} = authSlice.actions
export default authSlice.reducer