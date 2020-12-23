import { Avatar } from '@material-ui/core'
import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import {Link} from 'react-router-dom';

function Header({bg,home,explore,library}) {
    return (
        <div className="header" style={{backgroundColor: bg}}>
            <div className="header__logo">
                <img src="https://music.youtube.com/img/on_platform_logo_dark.svg" alt=""/>
            </div>
           <ul className="nav">
               <li><Link to="/" className={home && `active`}>Home</Link></li>
               <li><Link to="/explore" className={explore && `active`}>Explore</Link></li>
               <li><Link to="/library" className={library && `active`}>Library</Link></li>
               
           </ul>
           <div className="user__avatar">
               <Avatar src="https://yt3.ggpht.com/yti/ANoDKi65OOjpkYxyA8WckQ9ANUDx5PmV-_T0kAqWrD3-YLw=s108-c-k-c0x00ffffff-no-rj"/>
           </div>
        </div>
    )
}

export default Header
