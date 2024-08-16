import { NavLink } from 'react-router-dom'
import s from './Navbar.module.css'
import { Friends } from './friends/Friends'
import { SitebarType } from '../../redux/sitebar-reduser'

type NavBarType = {
  state: SitebarType
}

export const Navbar = ({state}: NavBarType) => {
  // Logic
  const mappedItemsNavbar = state.itemsNavbar.map(itemMenu => {
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
    <aside className={s.sidebar}>
      <nav>
        <ul> {mappedItemsNavbar} </ul>
      </nav>
      <Friends state={state.friends}/>
    </aside>
  )
}