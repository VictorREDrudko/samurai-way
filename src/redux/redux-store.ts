import { combineReducers, createStore } from "redux";
import profileReducer, { ProfilePageType } from "./profile-reducer";
import dialogsReducer, { DialogsPageType } from "./dialogs-reducer";
import sitebarReducer, { SitebarType } from "./sitebar-reduser";

// Types
export type StateType = {
  profilePage: ProfilePageType
  dialogsPage: DialogsPageType
  sitebar: SitebarType
}

const reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  sitebar: sitebarReducer,
})

// Create STORE
const store = createStore(reducers);

export default store;