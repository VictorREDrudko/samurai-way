import { PersonalInfoProfileType, PostsType } from '../../../redux/profile-reducer'
import MainImage from './../../../assets/image/carving.jpg'
import { InfoProfile } from './infoProfile/InfoProfile'
import { PostsContainer } from './posts/PostsContainer'
import style from './Profile.module.css'

type ProfileType = {
  store: any
  infoProfile: PersonalInfoProfileType
  posts: PostsType
}

export const Profile = ({store, infoProfile, posts}: ProfileType) => {
  return (
    <main>
      <img className={style.img_main} src={MainImage} alt='carving'/>
      <InfoProfile infoProfile={infoProfile}/>
      <PostsContainer posts={posts} store={store}/>
    </main>
  )
}