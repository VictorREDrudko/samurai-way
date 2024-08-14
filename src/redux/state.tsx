import { allRerender } from "../render"

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

export type DialogType = {
  id: number
  user: string
  messages: string[]
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

type DialogsPageType = {
  dialogs: DialogType[]
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

// Add new post
export const addNewPost = (text: string) => {
  const newPost = {
    id: state.contentPage.profilePage.posts.allPosts.length + 1, 
    text, 
    count: 0,
  }
  state.contentPage.profilePage.posts.allPosts.push(newPost);

  allRerender(state)
}

// Change text texarea
export const updateTextareaPost = (newtext: string) => {
  state.contentPage.profilePage.posts.valueTextarea = newtext;
  allRerender(state)
}

// GLOBAL DATA
const state: StateType = {
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
      dialogs: [
        {id: 1, user: "Alex", messages: ["Hello. how are you???", "oyyy! Hi!!! I am fine, thank you!!!", "It is very good)))"]},
        {id: 2, user: "Andru", messages: ["Hi", "Hi!!!", "Cool)))"]},
        {id: 3, user: "Gleb777", messages: ["Are you at home now????"]},
        {id: 4, user: "DimaFace", messages: ["Good morning! I am Dmitriy Ka!!! Pleas call me today"]},
        {id: 5, user: "AnonimusAll", messages: ["hGYUUYIUIUBMIUUHUHUPI"]},
        {id: 6, user: "GreatPlezuar", messages: ["+375295654321"]},
        {id: 7, user: "Nikodim99", messages: ["oyyy! Hi!!! I am fine, thank you!!!", "It is very good)))"]},
        {id: 8, user: "MariborGrand", messages: ["RRRRRRRRRRR"]},
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
}

export default state