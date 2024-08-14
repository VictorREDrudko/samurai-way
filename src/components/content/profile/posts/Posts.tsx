import { PostType } from '../../../../redux/state'
import { Button } from '../../../button/Button'
import style from './Posts.module.css'
import { Post } from './post/Post'

type PostsType = {
  posts: PostType[]
}

export const Posts = ({posts}: PostsType) => {
  // Logic
  const mappedPosts = posts.map(post => <Post key={post.id} message={post.text} count={post.count}/>)

  return (
    <div className={style.posts}>
    <h2>My posts</h2>
    <form action='#'>
      <textarea placeholder='Your news...'/>
      <Button/>
    </form>
    {mappedPosts}
  </div>
  )
}