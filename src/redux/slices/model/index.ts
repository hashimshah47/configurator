import { createSlice } from "@reduxjs/toolkit";

export const modelSlice = createSlice({
    initialState:'',
    name: "model",
    reducers:{
        setCurrentModel: (state, action) => {
            return action.payload;
        },
    }
})

export const {setCurrentModel} = modelSlice.actions;

export default modelSlice.reducer;