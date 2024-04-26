import style from './Navbar.module.css'

export const Navbar = () => {
  return (
    <aside className={style.sidebar}>
      <nav>
        <ul>
          <li>
            <a href='#'>Profile</a>
          </li>
          <li>
            <a href='#'>Messanges</a>
          </li>
          <li>
            <a href='#'>News</a>
          </li>
          <li>
            <a href='#'>Music</a>
          </li>
          <li>
            <a href='#'>Settings</a>
          </li>
        </ul>
      </nav>
    </aside>
  )
}