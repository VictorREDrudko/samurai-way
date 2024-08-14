import { Route, Routes } from "react-router-dom"
import { Settings } from "./settings/Settings"
import { Dialogs } from "./dialogs/Dialogs"
import { Profile } from "./profile/Profile"
import s from "./Content.module.css"
import { News } from "./news/News"
import { Music } from "./music/Music"
import { ContentType } from "../../redux/state"

type ContentPropsType = {
  state: ContentType
}

export const Content = ({state}: ContentPropsType) => {
  return (
    <div className={s.content}>
      <Routes>
        <Route path='/profile' element={<Profile infoProfile={state.profilePage.personalInfoProfile} posts={state.profilePage.posts}/>}/>
        <Route path='/messanges' element={<Dialogs dialogs={state.dialogsPage.dialogs}/>}/>
        <Route path='/news' element={<News/>}/>
        <Route path='/music' element={<Music/>}/>
        <Route path='/settings' element={<Settings/>}/>
      </Routes>
  </div>
  )
}


// infoProfile={props.infoProfile}