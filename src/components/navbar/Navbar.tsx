import { NavLink } from 'react-router-dom'
import s from './Navbar.module.css'
import { SitebarType } from '../../redux/state'
import { Friends } from './friends/Friends'

type NavbarType = {
  state: SitebarType
}

export const Navbar = ({state} : NavbarType) => {
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