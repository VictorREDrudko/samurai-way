import React, { ChangeEvent } from "react";
import { addMessageAC, DialogsPageType, updateTextareaMessageAC } from "../../../redux/dialogs-reducer";
import { Button } from "../../button/Button";
import s from "./Dialogs.module.css"
import { ItemsDialogs } from "./itemsDialogs/ItemsDialogs";
import { Message } from "./message/Message";

type DialogsPropsType = {
  dialogs: DialogsPageType
  addMessage: ()=> void
  changeTextareaMessage: (newText: string)=> void
}

export const Dialogs = ({dialogs, addMessage, changeTextareaMessage}: DialogsPropsType) => {
  const mappedDialogs = dialogs.messages.map(dialog => {
    return <Message key={dialog.id} 
                    message={dialog.message} />
  })
  
  const onClickHandler = () => {
    addMessage();
  }

  const onChangeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
    let newText = event.currentTarget.value;
    changeTextareaMessage(newText)
  }

  return (
    <div>
      <h2>DIALOGS</h2>
      <div>
        <form action='#' className={s.formWrapper}>
          <textarea value={dialogs.messageTextareaValue} onChange={onChangeHandler} placeholder='Your news...'/>
          <Button title={"Add message"} onClick={onClickHandler}/>
        </form>
      </div>
      <div className={s.dialogs}>
        <ItemsDialogs users={dialogs.usersDialog}/>
        <div> {mappedDialogs} </div>
      </div>
    </div>
  )
}