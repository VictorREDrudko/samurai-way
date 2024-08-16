// CONST
const ADD_POST = "ADD-NEW-POST"
const UPDATE_TEXTAREA_POST = "UPDATE-TEXTAREA-POST"

// Types
type InfoType = {
  id: number
  title: string
  value: string
}

export type PostType = {
  id: number
  text: string
  count: number
}

export type PersonalInfoProfileType = {
  userName: string
  info: InfoType[]
}

export type PostsType = {
  valueTextarea: string
  allPosts: PostType[]
}

export type ProfilePageType = {
  personalInfoProfile: PersonalInfoProfileType
  posts: PostsType
}

// Initial State
const initialState: ProfilePageType = {
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
}

// REDUCER
const profileReducer = (state = initialState, action: any) => {
  switch(action.type) {
    case ADD_POST: 
      const newPost = {
        id: state.posts.allPosts.length + 1, 
        text: state.posts.valueTextarea, 
        count: 0,
      }
        state.posts.allPosts.push(newPost);
        state.posts.valueTextarea = '';
      break;

    case UPDATE_TEXTAREA_POST: 
        state.posts.valueTextarea = action.newText;
      break;

    default : return state;
  }

  return state;
}

// Create Action Creator
export const addPostAC = () => ({type: ADD_POST})

export const updateTextareaPostAC = (text: string) => {
  return (
    {type: UPDATE_TEXTAREA_POST,
    newText: text}
  )
}

export default profileReducer;