// CONST
const ADD_POST = "ADD-NEW-POST"
const UPDATE_TEXTAREA_POST = "UPDATE-TEXTAREA-POST"

const ADD_MESSAGE = "ADD-NEW-MESSAGE"
const UPDATE_TEXTAREA_MESSAGE = "UPDATE-TEXTAREA-MESSAGE"


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

export type ContentType = {
  profilePage: ProfilePageType
  dialogsPage: DialogsPageType
}

export type StateType = {
  contentPage: ContentType
  sitebar: SitebarType
}

export type StoreType = {
  _state: StateType
  _allRerender: (_state: StateType)=>void
  _subscribe: (observer: any)=>void
  getState: ()=> StateType
  _addNewPost: ()=>void
  _updateTextareaPost: (newtext: string)=>void
  dispatch: (action: any)=> void
}



// GLOBAL DATA
const store: StoreType = {
  _state: {
    contentPage: {
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
      }
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
  _addNewPost () {
    const newPost = {
      id: this._state.contentPage.profilePage.posts.allPosts.length + 1, 
      text: this._state.contentPage.profilePage.posts.valueTextarea, 
      count: 0,
    }
    this._state.contentPage.profilePage.posts.allPosts.push(newPost);
    this._state.contentPage.profilePage.posts.valueTextarea = '';
    this._allRerender(this._state);
  },
  _updateTextareaPost (newText: string) {
    this._state.contentPage.profilePage.posts.valueTextarea = newText;
    this._allRerender(this._state);
  },
  getState () {
    return this._state;
  },
  dispatch (action: any) {
    switch(action.type) {
      case ADD_POST: 
        this._addNewPost();
        break;
      case UPDATE_TEXTAREA_POST: 
        this._updateTextareaPost(action.newText);
        break;
      case ADD_MESSAGE:
        const newMessage = {
          id: this._state.contentPage.dialogsPage.messages.length +1, 
          message: this._state.contentPage.dialogsPage.messageTextareaValue
        };
        this._state.contentPage.dialogsPage.messages.push(newMessage);
        this._state.contentPage.dialogsPage.messageTextareaValue = '';
        this._allRerender(this._state);
        break;
      case UPDATE_TEXTAREA_MESSAGE: 
        this._state.contentPage.dialogsPage.messageTextareaValue = action.newText;
        this._allRerender(this._state);
        break;

      default : return ''
    }

  }
}

export default store



// Create Action Creator
export const addPostAC = () => ({type: ADD_POST})

export const updateTextareaPostAC = (text: string) => {
  return (
    {type: UPDATE_TEXTAREA_POST,
    newText: text,}
  )
}

export const addMessageAC = () => ({type: ADD_MESSAGE})

export const updateTextareaMessageAC = (newMessageText: string) => {
  return (
    {type: UPDATE_TEXTAREA_MESSAGE,
    newText: newMessageText,}
  )
}
