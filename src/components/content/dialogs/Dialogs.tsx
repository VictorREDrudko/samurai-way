import React, { ChangeEvent } from "react";
import { addMessageAC, updateTextareaMessageAC } from "../../../redux/dialogs-reducer";
import { Button } from "../../button/Button";
import s from "./Dialogs.module.css"
import { ItemsDialogs } from "./itemsDialogs/ItemsDialogs";
import { Message } from "./message/Message";
import { DialogsPageType } from "../../../redux/store";

type DialogsPropsType = {
  dialogs: DialogsPageType
  dispatch: (action: any)=>void
}

export const Dialogs = ({dialogs, dispatch}: DialogsPropsType) => {
  const mappedDialogs = dialogs.messages.map(dialog => {
    return <Message key={dialog.id} 
                    message={dialog.message} />
  })
  
  const addMessage = () => {
    dispatch(addMessageAC())
  }

  const onChangeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
    let newText = event.currentTarget.value;
    dispatch(updateTextareaMessageAC(newText));
  }

  return (
    <div>
      <h2>DIALOGS</h2>
      <div>
        <form action='#' className={s.formWrapper}>
          <textarea value={dialogs.messageTextareaValue} onChange={onChangeHandler} placeholder='Your news...'/>
          <Button title={"Add message"} callback={addMessage}/>
        </form>
      </div>
      <div className={s.dialogs}>
        <ItemsDialogs users={dialogs.usersDialog}/>
        <div> {mappedDialogs} </div>
      </div>
    </div>
  )
}