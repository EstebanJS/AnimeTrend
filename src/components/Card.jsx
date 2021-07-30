import React from 'react'
import '@styles/Card.sass'

const Card = ({data}) => {
    return (
        <div className="card">
            <img loading="lazy" src={data.attributes.posterImage.small} alt="" width="150" height="212.33"/>
        </div>
    )
}

export default Card
