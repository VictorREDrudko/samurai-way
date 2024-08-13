import { NavLink } from 'react-router-dom'
import style from './Navbar.module.css'
import { ItemNavbarType } from '../..'

type NavbarType = {
  itemsNavbar: ItemNavbarType[]
}

export const Navbar = ({itemsNavbar} : NavbarType) => {
  // Logic
  const mappedItemsNavbar = itemsNavbar.map(itemMenu => {
    return (
      <li key={itemMenu.id}>
        <NavLink style={({isActive}) => ({color: isActive ? "red" : ''})} 
                 to={`/${itemMenu.title}`}>
          {itemMenu.title}
        </NavLink>
      </li>
    )
  })

  return (
    <aside className={style.sidebar}>
      <nav>
        <ul> {mappedItemsNavbar} </ul>
      </nav>
    </aside>
  )
}