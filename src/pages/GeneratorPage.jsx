import { useEffect, useState } from "react";
import { useBaseColourGlobalDate } from "../contexts/baseColourContext";
import { useBaseColourGlobalDispatch } from "../contexts/baseColourContext";
import { Sketch } from "@uiw/react-color";
import { useCurrentThemeData } from "../contexts/currentThemeContext";
import { ColourBlock } from "../components/ColourBlock";
import PureModal from 'react-pure-modal';
import 'react-pure-modal/dist/react-pure-modal.min.css';
import { CssCodeExport } from "../components/CssCodeExport";








export default function GeneratorPage() {
    
    const [modal, setModal] = useState(false);

    let baseColourGlobal = useBaseColourGlobalDate();

    let setBaseColourGlobal = useBaseColourGlobalDispatch();

    let currentTheme = useCurrentThemeData();

    let [formBaseColour, setFormBaseColour] = useState(baseColourGlobal);

    useEffect(() => {
        setFormBaseColour(baseColourGlobal);
    }, [baseColourGlobal]);

    useEffect(() => {
        setBaseColourGlobal(formBaseColour);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [formBaseColour])
    

    return(
        <div>
            <PureModal
                header={currentTheme.displayName}
                footer={
                    <div>
                    <h6 className="black-colour">Thank you for generating some colours</h6>
                    </div>
                }
                isOpen={modal}
                closeButton="X"
                closeButtonPosition="bottom"
                onClose={() => {
                    setModal(false);
                    return true;
                }}
                >
                <p className="black-colour">Your content</p>
                <CssCodeExport />
            </PureModal>
            <button onClick={() => setModal(!modal)}>Toggle Model</button>
            <h1>{formBaseColour}</h1>
            <Sketch color={formBaseColour} onChange={(colour) => setFormBaseColour(colour.hex)} />
            {currentTheme.colours?.map((colourEntry, index) => {
				return <ColourBlock key={currentTheme.name + index} colourEntry={colourEntry} />
			})}
        </div>
    )
};
