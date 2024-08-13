import { PersonalInfoProfileType, PostType } from '../../..'
import MainImage from './../../../assets/image/carving.jpg'
import { InfoProfile } from './infoProfile/InfoProfile'
import { Posts } from './posts/Posts'
import style from './Profile.module.css'

type ProfileType = {
  infoProfile: PersonalInfoProfileType[]
  posts: PostType[]
}

export const Profile = (props: ProfileType) => {
  return (
    <main>
      <img className={style.img_main} src={MainImage} alt='carving'/>
      <InfoProfile infoProfile={props.infoProfile}/>
      <Posts posts={props.posts}/>
    </main>
  )
}