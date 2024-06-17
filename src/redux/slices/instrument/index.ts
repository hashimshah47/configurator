import { createSlice } from "@reduxjs/toolkit";

interface Instrument {
    rotation: Float32Array[];
    position: Float32Array[];
    shape: string; // Adjust the type of `shape` as necessary
  }
  
interface InstrumentState {
    instrument: string;
    instrumentSelected: boolean;
    instrumentsList: Instrument[]; // Define the type of the objects in the array
  }

const initialState:InstrumentState = {
    instrument: '',
    instrumentSelected: false,
    instrumentsList: []
}

export const instrumentSlice = createSlice({
    initialState,
    name: "instrument",
    reducers:{
        setCurrentInstrument: (state, action) => {
            state.instrument = action.payload;
        },
        setCurrentInstrumentSelected: (state, action) => {
            state.instrumentSelected = action.payload;
        },
        setInstrumentArray: (state, action) => {
            state.instrumentsList = [...state.instrumentsList, action.payload];
        },
    }
})

export const {setCurrentInstrument, setCurrentInstrumentSelected, setInstrumentArray} = instrumentSlice.actions;

export default instrumentSlice.reducer;