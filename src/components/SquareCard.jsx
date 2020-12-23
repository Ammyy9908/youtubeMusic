import React from 'react'
import MoreVertIcon from '@material-ui/icons/MoreVert';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import { IconButton } from '@material-ui/core';

function SquareCard({artist,songName}) {
    return (
        <div className="squareCard">
            <div className="album_cover">
                <IconButton style={{"marginRight":"15px","marginTop":"15px"}}><MoreVertIcon style={{"color":"#fff"}}/></IconButton>
                <IconButton style={{"marginRight":"15px","marginBottom":"15px"}}><PlayCircleFilledIcon style={{"color":"#fff"}}/></IconButton>
            </div>
            <div className="album_details">
                <a href="#">{songName}</a>
                <span className="album_artits_detail">
                    {artist}
                </span>
            </div>
        </div>
    )
}

export default SquareCard
