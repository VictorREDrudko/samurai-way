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
  addPost: (text: string)=>void
  updateTextareaPost: (newtext: string)=>void
}

export const Content = ({state, addPost, updateTextareaPost}: ContentPropsType) => {
  return (
    <div className={s.content}>
      <Routes>
        <Route path='/profile' element={
          <Profile  addPost={addPost} 
                    updateTextareaPost={updateTextareaPost}
                    infoProfile={state.profilePage.personalInfoProfile} 
                    posts={state.profilePage.posts}/>
            }
          />
        <Route path='/messanges' element={<Dialogs dialogs={state.dialogsPage.dialogs}/>}/>
        <Route path='/news' element={<News/>}/>
        <Route path='/music' element={<Music/>}/>
        <Route path='/settings' element={<Settings/>}/>
      </Routes>
  </div>
  )
}