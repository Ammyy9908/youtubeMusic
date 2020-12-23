import { IconButton } from '@material-ui/core'
import React from 'react'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import SquareCard from './SquareCard';

function Albums() {

    const data = [
        {"name":"Sumit","song_name":"Song1"},
        {"name":"Abhishek","song_name":"Song2"},
        {"name":"Rahul","song_name":"Song3"},
        {"name":"Jasbir","song_name":"Song4"},
        {"name":"Sameer","song_name":"Song5"},
        {"name":"Shravan","song_name":"Song6"},
        {"name":"Junaid","song_name":"Song7"},
    ]
   
    return (
        <div className="albums">
            <div className="album__headings" style={{"marginBottom":"20px"}}>
                <a href="#" style={{"marginRight":"15px"}}>New albums & singles</a>
                <span style={{"color":"#999","fontSize":"16px"}}>SEE ALL</span>
            </div>
            <div className="albums_tiles">
               {
                   data.map((item)=>{
                    return <SquareCard artist={item.name} songName={item.song_name}/>
                   })
               }
                
            </div>
        </div>
    )
}

export default Albums





