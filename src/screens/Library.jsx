import React from 'react'
import Header from '../components/Header'

function Library({bg}) {
    return (
        <div className="library">
            <Header bg={bg} home={false} explore={false} library={true}/>
           
            <div className="navbar__library">
            <ul className="navLibrary">
                <li><a href="#" className="activeLink">Playlists</a></li>
                <li><a href="#">Albums</a></li>
                <li><a href="#">Songs</a></li>
                <li><a href="#">Artists</a></li>
                <li><a href="#">Subcsriptions</a></li>

            </ul>
            </div>
        </div>
    )
}

export default Library
