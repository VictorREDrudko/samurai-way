import { Avatar } from "../../../avatar/Avatar"
import s from "./Message.module.css"

type MessageType = {
  message: string
}

export const Message = ({message}: MessageType) => {

  return (
    <div className={s.messageWrapper}>
      <Avatar userName={"**Unknow**"}/>
      <div className={s.text}>{message}</div>
    </div>

  )
}