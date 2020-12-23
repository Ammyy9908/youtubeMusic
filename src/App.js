import './App.css';
import Player from './components/Player';
import {useEffect,useState} from 'react'
import Home from './screens/Home';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Explore from './screens/Explore';
import Library from './screens/Library';
import first from './musics/first.mp3';
import second from './musics/second.mp3';
import third from './musics/third.mp3';
import fourth from './musics/fourth.mp3';
import fifth from './musics/fifth.mp3';
import sixth from './musics/sixth.mp3';
import seventh from './musics/seventh.mp3';

import blur1 from './assets/blur1.png';
import blur2 from './assets/blur2.png';
import blur3 from './assets/blur3.png';
import blur4 from './assets/blur4.png';
import blur5 from './assets/blur5.png';
import blur6 from './assets/blur6.png';
import blur7 from './assets/blur7.png';

import cover1 from './assets/first.jpg';
import cover2 from './assets/second.jpg';
import cover3 from './assets/third.jpg';
import cover4 from './assets/fourth.jpg';
import cover5 from './assets/fifth.jpg';
import cover6 from './assets/sixth.jpg';
import cover7 from './assets/seventh.jpg';

function App() {
  const [bg,setBg] = useState("");
  const [songs] = useState([{
    id:0,
    name:'Tum Hi Ho-Aashiqui 2',
    artist:'Arijit Singh',
    blur:blur1,
    cover:cover1,
    src:first
},
{
  id:1,
    name:'Shayad(From "Love Aaj Kal")',
    cover:cover2,
    blur:blur2,
    artist:'Arijit Singh',
    src:second
},
{
   id:2,
    name:'Pal',
    cover:cover3,
    blur:blur3,
    artist:'Arijit Singh',
    src:third
},
{
    id:3,
    name:'Bekhayali(Arijit Singh Version)',
    cover:cover4,
    blur:blur4,
    artist:'Arijit Singh',
    src:fourth
}

,
{
    id:4,
    name:'Aaj Bhi',
    cover:cover5,
    blur:blur5,
    artist:'Vishal Mishra',
    src:fifth
},
    {
         id:5,
          name: 'Lal Chunariya',
          cover: cover6,
          blur: blur6,
          artist: 'Akull',
          src: sixth
    }
           ,
{
    id:6,
    name:'FilHaal-Female Version',
    cover:cover7,
    blur:blur7,
    artist:'Nupur Sanon',
    src:seventh
}]);

const [currentIndex,setCurrentIndex] = useState(0);
const [nextIndex,setNextIndex] = useState(currentIndex+1);
  
  useEffect(()=>{
    document.addEventListener("scroll", () => {
      const backgroundcolor = window.scrollY < 5 ? "#000000" : "#d4cfcf78";
      setBg(backgroundcolor);
    });
    
  })
  useEffect(()=>{
    setNextIndex(()=>{
      if(currentIndex + 1 > songs.length -1){
        return 0;
      }
      else{
        return currentIndex+1;
      }
    });
  },[currentIndex])

  

  return (
    <Router>
      <div>
  <Switch> 
   
  <Route exact path="/">
    <Home bg={bg} data={songs} setCurrentIndex={setCurrentIndex}/>
    <Player 
    currentIndex={currentIndex}
    setCurrentIndex = {setCurrentIndex}
    nextIndex = {nextIndex}
    songs = {songs}
    />
  </Route>
    <Route  path="/explore">
   <Explore bg={bg}/>
   <Player
   currentIndex={currentIndex}
   setCurrentIndex = {setCurrentIndex}
   nextIndex = {nextIndex}
   songs = {songs}/>
    </Route>

    <Route  path="/library">
   <Library bg={bg}/>
   <Player
   currentIndex={currentIndex}
   setCurrentIndex = {setCurrentIndex}
   nextIndex = {nextIndex}
   songs = {songs}/>
    </Route>
   
  </Switch>
  </div>
</Router>
  );
}

export default App;
