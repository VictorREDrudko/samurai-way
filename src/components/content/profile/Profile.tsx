import { PersonalInfoProfileType, PostType } from '../../../redux/state'
import MainImage from './../../../assets/image/carving.jpg'
import { InfoProfile } from './infoProfile/InfoProfile'
import { Posts } from './posts/Posts'
import style from './Profile.module.css'

type ProfileType = {
  infoProfile: PersonalInfoProfileType
  posts: PostType[]
}

export const Profile = ({infoProfile, posts}: ProfileType) => {
  return (
    <main>
      <img className={style.img_main} src={MainImage} alt='carving'/>
      <InfoProfile infoProfile={infoProfile}/>
      <Posts posts={posts}/>
    </main>
  )
}