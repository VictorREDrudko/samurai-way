import React, { ChangeEvent } from 'react'
import { Button } from '../../../button/Button'
import s from './Posts.module.css'
import { Post } from './post/Post'
import { addPostAC, PostsType, updateTextareaPostAC } from '../../../../redux/profile-reducer'


type PostsPropsType = {
  posts: PostsType
  addPost: ()=> void
  onChangeText: (text: string)=> void
}

export const Posts = ({posts, addPost, onChangeText}: PostsPropsType) => {
  // Logic
  const mappedPosts = posts.allPosts.map(post => <Post key={post.id} message={post.text} count={post.count}/>)

  const onClickHandler = () => {
    addPost();
  }

  const onChangeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const text = event.currentTarget.value;
    onChangeText(text);
  }

  return (
    <div className={s.posts}>
    <h2>My posts</h2>
    <form action='#' className={s.formWrapper}>
      <textarea onChange={onChangeHandler} placeholder='Your news...' value={posts.valueTextarea}/>
      <Button title={"Send"} onClick={onClickHandler}/>
    </form>
    {mappedPosts}
  </div>
  )
}