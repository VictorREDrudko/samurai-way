// CONST
const ADD_MESSAGE = "ADD-NEW-MESSAGE"
const UPDATE_TEXTAREA_MESSAGE = "UPDATE-TEXTAREA-MESSAGE"

// Types
export type UserDialogType = {
  id: number
  user: string
}
type MessageType = {
  id: number
  message: string
}

export type DialogsPageType = {
  messageTextareaValue: string
  usersDialog: UserDialogType[]
  messages: MessageType[]
}

// Initial State
const initialState: DialogsPageType = {
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

// REDUCER
const dialogsReducer = (state = initialState, action: any) => {
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