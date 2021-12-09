import React from 'react'

export default function MovieCard(props) {
    return (
        <div >
            
            <h1>{props.title}</h1>
            <img src={"https://services.brninfotech.com/tws/" + props.poster} alt=""></img>
            
        </div>
    )
}
