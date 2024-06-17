import { configureStore } from '@reduxjs/toolkit';
import modelSlice from './slices/model'
import instrumentSlice from './slices/instrument';
import panelSlice  from './slices/panel';
import configuratorSlice  from './slices/configurator';

export const store = configureStore({
    reducer:{
        model: modelSlice,
        instrument: instrumentSlice,
        panel: panelSlice,
        configurator: configuratorSlice 
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch