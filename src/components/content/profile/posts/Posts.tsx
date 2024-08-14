import React, { ChangeEvent } from 'react'
import { Button } from '../../../button/Button'
import s from './Posts.module.css'
import { Post } from './post/Post'
import { PostsType } from '../../../../redux/state'


type PostsPropsType = {
  posts: PostsType
  addNewPost: (text: string)=>void
  updateTextareaPost: (newtext: string)=>void
}

export const Posts = ({posts, addNewPost, updateTextareaPost}: PostsPropsType) => {
  console.log(posts)
  // Logic
  const mappedPosts = posts.allPosts.map(post => <Post key={post.id} message={post.text} count={post.count}/>)
 
  const refNewPost = React.createRef<HTMLTextAreaElement>();

  const addPost = () => {
    let post = refNewPost.current?.value;
    if (!post) return;
    addNewPost(post);
    updateTextareaPost('');
  }

  const onChangeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const text = event.currentTarget.value;
    updateTextareaPost(text);
  }

  return (
    <div className={s.posts}>
    <h2>My posts</h2>
    <form action='#' className={s.formWrapper}>
      <textarea onChange={onChangeHandler} ref={refNewPost} placeholder='Your news...' value={posts.valueTextarea}/>
      <Button title={"Send"} callback={addPost}/>
    </form>
    {mappedPosts}
  </div>
  )
}