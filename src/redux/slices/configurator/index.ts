import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    scale: '',
    rotateModel: false,
    rotateDirection: false,
    missMouseDown:false,
    inAR: false,
    isModelSelect: false,
    incDec :null,

}

export const configuratorSlice = createSlice({
    initialState,
    name: "configurator",
    reducers:{
        setScale: (state, action) => {
            state.scale = action.payload;
        },
        setRotateModel: (state, action) => {
            state.rotateModel = action.payload;
        },
        setRotateDirection: (state, action) => {
            state.rotateDirection = action.payload;
        },
        setMissMouseDown: (state, action) => {
            state.missMouseDown = action.payload;
        },
        setInAR: (state, action) => {
            state.inAR = action.payload;
        },
        setIsModelSelect: (state, action) => {
            state.isModelSelect = action.payload;
        },
        setIncDec: (state, action) => {
            state.incDec = action.payload;
        },
    }
})

export const {setScale, setInAR, setIncDec, setIsModelSelect, setMissMouseDown, setRotateDirection, setRotateModel} = configuratorSlice.actions;

export default configuratorSlice.reducer;