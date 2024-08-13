import { Route, Routes } from "react-router-dom"
import { Settings } from "./settings/Settings"
import { Dialogs } from "./dialogs/Dialogs"
import { Profile } from "./profile/Profile"
import s from "./Content.module.css"
import { News } from "./news/News"
import { Music } from "./music/Music"
import { DialogsType, PersonalInfoProfileType, PostType } from "../.."

type ContentType = {
  infoProfile: PersonalInfoProfileType[]
  posts: PostType[]
  dialogs: DialogsType[] 
}

export const Content = (props: ContentType) => {
  return (
    <div className={s.content}>
      <Routes>
        <Route path='/profile' element={<Profile infoProfile={props.infoProfile} posts={props.posts}/>}/>
        <Route path='/messanges' element={<Dialogs dialogs={props.dialogs}/>}/>
        <Route path='/news' element={<News/>}/>
        <Route path='/music' element={<Music/>}/>
        <Route path='/settings' element={<Settings/>}/>
      </Routes>
  </div>
  )
}


// infoProfile={props.infoProfile}