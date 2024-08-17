import s from './Navbar.module.css'
import MenuNavbarContainer from './menuNavbar/MenuNavBarContainer'
import FriendsContainer from './friends/FriendsContainer'

export const Navbar = () => {
  return (
    <aside className={s.sidebar}>
      <MenuNavbarContainer/>
      <FriendsContainer/>
    </aside>
  )
}