import React from "react";
import { DialogType } from "../../../redux/state";
import { Button } from "../../button/Button";
import s from "./Dialogs.module.css"
import { ItemsDialogs } from "./itemsDialogs/ItemsDialogs";
import { Message } from "./message/Message";
import { Textarea } from "../../textarea/Textarea";

type DialogsPropsType = {
  dialogs: DialogType[] 
}

export const Dialogs = ({dialogs}: DialogsPropsType) => {
  const mappedDialogs = dialogs.map(dialog => <Message key={dialog.id} messages={dialog.messages} userName={dialog.user}/>)
  
  const refNewMessage = React.createRef<HTMLTextAreaElement>()
  
  const addMessage = () => {
    let message = refNewMessage.current?.value;
    alert(message);
  }

  return (
    <div>
      <h2>DIALOGS</h2>
      <div>
        <form action='#' className={s.formWrapper}>
          <textarea ref={refNewMessage} placeholder='Your news...'/>
          <Button title={"Add message"} callback={addMessage}/>
        </form>
      </div>
      <div className={s.dialogs}>
        <ItemsDialogs/>
        <div> {mappedDialogs} </div>
      </div>
    </div>

  )
}