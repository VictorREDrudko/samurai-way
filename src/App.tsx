import './App.css';
import { Header } from './components/header/Header';
import { Navbar } from './components/navbar/Navbar';
import { Main } from './components/main/Main';
import { Dialogs } from './components/dialogs/Dialogs';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { News } from './components/news/News';
import { Music } from './components/music/Music';
import { Settings } from './components/settings/Settings';

function App() {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header/>
        <Navbar/>
        <div className="content">
          <Routes>
            <Route path='/main' Component={Main}/>
            <Route path='/dialogs' Component={Dialogs}/>
            <Route path='/news' Component={News}/>
            <Route path='/music' Component={Music}/>
            <Route path='/settings' Component={Settings}/>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

