import {createSlice, PayloadAction} from "@reduxjs/toolkit"
import { set } from "react-hook-form"


interface userState {
    userData : object
}

const initialState: userState = {
    userData: {}
}

const UserSlice = createSlice({
    name:"userData",
    initialState,
    reducers:{
        setUserData: (state, action: PayloadAction<object>) => {
            state.userData = action.payload
        }
    }
})

export const {setUserData} = UserSlice.actions
export default UserSlice.reducer;