import { useState } from "react";

export function FormLog() {
    const [data, setData] = useState({
        username: "",
        password: "",

    });
    const [cards, setCards] = useState([]);
    function handleData(e) {
        const { name, value } = e.target;
        setData((d) => {
            return {
                ...d,
                [name]: value,
            };
        });
    }

    function submitData(e) {
        e.preventDefault()
        setCards(data);
        console.log(data)
    }

    return [data, cards, handleData, submitData]
}