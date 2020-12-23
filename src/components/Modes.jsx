import React from 'react'
import ModesTile from './ModesTile'

function Modes() {
    return (
        <div className="modesAndGenres">
            <div className="modesHeadings">
                <a href="#">Moods & genres</a>
                <span className="more">
                    SEE ALL
                </span>
            </div>
            <div className="modes">
                <ModesTile/>
                <ModesTile/>
                <ModesTile/>
                <ModesTile/>
                <ModesTile/>
                <ModesTile/>
                <ModesTile/>
            </div>
        </div>
    )
}

export default Modes
