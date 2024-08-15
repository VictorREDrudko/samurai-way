import dialogsReducer from "./dialogs-reducer"
import profileReducer from "./profile-reducer"
import sitebarReducer from "./sitebar-reduser"

// Types
type InfoType = {
  id: number
  title: string
  value: string
}

type PostType = {
  id: number
  text: string
  count: number
}

export type PostsType = {
  valueTextarea: string
  allPosts: PostType[]
}

export type PersonalInfoProfileType = {
  userName: string
  info: InfoType[]
}

export type UserDialogType = {
  id: number
  user: string
}

export type MessageDialogType = {
  id: number
  message: string
}

type ItemNavbarType = {
  id: number
  title: string
}

export type FriendType = {
  id: number
  userName: string
}

export type ProfilePageType = {
  personalInfoProfile: PersonalInfoProfileType
  posts: PostsType
}

export type DialogsPageType = {
  messageTextareaValue: string
  usersDialog: UserDialogType[]
  messages: MessageDialogType[]
}

export type SitebarType = {
  itemsNavbar: ItemNavbarType[]
  friends: FriendType[]
}

export type StateType = {
  profilePage: ProfilePageType
  dialogsPage: DialogsPageType
  sitebar:SitebarType
}

export type StoreType = {
  _state: StateType
  _allRerender: (_state: StateType)=>void
  _subscribe: (observer: any)=>void
  getState: ()=> StateType
  dispatch: (action: any)=> void
}

// GLOBAL DATA
const store: StoreType = {
  _state: {
    profilePage: {
      personalInfoProfile: {
        userName: "Viktor RED",
        info : [
        {id: 1, title: "Date of birth:", value: "2 September 1984"},
        {id: 2, title: "Address:", value: "Minsk, Hohlova 22-94"},
        {id: 3, title: "Education:", value: "BSU 2007"},
        {id: 4, title: "Web Site:", value: "https://it-kamasutra.com"},
          ]
      },
      posts: {
        valueTextarea: "",
        allPosts: [
          {id: 1, text: "How I am?", count: 7},
          {id: 2, text: "I want to become a super specialist!!!", count: 1},
          {id: 3, text: "I'd like to speak English correctly and fluently", count: 22},
          {id: 4, text: "Hey, why nobody love me?", count: 5}
        ]
      }
    },
    dialogsPage: {
      messageTextareaValue: '',
      usersDialog: [
        {id: 1, user: "Alex"},
        {id: 2, user: "Andru"},
        {id: 3, user: "Gleb777"},
        {id: 4, user: "DimaFace"},
        {id: 5, user: "AnonimusAll"},
        {id: 6, user: "GreatPlezuar"},
        {id: 7, user: "Nikodim99"},
        {id: 8, user: "MariborGrand"},
      ],
      messages: [
        {id: 1, message: "Hello. how are you???"},
        {id: 2, message: "Oyyy! Hi!!! I am fine, thank you!!!"},
        {id: 3, message: "It is very good)))"}
      ]
    },
    sitebar: {
      itemsNavbar: [
        {id: 1, title:"profile"}, 
        {id: 2, title:"messanges"}, 
        {id: 3, title:"news"}, 
        {id: 4, title:"music"}, 
        {id: 5, title:"settings"}, 
      ],
      friends: [
        {id: 1, userName:"Viktor"}, 
        {id: 2, userName:"Den"}, 
        {id: 3, userName:"Emile"},  
      ],
    }
    },
    _allRerender () {
      console.log("yes")
    },
    _subscribe (observer: any) {
      this._allRerender = observer;
    },
    getState () {
      return this._state;
    },
  dispatch (action: any) {
    this._state.profilePage = profileReducer(this._state.profilePage, action)
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
    this._state.sitebar = sitebarReducer(this._state.sitebar, action)
    
    this._allRerender(this._state);
    }
}

export default store