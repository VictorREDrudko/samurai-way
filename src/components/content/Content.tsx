import { Route, Routes } from "react-router-dom"
import { Settings } from "./settings/Settings"
import { Profile } from "./profile/Profile"
import s from "./Content.module.css"
import { News } from "./news/News"
import { Music } from "./music/Music"
import { StateType } from "../../redux/redux-store"
import { DialogsContainer } from "./dialogs/DialogsContainer"

type ContentPropsType = {
  store: any 
  state: StateType
}

export const Content = ({store, state}: ContentPropsType) => {
  return (
    <div className={s.content}>
      <Routes>
        <Route path='/profile' element={
          <Profile  store={store} 
                    infoProfile={state.profilePage.personalInfoProfile} 
                    posts={state.profilePage.posts}/>
            }
          />
        <Route path='/messanges' element={<DialogsContainer dialogs={state.dialogsPage} store={store}/>}/>
        <Route path='/news' element={<News/>}/>
        <Route path='/music' element={<Music/>}/>
        <Route path='/settings' element={<Settings/>}/>
      </Routes>
  </div>
  )
}