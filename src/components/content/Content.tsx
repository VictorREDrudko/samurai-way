import { Route, Routes } from "react-router-dom"
import { Settings } from "./settings/Settings"
import { Dialogs } from "./dialogs/Dialogs"
import { Profile } from "./profile/Profile"
import s from "./Content.module.css"
import { News } from "./news/News"
import { Music } from "./music/Music"

export const Content = () => {
  return (
    <div className={s.content}>
      <Routes>
        <Route path='/profile' Component={Profile}/>
        <Route path='/messanges' Component={Dialogs}/>
        <Route path='/news' Component={News}/>
        <Route path='/music' Component={Music}/>
        <Route path='/settings' Component={Settings}/>
      </Routes>
  </div>
  )
}