import React from 'react';
import './App.css';
import Icon from './assets/image/icon.png'
import MainImage from './assets/image/carving.jpg'
import Lion from './assets/image/line.png'

function App() {
  return (
  <div className="wrapper">
    <header className="header">
      <img src={Icon} alt='icon'/>
    </header>
    <aside className="side-bar">
      <nav>
        <ul>
          <li>
            <a href='#'>Profile</a>
          </li>
          <li>
            <a href='#'>Messanges</a>
          </li>
          <li>
            <a href='#'>News</a>
          </li>
          <li>
            <a href='#'>Music</a>
          </li>
          <li>
            <a href='#'>Settings</a>
          </li>
        </ul>
      </nav>
    </aside>
    <main className="main">
      <img className="img-main" src={MainImage} alt='carving'/>
      <div className="content">
        <img className="img-content" src={Lion} alt='lion'/>
        <div className="description">
          <h1>Dmitriy K.</h1>
          <div className="description-text">
            <span>Date of birth:</span>
            <span>2 September</span>
          </div>
          <div className="description-text">
            <span>City:</span>
            <span>Minsk</span>
          </div>
          <div className="description-text">
            <span>Education:</span>
            <span>BSU 2011</span>
          </div>
          <div className="description-text">
            <span>Web Site:</span>
            <span>https://it-kamasutra.com</span>
          </div>
        </div>
      </div>
      <div className="posts">
        <h2>My posts</h2>
        <input type="text" placeholder='Your news...'/>
        <div className="btn-wrapper">
          <button type='button'>Send</button>
        </div>
        <div className='post'>
          <div className='cycle'></div>
          <p>Hey, why nobody love me?</p>
        </div>
      </div>
    </main>
  </div>
  );
}

export default App;

