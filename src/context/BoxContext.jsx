import {  createContext, useContext, useState } from "react";

const BoxContext = createContext();

export const BoxProvider = ({children}) => {

    const [isBoxSelect ,setIsBoxSelect] = useState(false);
    const [removeBox ,setRemoveBox] = useState(false);

    const [leftClicked ,setLeftClicked] = useState(false);
    const [rightClicked ,setRightClicked] = useState(false);



    return (
        <BoxContext.Provider
            value={{
                isBoxSelect ,setIsBoxSelect,
                leftClicked ,setLeftClicked,
                rightClicked ,setRightClicked,
                removeBox ,setRemoveBox
            }}
        >
            {children}
        </BoxContext.Provider>
    )
}

export const useBoxContext = () => {
    return useContext(BoxContext);
}