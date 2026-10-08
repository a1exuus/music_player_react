import './App.css';
import Navigator from './components/Navigator/Navigator';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Player from './components/Player/Player';
import PlayList from './pages/Playlist/PlayList';

function App() {
  return (
    <div className='App'>
      <div className='container'>
        <BrowserRouter>
          <Navigator />
          <Player />

          <Routes>
            <Route path='/playlist' element={<PlayList />}/>
            <Route path='/deleted-songs' />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
