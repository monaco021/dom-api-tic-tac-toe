//React Compnent - function that outputs something visual

const ColorSquare = ({color, dimensions}) => {
    return (
        <div style={{
            width: `${dimensions}`,
            height: `${dimensions}`,
            background: `rbg(${color})`
        }}
        ></div>
    )
}

export default ColorSquare;
