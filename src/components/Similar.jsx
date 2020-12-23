import { Avatar } from '@material-ui/core'
import React from 'react'
import CircleCard from './CircleCard'

function Similar() {
    return (
        <div className="similar">
            <div className="similar__heading">
                <Avatar src="https://vignette.wikia.nocookie.net/shawnmendes/images/c/cd/Charlie-Puth.jpg/revision/latest/top-crop/width/360/height/450?cb=20170402185339"/>
                <div className="headingText">
                    <span className="title">
                        SIMILAR TO
                    </span>
                    <span className="subtitle">
                        Charlie Puth
                    </span>
                </div>
            </div>
            <div className="similars">
                <CircleCard artist="Justin Bieber" img="https://static.independent.co.uk/s3fs-public/thumbnails/image/2015/04/10/21/bieber.jpg?width=982&height=726" likes="59.5M"/>
                <CircleCard artist="Clean Bandit" img="https://yt3.ggpht.com/ytc/AAUvwngP4evIHxENQwQYijKI2r6h3IacBCWWPxFpu5B_bA=s900-c-k-c0x00ffffff-no-rj" likes="9.2M"/>
                <CircleCard artist="Anne-Marie" img="https://vignette.wikia.nocookie.net/annemarieiam/images/7/73/11.05.2017_mathew_coyte_rolling_stone.jpg/revision/latest?cb=20180519084025" likes="8.43M"/>
            </div>
        </div>
    )
}

export default Similar
