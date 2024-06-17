import { createSlice } from "@reduxjs/toolkit";

export const panelSlice = createSlice({
    initialState:'table',
    name: "panel",
    reducers:{
        setCurrentPanel: (state, action) => {
            return action.payload;
        },
    }
})

export const {setCurrentPanel} = panelSlice.actions;

export default panelSlice.reducer;