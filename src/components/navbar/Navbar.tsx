import { NavLink } from 'react-router-dom'
import style from './Navbar.module.css'

export const Navbar = () => {
  // DATA
  const menuItems = ["profile", "messanges", "news", "music", "settings"];
  const mappedItemsNavbar = menuItems.map((el, index) => {
    return (
      <li key={index}>
        <NavLink style={({isActive}) => ({color: isActive ? "red" : ''})} to={`/${el}`}>{el}</NavLink>
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