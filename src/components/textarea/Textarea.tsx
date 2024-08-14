import React from 'react'
import s from './Textarea.module.css'

type TextareaType = {
  placeholder: string
  ref?: any
}

export const Textarea = ({placeholder}: TextareaType) => {
  return (
    <div className={s.wrapper}>
      <textarea placeholder={placeholder}/>
    </div>
  )
}