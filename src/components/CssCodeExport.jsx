import { useCurrentThemeData } from "../contexts/currentThemeContext"
import SyntaxHighlighter from "react-syntax-highlighter";


export function CssCodeExport(params) {

    let currentTheme = useCurrentThemeData();

    const buildCssVariableString = () => {
        let codeAsString = "";
		codeAsString += `:root {\n`;

		currentTheme.colours.forEach(colourObj => {
			codeAsString += `\t--${colourObj.themeName}-${colourObj.strength}: ${colourObj.hex};\n`
		})

		codeAsString += `}`;
		return codeAsString;
    } 
    return (
        <div>
            <h6 className="black-colour">Your CSS code is here...</h6>
            <SyntaxHighlighter>
                {buildCssVariableString()}
            </SyntaxHighlighter>
            

            <button onClick={() => navigator.clipboard.writeText(buildCssVariableString())}>Copy</button>

        </div>
    )
};
