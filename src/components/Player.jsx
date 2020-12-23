import React,{useState,useRef,useEffect} from 'react'
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import PauseIcon from '@material-ui/icons/Pause';
import { IconButton } from '@material-ui/core';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import VolumeDownIcon from '@material-ui/icons/VolumeDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import song from '../Phulkari.mp3';
function Player(props) {
    const audioEl = useRef(null);
    const [isPlaying,setIsPlaying] = useState(false);

    useEffect(()=>{
        if(isPlaying){
            audioEl.current.play();
        }
        else{
            audioEl.current.pause();
        }
    });

    const SkipSong = (forwards=true)=>{
        if(forwards){
            props.setCurrentIndex(()=>{
                let temp = props.currentIndex;
                temp++;

                if(temp>props.songs.lenght-1){
                    temp = 0;
                }
                return temp;
            })
        }
        else{
            props.setCurrentIndex(()=>{
                let temp = props.currentIndex;
                temp--;

                if(temp<0){
                    temp = props.songs.length-1;
                }
                return temp;
            });
        }
    }
    
    return (
        <div className="player">
            <audio ref={audioEl} src={props.songs[props.currentIndex].src}></audio>
            <div className="music__control">
                <IconButton onClick={()=>SkipSong(false)}><SkipPreviousIcon style={{"color":"#fff"}}/></IconButton>
                <IconButton style={{"backgroundColor":"red"}} onClick={()=>setIsPlaying(!isPlaying)}>{isPlaying ?<PauseIcon style={{"color":"#fff"}}/>:<PlayArrowIcon/>}</IconButton>
                <IconButton onClick={()=>SkipSong()}><SkipNextIcon style={{"color":"#fff"}}/></IconButton>
            </div>
            <div className="music__info">
                <img src={props.songs[props.currentIndex].cover} alt="played_song_thumb"/>
                <div className="playedSongInfo">
                    <div className="musicInfo">
                        <span className="songName">
                            {props.songs[props.currentIndex].name}
                        </span>
                        <span className="songArtistName">
                        {props.songs[props.currentIndex].artist}
                        </span>
                    </div>
                    <IconButton><ThumbUpIcon style={{"color":"#fff"}}/></IconButton>
                    <IconButton><ThumbDownIcon style={{"color":"#fff"}}/></IconButton>
                    <IconButton><MoreVertIcon style={{"color":"#fff"}}/></IconButton>
                </div>
            </div>
            <div className="musicFooterRight">
                <IconButton><VolumeDownIcon style={{"color":"#fff"}}/></IconButton>
                <IconButton><ArrowDropUpIcon style={{"color":"#fff"}}/></IconButton>
            </div>
        </div>
    )
}

export default Player
