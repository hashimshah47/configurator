import { Children, createContext, useContext, useState } from "react";

const ConfiguratorContext = createContext();

export const ConfiguratorProvider = ({children}) => {
    const [legs, setLegs] = useState(0);
    const [box ,addBox] = useState(false);
    const [scale, setScale] = useState(50);
    const [rotateModel, setRotateModel] = useState(false);
    const [rotateDirection, setRotateDirection] = useState(false);

    const [missMouseDown, setMissMouseDown] = useState(false);


    const [inAR, setInAr] = useState(false);

    const [isModelSelect ,setIsModelSelect] = useState(true);
    const [incDec, setIncDec] = useState(null);
    const [shape, setShape] = useState("");



    return (
        <ConfiguratorContext.Provider
            value={{
                legs, setLegs,
                box, addBox,
                scale, setScale,
                rotateModel, setRotateModel,
                rotateDirection, setRotateDirection,
                inAR, setInAr,
                isModelSelect ,setIsModelSelect,
                incDec, setIncDec,
                missMouseDown, setMissMouseDown,
                shape, setShape
            }}
        >
            {children}
        </ConfiguratorContext.Provider>
    )
}

export const useConfigurator = () => {
    return useContext(ConfiguratorContext);
}