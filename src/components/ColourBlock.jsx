

export function ColourBlock({colourEntry}) {
    return(
        <div className="colourBlock" style={{backgroundColor: colourEntry.hex}}>
        <h1 className="black-colour">{colourEntry.hex}</h1>
        <h2 className="black-colour">{colourEntry.themeName + "-" + colourEntry.strength}</h2>
        </div>
    )
};
