import { NavLink } from "react-router-dom";
import s from "./ItemDialogs.module.css"
import { UserDialogType } from "../../../../redux/dialogs-reducer";

type ItemsDialogsType = {
  users: UserDialogType[]
}

export const ItemsDialogs = ({users}: ItemsDialogsType) => {
  
  const mappedDialogsItems = users.map((el) => {
    return (
      <li className={s.item} key={el.id}>
        <NavLink style={({isActive}) => ({color: isActive ? "red" : ''})} to={`/dialogs/${el.id}`}>{el.user}</NavLink>
      </li>
    );
  });

  return (
    <div>
      <ul>
        {mappedDialogsItems}
      </ul>
  </div>
  )
}