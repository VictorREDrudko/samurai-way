import { DialogsPageType } from "./state";

const ADD_MESSAGE = "ADD-NEW-MESSAGE"
const UPDATE_TEXTAREA_MESSAGE = "UPDATE-TEXTAREA-MESSAGE"


const dialogsReducer = (state: DialogsPageType, action: any) => {
  switch(action.type) {
    case ADD_MESSAGE:
      const newMessage = {
        id: state.messages.length +1, 
        message: state.messageTextareaValue
      };
      state.messages.push(newMessage);
      state.messageTextareaValue = '';
      break;

    case UPDATE_TEXTAREA_MESSAGE: 
      state.messageTextareaValue = action.newText;
      break;

    default : return state;
  }

  return state;
}

// Create Action Creator
export const addMessageAC = () => ({type: ADD_MESSAGE})

export const updateTextareaMessageAC = (newMessageText: string) => {
  return (
    {type: UPDATE_TEXTAREA_MESSAGE,
    newText: newMessageText,}
  )
}

export default dialogsReducer;