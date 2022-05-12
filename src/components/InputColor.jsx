import React from 'react'
import { useParams } from 'react-router-dom'

const InputColor = (props) => {
    const { display, textcolor, backgroundcolor } = useParams();
    return (
        <div>
            <h3 style={{
                color: textcolor,
                backgroundColor: backgroundcolor
            }}>
                The word is: {display}</h3>
        </div>
    )
}

export default InputColor