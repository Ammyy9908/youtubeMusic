import React from 'react'

function ExploreTiles({Icon,text}) {
    return (
        <div className="exploreTiles">
            <Icon style={{"marginLeft":"15px"}}/> <p>{text}</p>
        </div>
    )
}

export default ExploreTiles
