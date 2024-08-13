import { Post } from "../main/posts/post/Post";
import s from "./Dialogs.module.css"
export const Dialogs = () => {
  const dialogsItems = ["Alex", "Addrue", "Fill", "Kane", "Statham Rouny", "Gleb", "Sacha", "Roony"];
  const mappedDialogsItems = dialogsItems.map((el, index) => {
    return index === 0 ? <li className={s.item + ' ' + s.activeDialog} key={index}>{el}</li> : <li className={s.item} key={index}>{el}</li>;
  });

  return (
    <div>
      <h2>DIALOGS</h2>
      <div className={s.dialogs}>
        <div>
          <ul className={s.listItems}>
            {mappedDialogsItems}
          </ul>
        </div>
        <div>
          <Post message="Hi! How are you?" count={9}/>
        </div>
        <div>

        </div>
      </div>
    </div>

  )
}