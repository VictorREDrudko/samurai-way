import React, { ChangeEvent } from 'react'
import { Button } from '../../../button/Button'
import s from './Posts.module.css'
import { Post } from './post/Post'
import { addPostAC, PostsType, updateTextareaPostAC } from '../../../../redux/profile-reducer'
import { Posts } from './Posts'

type PostsPropsType = {
  store: any
  posts: PostsType
}

export const PostsContainer = ({store, posts}: PostsPropsType) => {
  // Logic
  const addPost = () => {
    store.dispatch(addPostAC());
  }

  const onChangeText = (text: string) => {
    store.dispatch(updateTextareaPostAC(text));
  }

  return (
    <Posts posts={posts} addPost={addPost} onChangeText={onChangeText}/>
  )
}