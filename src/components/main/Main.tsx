import MainImage from './../../assets/image/carving.jpg'
import Lion from './../../assets/image/line.png'
import { Post } from './posts/post/Post'
import style from './Main.module.css'
import { Posts } from './posts/Posts'

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
      <Posts/>
    </main>
  )
}