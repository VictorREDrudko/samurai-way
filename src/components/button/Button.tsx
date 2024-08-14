import style from './Button.module.css'

type ButtonType = {
  title: string
  callback: ()=> void
}

export const Button = ({title, callback}: ButtonType) => {
  const onClickHandler = () => {
    callback()
  }

  return (
    <div className={style.btn_wrapper}>
      <button type='button' onClick={onClickHandler}>{title}</button>
    </div>
  )
}