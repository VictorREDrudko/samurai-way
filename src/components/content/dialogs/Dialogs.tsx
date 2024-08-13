import { DialogsType } from "../../..";
import s from "./Dialogs.module.css"
import { ItemsDialogs } from "./itemsDialogs/ItemsDialogs";
import { Message } from "./message/Message";

type DialogsPropsType = {
  dialogs: DialogsType[] 
}

export const Dialogs = ({dialogs}: DialogsPropsType) => {
  const mappedDialogs = dialogs.map(dialog => <Message messages={dialog.messages} userName={dialog.user}/>)

  return (
    <div>
      <h2>DIALOGS</h2>
      <div className={s.dialogs}>
        <ItemsDialogs/>
        <div> {mappedDialogs} </div>
      </div>
    </div>

  )
}