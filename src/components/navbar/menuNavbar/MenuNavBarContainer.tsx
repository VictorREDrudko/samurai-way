import { connect } from "react-redux"
import { MenuNavbar } from "./MenuNavBar"
import { StateType } from "../../../redux/redux-store"

const mapStateToProps = (state: StateType) => {
  return {state: state.sitebar.itemsNavbar}
}

const mapDispatchToProps = (dispatch: any) => {
  return ( {} )
}

const MenuNavbarContainer = connect(mapStateToProps, mapDispatchToProps)(MenuNavbar)

export default MenuNavbarContainer