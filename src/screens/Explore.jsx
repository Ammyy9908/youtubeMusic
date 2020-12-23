import React from 'react'
import ExploreTiles from '../components/ExploreTiles'
import Header from '../components/Header'
import MusicIcon from '../assets/MusicIcon'
import EmojiIcon from '../assets/EmojiIcon'
import TrendIcon from '../assets/TrendIcon'
import Albums from '../components/Albums'
import Modes from '../components/Modes'
function Explore({ bg }) {
    return (
        <div>
            <Header bg={bg} home={false} explore={true} library={false} />
            <div className="explore">
                <div className="tiles">
                    <ExploreTiles Icon={MusicIcon} text="New releases" />
                    <ExploreTiles Icon={TrendIcon} text="Charts" />
                    <ExploreTiles Icon={EmojiIcon} text="Moods & genres" />
                </div>
                <Albums />

                <Modes/>


            </div>
        </div>

    )
}

export default Explore
