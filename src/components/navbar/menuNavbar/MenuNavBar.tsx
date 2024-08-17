import { NavLink } from "react-router-dom"
import { ItemNavbarType } from "../../../redux/sitebar-reduser"
import s from "./MenuNavbar.module.css"

type MenuNavbarType = {
  state: ItemNavbarType[]
}

export const MenuNavbar = ({state}: MenuNavbarType) => {
    // Logic
    const mappedItemsNavbar = state.map(itemMenu => {
      return (
        <li key={itemMenu.id}>
          <NavLink style={({isActive}) => ({color: isActive ? "red" : ''})} 
                   to={`/${itemMenu.title}`}>
            {itemMenu.title}
          </NavLink>
        </li>
      )
    });

  return (
    <div className={s.containerNavbar}>
      <nav>
        <ul> {mappedItemsNavbar} </ul>
      </nav>
    </div>
  )
}