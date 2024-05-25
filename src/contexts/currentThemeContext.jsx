import { createContext, useContext, useEffect, useState } from "react";
import { useLocalStorage } from "react-use";
import { useBaseColourGlobalDate } from "./baseColourContext";
import { generateTones } from "../functions/ThemeGenerator";



export const CurrentThemeDataContext = createContext([]);
export const CurrentThemeDisplayContext = createContext(null);


export function useCurrentThemeData(){
	return useContext(CurrentThemeDataContext);
}

export function useCurrentThemeDispatch() {
    return useContext(CurrentThemeDisplayContext);
};

export function CurrentThemeProvider({children}) {
    let [currentTheme, setCurrentTheme] = useState([]);

    let [currentThemeLocalStorage, setCurrentThemeLocalStorage] = useLocalStorage("css-currenttheme", []);

    let baseColour = useBaseColourGlobalDate();

    useEffect(() => {
        setCurrentTheme(generateTones(baseColour));
    }, [baseColour]);

    useEffect(() => {
        setCurrentTheme(currentThemeLocalStorage)
    }, []);

    useEffect(() => {
        setCurrentThemeLocalStorage(currentTheme);
    }, [currentTheme])

    return(
        <CurrentThemeDataContext.Provider value={currentTheme}>
            <CurrentThemeDisplayContext.Provider value={setCurrentTheme}>
                {children}
            </CurrentThemeDisplayContext.Provider >
        </CurrentThemeDataContext.Provider>
    )
};
