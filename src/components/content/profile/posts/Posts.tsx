import React, { ChangeEvent } from 'react'
import { Button } from '../../../button/Button'
import s from './Posts.module.css'
import { Post } from './post/Post'
import { PostType } from '../../../../redux/profile-reducer'


type PostsPropsType = {
  state: PostType[]
  text: string
  addPost: ()=> void
  onChangeText: (text: string)=> void
}

export const Posts = ({text, state, addPost, onChangeText}: PostsPropsType) => {
  // Logic
  const mappedPosts = state.map(post => <Post key={post.id} message={post.text} count={post.count}/>)

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
      <textarea onChange={onChangeHandler} placeholder='Your news...' value={text}/>
      <Button title={"Send"} onClick={onClickHandler}/>
    </form>
    {mappedPosts}
  </div>
  )
}