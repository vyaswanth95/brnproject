import React from 'react'

export default function ActorCards(props) {
    return (
        <div>
            <h2 className="actorc1">{props.actor.join(",") }</h2>
        </div>
    )
}
