import style from './Button.module.css'

export const Button = () => {
  return (
    <div className={style.btn_wrapper}>
      <button type='button'>Send</button>
    </div>
  )
}