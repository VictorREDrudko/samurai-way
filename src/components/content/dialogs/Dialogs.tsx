import { Post } from "../profile/posts/post/Post";
import s from "./Dialogs.module.css"
import { ItemsDialogs } from "./itemsDialogs/ItemsDialogs";

export const Dialogs = () => {
  return (
    <div>
      <h2>DIALOGS</h2>
      <div className={s.dialogs}>
        <ItemsDialogs/>
        <div>
          <Post message="Hi! How are you?" count={9}/>
        </div>
      </div>
    </div>

  )
}