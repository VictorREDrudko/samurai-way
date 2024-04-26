import style from './Post.module.css'

export const Post = () => {
  return (
    <div className={style.post}>
      <div className={style.circle}></div>
      <p>Hey, why nobody love me?</p>
    </div>
  )
}