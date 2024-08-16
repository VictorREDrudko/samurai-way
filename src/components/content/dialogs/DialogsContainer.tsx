import { addMessageAC, DialogsPageType, updateTextareaMessageAC } from "../../../redux/dialogs-reducer";
import { Dialogs } from "./Dialogs";

type DialogsPropsType = {
  store: any
  dialogs: DialogsPageType
}

export const DialogsContainer = ({store, dialogs}: DialogsPropsType) => {
  const addMessage = () => {
    store.dispatch(addMessageAC())
  }

  const changeTextareaMessage = (newText: string) => {
    store.dispatch(updateTextareaMessageAC(newText));
  }

  return (
    <Dialogs dialogs={dialogs} addMessage={addMessage} changeTextareaMessage={changeTextareaMessage}/>
  )
}