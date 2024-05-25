import { createContext, useContext, useEffect, useState } from "react";
import { useLocalStorage } from "react-use";


export const BaseColourGlobalDataContext = createContext("#000000");
export const BaseColourGlobalDispatchContext = createContext(null);

export function useBaseColourGlobalDate(){
    return useContext(BaseColourGlobalDataContext);
}

export function useBaseColourGlobalDispatch(){
    return useContext(BaseColourGlobalDispatchContext);
};

export function BaseColourProvider({children}){
    let [baseColour, setBaseColour] = useState("#000000");

    let [baseColourLocalStorage, setBaseColourLocalStorage] = useLocalStorage("css-basecolour", "#000000");

    useEffect(() => {
        setBaseColour(baseColourLocalStorage);
    }, []);

    useEffect(() => {
        setBaseColourLocalStorage(baseColour);
    }, [baseColour]);

    return(
        <BaseColourGlobalDataContext.Provider value={baseColour}>
            <BaseColourGlobalDispatchContext.Provider value={setBaseColour}>
                {children}
            </BaseColourGlobalDispatchContext.Provider >
        </BaseColourGlobalDataContext.Provider>
    )
};
