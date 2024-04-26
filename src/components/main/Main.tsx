import MainImage from './../../assets/image/carving.jpg'
import Lion from './../../assets/image/line.png'
import { Post } from './post/Post'
import style from './Main.module.css'

export const Main = () => {
  return (
    <main className={style.main}>
      <img className={style.img_main} src={MainImage} alt='carving'/>
      <div className={style.content}>
        <img className={style.img_content} src={Lion} alt='lion'/>
        <div className={style.description}>
          <h1>Dmitriy K.</h1>
          <div className={style.description_text}>
            <span>Date of birth:</span>
            <span>2 September</span>
          </div>
          <div className={style.description_text}>
            <span>City:</span>
            <span>Minsk</span>
          </div>
          <div className={style.description_text}>
            <span>Education:</span>
            <span>BSU 2011</span>
          </div>
          <div className={style.description_text}>
            <span>Web Site:</span>
            <span>https://it-kamasutra.com</span>
          </div>
        </div>
      </div>
      <div className={style.posts}>
        <h2>My posts</h2>
        <form action='#'>
          <input type="text" placeholder='Your news...'/>
          <div className={style.btn_wrapper}>
            <button type='button'>Send</button>
          </div>
        </form>
        <Post/>
        <Post/>
      </div>
    </main>
  )
}