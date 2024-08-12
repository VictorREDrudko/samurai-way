import style from './Navbar.module.css'

export const Navbar = () => {
  return (
    <aside className={style.sidebar}>
      <nav>
        <ul>
          <li>
            <a href='/main'>Profile</a>
          </li>
          <li>
            <a href='/dialogs'>Messanges</a>
          </li>
          <li>
            <a href='/news'>News</a>
          </li>
          <li>
            <a href='/music'>Music</a>
          </li>
          <li>
            <a href='/settings'>Settings</a>
          </li>
        </ul>
      </nav>
    </aside>
  )
}