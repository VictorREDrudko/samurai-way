import { PersonalInfoProfileType, PostsType, } from '../../../redux/state'
import MainImage from './../../../assets/image/carving.jpg'
import { InfoProfile } from './infoProfile/InfoProfile'
import { Posts } from './posts/Posts'
import style from './Profile.module.css'

type ProfileType = {
  infoProfile: PersonalInfoProfileType
  posts: PostsType
  addPost: ()=>void
  updateTextareaPost: (newtext: string)=>void
}

export const Profile = ({infoProfile, posts, addPost, updateTextareaPost}: ProfileType) => {
  return (
    <main>
      <img className={style.img_main} src={MainImage} alt='carving'/>
      <InfoProfile infoProfile={infoProfile}/>
      <Posts posts={posts} addNewPost={addPost} updateTextareaPost={updateTextareaPost}/>
    </main>
  )
}