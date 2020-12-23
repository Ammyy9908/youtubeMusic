import React from 'react'

function CircleCard({img,artist,likes}) {
    return (
        <div className="favouriteCard">
            <img src={img} alt="favourite_thumb"/>
            <div className="favorite_details">
                <span className="artistName">{artist}</span>
                <span className="artist__likes">{likes} likes</span>
            </div>
        </div>
    )
}

export default CircleCard
