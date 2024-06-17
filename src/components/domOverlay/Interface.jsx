import React, { forwardRef, useEffect, useState } from "react";
import { useConfigurator } from "../../context/Configurator";
import "./index.css";

const Interface = forwardRef((props, ref) => {
  const {
    scale,
    setScale,
    rotateModel,
    setRotateModel,
    inAR,
    setInAr,
    rotateDirection,
    setRotateDirection,
    isModelSelect,
    setIsModelSelect,
    incDec,
    setIncDec,
  } = useConfigurator();

  const [mouseDown, setMouseDown] = useState(false);

  const [isInitialXStored, setIsInitialXStored] = useState(false);
  const [InitialXStored, setInitialXStored] = useState(null);

  const [isInitialYStored, setIsInitialYStored] = useState(false);
  const [InitialYStored, setInitialYStored] = useState(null);

  useEffect(() => {
    if (mouseDown) {
      setRotateModel(!rotateModel);
    }
  }, [mouseDown]);

  const showEnd = (e) => {
    setMouseDown(false);
    setRotateModel(!rotateModel);
    setRotateDirection(null);
    setIsModelSelect(true);
    setIncDec(null);
  };

  const showStart = (e) => {
    setMouseDown(true);
    setIsInitialXStored(true);
    setInitialXStored(e.changedTouches[0].clientX);

    setIsInitialYStored(true);
    setInitialYStored(e.changedTouches[0].clientY);
  };

  const showMove = (e) => {
    if (isInitialXStored) {
      if (InitialXStored - e.changedTouches[0].clientX > 50) {
        setInitialXStored(e.changedTouches[0].clientX);
        // console.log(InitialXStored - e.changedTouches[0].clientX)
        setRotateDirection("right");
      } else if (InitialXStored - e.changedTouches[0].clientX < -50) {
        setInitialXStored(e.changedTouches[0].clientX);
        setRotateDirection("left");
      }
      // else if(InitialXStored - e.changedTouches[0].clientX <49|| InitialXStored - e.changedTouches[0].clientX > -49){
      //   setRotateDirection(null);
      // }
    }

    if (isInitialYStored) {
      if (InitialYStored - e.changedTouches[0].clientY > 50) {
        setInitialYStored(e.changedTouches[0].clientY);
        setIncDec("increase");
        // console.log("increase")
      } else if (InitialYStored - e.changedTouches[0].clientY < -50) {
        setInitialYStored(e.changedTouches[0].clientY);
        setIncDec("decrease");

        // console.log("decrease")
      }
    }
    // console.log(e.changedTouches[0].clientX)
  };

  // useEffect(() => {
  //   console.log(isModelSelect)
  // }, [isModelSelect])

  // ${isModelSelect ? ' hidden' : ''}
  return (
    <>
      {isModelSelect ? (
        <div
          onTouchStart={showStart}
          onTouchMove={showMove}
          onTouchEnd={showEnd}
          className={`absolute  bottom-[5rem] ${
            inAR ? "pointer-events-all" : "pointer-events-none"
          }   ${isModelSelect ? "w-0 h-0" : "w-[100%] h-[100%]"}`}
          ref={ref}
        >
          <div className=" absolute bottom-[8vh] w[100%]">
            <div className=" justify-center flex items-center w-[90%] gap-[1rem]  pointer-events-auto m-0 p-1"></div>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
});

export default Interface;
