import React from 'react'
import { PostType } from '../../../../redux/state'
import { Button } from '../../../button/Button'
import s from './Posts.module.css'
import { Post } from './post/Post'


type PostsType = {
  posts: PostType[]
}

export const Posts = ({posts}: PostsType) => {
  // Logic
  const mappedPosts = posts.map(post => <Post key={post.id} message={post.text} count={post.count}/>)
 
  const refNewPost = React.createRef<HTMLTextAreaElement>();

  const addPost = () => {
    let post = refNewPost.current?.value;
    alert(post);
  }

  return (
    <div className={s.posts}>
    <h2>My posts</h2>
    <form action='#' className={s.formWrapper}>
      <textarea ref={refNewPost} placeholder='Your news...'/>
      <Button title={"Send"} callback={addPost}/>
    </form>
    {mappedPosts}
  </div>
  )
}