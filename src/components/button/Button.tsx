import style from './Button.module.css'

type ButtonType = {
  title: string
  onClick: ()=> void
}

export const Button = ({title, onClick}: ButtonType) => {
  const onClickHandler = () => {
    onClick()
  }

  return (
    <div className={style.btn_wrapper}>
      <button type='button' onClick={onClickHandler}>{title}</button>
    </div>
  )
}