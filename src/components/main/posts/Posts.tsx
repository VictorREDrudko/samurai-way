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
    <Post message="Hi! How are you?" count={9}/>
    <Post message="Hello! I'm fine? What about you?" count={1}/>
    <Post message="Thanks! I'm very happy" count={45}/>
    <Post message="Ok! Hey, why nobody love me?" count={93}/>
  </div>
  )
}