import MainImage from './../../../assets/image/carving.jpg'
import Lion from './../../../assets/image/line.png'
import { Posts } from './posts/Posts'
import style from './Profile.module.css'


export const Profile = () => {
  return (
    <main>
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