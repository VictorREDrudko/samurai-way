import style from './Post.module.css'
import ava from './../../../../assets/image/ava.jpg'
import like from './../../../../assets/image/like.png'

type PostPropsType = {
  message: string,
  count: number
}

export const Post = (props: PostPropsType) => {

  console.log(props)

  return (
    <div className={style.post}>
      <img src={ava} alt='avatar'/>
      <p>{props.message}</p>
      <div className={style.like_wrapper}>
        <img src={like} alt='like'/>
        <span>{props.count}</span>
      </div>
    </div>
  )
}
