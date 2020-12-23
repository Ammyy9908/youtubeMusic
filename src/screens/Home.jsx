import React from 'react'
import Favourites from '../components/Favourites';
import Header from '../components/Header';
import Mixed from '../components/Mixed';
import Similar from '../components/Similar';
function Home({bg,data,setCurrentIndex}) {
    return (
        <div className="home">
    <div className="home">
     <Header bg={bg} home={true} explre={false} library={false}/>
     <Mixed data={data} setCurrentIndex={setCurrentIndex}/>
     <Favourites/>
     <Similar/>
     <Similar/>
     </div>
        </div>
    )
}

export default Home
