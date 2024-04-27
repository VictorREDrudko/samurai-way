import { Button } from './../../button/Button'
import style from './Posts.module.css'
import { Post } from './post/Post'

export const Posts = () => {
  return (
    <div className={style.posts}>
    <h2>My posts</h2>
    <form action='#'>
      <textarea placeholder='Your news...'/>
      <Button/>
    </form>
    <Post/>
    <Post/>
    <Post/>
    <Post/>
  </div>
  )
}