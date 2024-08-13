import s from "./ItemProfile.module.css"

type ItemProfileType = {
  title: string
  value: string
}

export const ItemProfile = ({title, value}: ItemProfileType) => {
  return (
    <div className={s.description_text}>
      <span>{title}</span>
      <span>{value}</span>
  </div>
  )
}