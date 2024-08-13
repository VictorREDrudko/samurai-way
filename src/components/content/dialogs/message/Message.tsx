import { Avatar } from "./avatar/Avatar"
import s from "./Message.module.css"

type MessageType = {
  messages: string[] 
  userName: string
}

export const Message = ({messages, userName}: MessageType) => {
  const mappedMessages = messages.map(message => {
    return (
      <div className={s.messageWrapper}>
        <Avatar userName={userName}/>
        <div>{message}</div>
      </div>
    )
  })

  return (
    <div>
      {mappedMessages}
    </div>
  )
}