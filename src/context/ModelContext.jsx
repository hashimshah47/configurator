import React from 'react';
import { createContext, useContext, useState } from 'react';
// import {useControls} from "leva";

const ModelContext = createContext({});

export const ModelProvider = (props) => {

  // const {Model} = useControls({
  //   Model: {
  //     options: {
  //       "Druid": "druid",
  //       "Table": "table",
  //       "Bench": "bench",
  //     },
  //     onChange:(value) => {
  //       setCurrentModel(value);
  //     }
  //   }
  // })
  const [currentModel, setCurrentModel] = useState('');
  const [currentPanel, setCurrentPanel] = useState('');
  const [currentInstrument, setCurrentInstrument] = useState('');
  const [hotelSelected, setHotelSelected] = useState(false);


  return (
    <ModelContext.Provider
    value={{currentModel, setCurrentModel, 
      currentPanel, setCurrentPanel, 
      currentInstrument, setCurrentInstrument,
      hotelSelected, setHotelSelected
    }}
    >
      {props.children}
    </ModelContext.Provider>
  )
}

export const useModelContext = () => {
  return useContext(ModelContext);
};