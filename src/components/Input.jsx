import React from 'react'
import { useParams } from 'react-router-dom'

const Input = (props) => {

    // this is how we extract keys from the route
    const { display } = useParams();

    return (
        <div>
            {!isNaN(display) ?
                <p>The number is: {display}</p>:
                <p>The word is: {display}</p>
            }
        </div>
    )
}

export default Input;