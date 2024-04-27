import style from './Post.module.css'
import ava from './../../../../assets/image/ava.jpg'
import like from './../../../../assets/image/like.png'

export const Post = () => {
  return (
    <div className={style.post}>
      <img src={ava} alt='avatar'/>
      <p>Hey, why nobody love me?</p>
      <div className={style.like_wrapper}>
        <img src={like} alt='like'/>
        <span>12</span>
      </div>
    </div>
  )
}