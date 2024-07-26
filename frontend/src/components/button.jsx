'use client'
import { useEffect, useState } from "react";

export default function Button(props) {
    // const [color, setColor] = useState('blue');

    // useEffect(() => {
    //     const determineColor = async () => {
    //         let determinedColor = 'blue';
    //         if (props.color === 'red') {
    //             determinedColor = 'red';
    //         }
    //         // Simulasi tugas asinkron, misalnya fetch atau penundaan
    //         await new Promise(resolve => setTimeout(resolve, 1000));
    //         setColor(determinedColor);
    //     };

    //     determineColor();
    // }, []);

    let clas = `py-2 px-4 bg-blue text-white hover:text-blue hover:bg-backgroundPage border-0 rounded-lg`
    if (props.color == 'blue') {
        clas = `py-2 px-4 bg-blue text-white hover:text-blue hover:bg-backgroundPage border-0 rounded-lg`
    } else if (props.color == 'red') {
        clas = `py-2 px-4 bg-red text-white hover:text-red hover:bg-backgroundPage border-0 rounded-lg`
    }
    return (
        <button
            type={props.type ?? "button"}
            onClick={props.click}
            className={clas}>
            {props.text}
        </button>
    )
}