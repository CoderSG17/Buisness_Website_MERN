import React from 'react'
import '../css/Panel.css'

function Panel(props) {
    return (
        <>
                <div className='innerdiv'>
                    <h2>{props.count}</h2>
                    <p>{props.text}</p>
                </div>
        </>
    )
}

export default Panel
