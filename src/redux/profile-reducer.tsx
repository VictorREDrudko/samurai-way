import { ProfilePageType } from "./state";

const ADD_POST = "ADD-NEW-POST"
const UPDATE_TEXTAREA_POST = "UPDATE-TEXTAREA-POST"

const profileReducer = (state: ProfilePageType, action: any) => {
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