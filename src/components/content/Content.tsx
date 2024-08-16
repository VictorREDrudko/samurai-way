import { Route, Routes } from "react-router-dom"
import { Settings } from "./settings/Settings"
import { Profile } from "./profile/Profile"
import s from "./Content.module.css"
import { News } from "./news/News"
import { Music } from "./music/Music"
import DialogsContainer from "./dialogs/DialogsContainer"
import { ProfilePageType } from "../../redux/profile-reducer"

type ContentPropsType = {
  state: ProfilePageType
}

export const Content = ({state}: ContentPropsType) => {
  return (
    <div className={s.content}>
      <Routes>
        <Route path='/profile' element={<Profile state={state}/>}/>
        <Route path='/messanges' element={<DialogsContainer/>}/>
        <Route path='/news' element={<News/>}/>
        <Route path='/music' element={<Music/>}/>
        <Route path='/settings' element={<Settings/>}/>
      </Routes>
  </div>
  )
}