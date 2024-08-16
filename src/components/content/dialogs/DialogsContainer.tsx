import { connect } from "react-redux";
import { addMessageAC, updateTextareaMessageAC } from "../../../redux/dialogs-reducer";
import { Dialogs } from "./Dialogs";
import { StateType } from "../../../redux/redux-store";

const mapStateToProps = (state: StateType) => {
  return {dialogs: state.dialogsPage}
}

const mapDispatchToProps = (dispatch: any) => {
  return (
    {addMessage: () => {
        dispatch(addMessageAC())
      },
      changeTextareaMessage: (newText: string) => {
        dispatch(updateTextareaMessageAC(newText));
      }
    }
  )
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;