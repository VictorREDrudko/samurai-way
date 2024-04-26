import MainImage from './../../assets/image/carving.jpg'
import Lion from './../../assets/image/line.png'
import { Post } from './post/Post'

export const Main = () => {
  return (
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
        <form action='#'>
          <input type="text" placeholder='Your news...'/>
          <div className="btn-wrapper">
            <button type='button'>Send</button>
          </div>
        </form>
        <Post/>
        <Post/>
      </div>
    </main>
  )
}