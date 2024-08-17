import { connect } from "react-redux"
import { StateType } from "../../../redux/redux-store"
import { Friends } from "./Friends"

const mapStateToProps = (state: StateType) => {
  return {state: state.sitebar.friends}
}

const mapDispatchToProps = (dispatch: any) => {
  return ( {} )
}

const FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(Friends)

export default FriendsContainer