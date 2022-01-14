import {useState} from "react";
import Player from "./components/Player";

function App() {
    const [songs, setSongs] = useState([
        {
            title: 'Test',
            artist: 'Test',
            img_src: '',
            src: ''
        },
        {
            title: 'Test1',
            artist: 'Test1',
            img_src: '',
            src: ''
        }
    ]);

    const [currentSongIndex, setCurrentSongIndex] = useState(0);
    const [nextSongIndex, setNextSongIndex] = useState(currentSongIndex);
  return (
    <div className="App">
        <Player
            song={songs[currentSongIndex]}
            nextSong={songs[nextSongIndex]}
        />
    </div>
  );
}

export default App;
