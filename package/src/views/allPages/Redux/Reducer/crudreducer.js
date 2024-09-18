import { LogIn, LogOut, NewUser } from "../type"

const initial = {
  loginData: [],
}
const crudReducer = (state = initial, action) => {
  switch (action?.type) {
    case NewUser:
      return {...state}
    case LogIn:
      return {...state}
    case LogOut:
      return {...state}
    default:
      return state
  }
}
export default crudReducer
