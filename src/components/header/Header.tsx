import Icon from './../../assets/image/icon.png'
import style from './Header.module.css'

export const Header = () => {
  return (
    <header className={style.header}>
      <img src={Icon} alt='icon'/>
    </header>
  )
}