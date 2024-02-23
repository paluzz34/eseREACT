import { useEffect, useState } from "react";

export function useCurrentLocation() {
    const [position, setPosition] = useState(null);

    useEffect(() => {
        const getPosition = (position) => {
            setPosition(position.coords);
            console.log(position.coords)
        }
        const errorPosition = (error) => {
            console.error(error);
        }
        navigator.geolocation.getCurrentPosition(getPosition, errorPosition)
    }, [])


    return [position]
}