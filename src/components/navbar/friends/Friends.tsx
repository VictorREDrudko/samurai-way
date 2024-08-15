import { FriendType } from '../../../redux/store'
import { Avatar } from '../../avatar/Avatar'
import s from './Friends.module.css'

type FriendsType = {
  state: FriendType[]
}

export const Friends = ({state}:FriendsType) => {
  // Logic
  const mappedFriends = state.map(friend => <Avatar key={friend.id} userName={friend.userName}/>)

  return (
    <div className={s.wrapper}>
      <h3 className={s.title}>Friends</h3>
      <div className={s.ava}> {mappedFriends} </div>
    </div>
  )
}