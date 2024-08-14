import ava from "./../../assets/image/ava.jpg"
import s from './Avatar.module.css'

type AvatarType = {
  userName: string
}

export const Avatar = ({userName} : AvatarType) => {
  return (
    <div className={s.avatarWrapper}>
      <img src={ava} alt='avatar'/>
      <span>{userName}</span>
    </div>
  )
}





