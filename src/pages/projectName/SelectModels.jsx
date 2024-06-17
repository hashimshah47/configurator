import React, { useEffect } from 'react'
// import { useModelContext } from '../../context/ModelContext';
import Table from "../../assets/images/table.jpg";
import DoubleTable  from "../../assets/images/DoubleTable.jpg";

import Arm from "../../assets/images/Arm.png";
import Hotels from "../../assets/images/Hotels.png";
import PC from "../../assets/images/PC.png";
import Printer from "../../assets/images/Printer.png";
import Lamp from "../../assets/images/Lamp.png";
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { setCurrentModel } from '../../redux/slices/model';
import { setCurrentInstrument, setCurrentInstrumentSelected } from '../../redux/slices/instrument';



const SelectModels = () => {
// const {currentModel, setCurrentModel, currentPanel, setCurrentPanel, currentInstrument, setCurrentInstrument, hotelSelected, setHotelSelected} = useModelContext();

const currentModel = useAppSelector(state => state.model);
const currentPanel = useAppSelector(state => state.panel);

const dispatch = useAppDispatch();

const handleTable = () => {
dispatch(setCurrentModel("table"))
}
const handleDoubleTable = () => {
  dispatch(setCurrentModel("doubletable"))
}

const handleHotels = () => {
  console.log("clicking hotel")
  dispatch(setCurrentInstrument("hotel"))
  dispatch(setCurrentInstrumentSelected(true));
  // setHotelSelected(true);
}

const handleArm = () => {
  dispatch(setCurrentInstrument("arm"))
  dispatch(setCurrentInstrumentSelected(true));
  // console.log(currentInstrument);
}

const handlePC = () => {
  dispatch(setCurrentInstrument("pc"))
  dispatch(setCurrentInstrumentSelected(true));
  // setCurrentInstrument('pc');
  // console.log(currentInstrument);
}

const handlePrinter = () => {
  dispatch(setCurrentInstrument("printer"))
  dispatch(setCurrentInstrumentSelected(true));
  // setCurrentInstrument('printer');
  // console.log(currentInstrument);
}
const handleLamp = () => {
  dispatch(setCurrentInstrument("lamp"))
  dispatch(setCurrentInstrumentSelected(true));
  // setCurrentInstrument('lamp');
  // console.log(currentInstrument);
}
// useEffect(() => {
//   setCurrentPanel('tables');
// },[])

// useEffect(() => {
//   // console.log(currentPanel);
// },[currentPanel])


  return (
    <>
     { currentPanel === 'instrument' &&
    <>
      <h2 className=" text-xl text-black">Instruments</h2>
      <div className="container mx-auto p-4">
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-gray-200 p-1 rounded-xl shadow border border-gray-400">
          <img className=" rounded-lg w-36 h-40 m-2" src={Arm} onClick={handleArm} 
          />
        </div>
        <div className="bg-gray-200 p-1 rounded-xl shadow border border-gray-400">
          <img className=" w-36 rounded-lg h-40 m-2" src={PC} onClick={handlePC} 
          />
        </div>
        <div className=" bg-gray-200 p-1 rounded-xl shadow border border-gray-400">
          <img className="rounded-lg w-36 h-40 m-2" src={Printer} onClick={handlePrinter} 
          />
        </div>        
        <div className=" bg-gray-200 p-1 rounded-xl shadow border border-gray-400">
          <img className="rounded-lg w-36 h-40 m-2" src={Lamp} onClick={handleLamp} 
          />
        </div>        
        <div className=" bg-gray-200 p-1 rounded-xl shadow border border-gray-400">
          <img className="rounded-lg w-36 h-40 m-2" src={Hotels} onClick={handleHotels} />
        </div> 
        </div>
      </div>
       </>
       } 


{ currentPanel === 'table' &&
     <> 
      <h2 className=" text-xl text-black">Tables</h2>
      <div className="flex">
        <div className=" rounded-xl">
          <img className=" rounded-lg h-40 m-2" src={Table} onClick={handleTable} />
        </div>
        <br />
        <div className=" rounded-xl">
          <img className="rounded-lg h-40 m-2" src={DoubleTable}onClick={handleDoubleTable} />
        </div>
      </div>
      </>
    }
    </>
  );
}

export default SelectModels