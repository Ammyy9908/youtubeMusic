import React from 'react'
import MixedCard from './MixedCard'

function Mixed({data,setCurrentIndex}) {
    return (
        <div className="mixed">
            <h1>Mixed for you</h1>
            <div className="mixed__cards">
                {data.map((song)=>{
                    return <MixedCard cover={song.cover} songName={song.name} artist={song.artist} blur={song.blur} key={song.id} id={song.id} setCurrentIndex={setCurrentIndex}/>
                })}
            </div>
        </div>
    )
}

export default Mixed
