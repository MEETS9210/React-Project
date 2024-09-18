import { LogIn, LogOut, NewUser} from "../type"

export const AddUser = () => {
  return (dispatch) => {
    dispatch({
      type: NewUser,
    })
  }
}

export const LogInUser = () => {
  return (dispatch) => {
    dispatch({
      type: LogIn,
    })
  }
}

export const LogOutUser = () => {
  return (dispatch) => {
    dispatch({
      type: LogOut,
    })
  }
}
