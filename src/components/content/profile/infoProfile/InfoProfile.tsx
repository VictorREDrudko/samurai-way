import s from "./InfoProfile.module.css"
import Lion from './../../../../assets/image/line.png'
import { ItemProfile } from "./itemProfile/ItemProfile"
import { PersonalInfoProfileType } from "../../../.."

type InfoProfilePropsType = {
  infoProfile: PersonalInfoProfileType[]
}

export const InfoProfile = ({infoProfile}: InfoProfilePropsType) => {
  // Logic
  const mappedInfoProfile = infoProfile[0].info.map(el => {
    return (
      <ItemProfile key={el.id} title={el.title} value={el.value}/>
    )
  })

  return (
    <div className={s.content}>
      <img className={s.img_content} src={Lion} alt='lion'/>
      <div className={s.description}>
        <h1>{infoProfile[0].userName}</h1>
        {mappedInfoProfile}
      </div>
    </div>
  )
}