import { NavLink } from "react-router-dom";
import s from "./ItemDialogs.module.css"

export const ItemsDialogs = () => {
  // DATA
  const dialogsItems = ["Alex", "Addrue", "Fill", "Kane", "Statham Rouny", "Gleb", "Sacha", "Roony", "Archi", "Mackgregorean Keeng"];
  
  const mappedDialogsItems = dialogsItems.map((el, index) => {
    return (
      <li className={s.item} key={index}>
        <NavLink style={({isActive}) => ({color: isActive ? "red" : ''})} to={`/dialogs/${index}`}>{el}</NavLink>
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