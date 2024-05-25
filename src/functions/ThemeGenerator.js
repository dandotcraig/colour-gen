/*

### Colour Object 

```js
{
	hex: "#000000",
	strength: 100,
	rgba: [255, 255, 255, 255]
}
```

### Theme List 

```js
{
	name: "violet eggplant"
	colours: [
		Colour Objects go here 
	]
}
```

*/
import { colorblender, extend } from "colorblender";

import nameExtension from "colorblender/extensions/name"
import { paletten } from "paletten";
extend([nameExtension]);

export function generateTones(baseColour, themeName="") {
    let newThemeName = themeName.toLocaleLowerCase().replaceAll(" ", "-") || colorblender(baseColour).name().toLocaleLowerCase().replaceAll(" ", "-");

    let rawPalettenOutput = paletten(baseColour);

    let finalizedOutput = {
        name: newThemeName,
        displayName: themeName || colorblender(baseColour).name(),
        colours: []
    }

    let formattedColoursList = Object.keys(rawPalettenOutput).map((key) => {
        return {
            strength: key,
            hex: rawPalettenOutput[key],
            rgb: colorblender(rawPalettenOutput[key]).rgb(),
            themeName: newThemeName
        }
    })

    finalizedOutput.colours = formattedColoursList;

    return finalizedOutput;

};


