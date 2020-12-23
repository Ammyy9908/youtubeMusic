import React from 'react'
import MoreVertIcon from '@material-ui/icons/MoreVert';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import { IconButton } from '@material-ui/core';

function MixedCard({cover,songName,artist,blur,id,setCurrentIndex}) {

    const handlePlayAlbum = () =>{
        console.log(id);
        setCurrentIndex(id);
    }
    return (
        <div className="mixedCard">
            <div className="mixedCard__top" style={{"backgroundImage":`url(${cover})`}}>
                <div className="mixedMoreIcon">
               <IconButton> <MoreVertIcon style={{"color":"#fff"}}/></IconButton>
                </div>
                <div className="mixedPlayControl">
                    <IconButton onClick={()=>handlePlayAlbum()} size="large"><PlayCircleFilledIcon style={{"color":"#fff"}}/></IconButton>
            </div>
            </div>
            <div className="cardDetails">
                <span className="card__title">
                    {songName}
                </span>
                <span className="card__subtitle">
                    {artist}
                </span>
            </div>
           
        </div>
    )
}

export default MixedCard
