import { Color } from "./Color";

export function Colors({ colors }) {

    return (
        <>
            <ul>
                {colors.map((color) => (
                    <Color key={color} color={color} />
                ))}
            </ul>
        </>
    );
}