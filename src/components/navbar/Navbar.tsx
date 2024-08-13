import { NavLink } from 'react-router-dom'
import style from './Navbar.module.css'

export const Navbar = () => {

  return (
    <aside className={style.sidebar}>
      <nav>
        <ul>
          <li>
            <NavLink style={({isActive}) => ({color: isActive ? "red" : ''})} to='/main'>Profile</NavLink>
          </li>
          <li>
            <NavLink style={({isActive}) => ({color: isActive ? "red" : ''})} to='/dialogs'>Messanges</NavLink>
          </li>
          <li>
            <NavLink style={({isActive}) => ({color: isActive ? "red" : ''})} to='/news'>News</NavLink>
          </li>
          <li>
            <NavLink style={({isActive}) => ({color: isActive ? "red" : ''})} to='/music'>Music</NavLink>
          </li>
          <li>
            <NavLink style={({isActive}) => ({color: isActive ? "red" : ''})} to='/settings'>Settings</NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  )
}