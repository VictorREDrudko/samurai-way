import { ProfilePageType } from '../../../redux/profile-reducer'
import DialogsContainer from '../dialogs/DialogsContainer'
import MainImage from './../../../assets/image/carving.jpg'
import { InfoProfile } from './infoProfile/InfoProfile'
import PostsContainer from './posts/PostsContainer'
import style from './Profile.module.css'

type ProfilePropsType = {
  state: ProfilePageType
}

export const Profile = ({state}: ProfilePropsType) => {
  return (
    <main>
      <img className={style.img_main} src={MainImage} alt='carving'/>
      <InfoProfile state={state.personalInfoProfile}/>
      <PostsContainer/>
    </main>
  )
}