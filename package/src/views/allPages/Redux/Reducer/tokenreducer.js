import {DeleteToken, GetToken, InsertToken, UpdateToken} from "../type"

const initial = {
  tokenData: [],
}
export const tokenreducer = (state = initial, action) => {
  switch (action?.type) {
    case GetToken:
      return {tokenData: action.ary}
    case InsertToken:
      return {tokenData: action.ary}
    case UpdateToken:
      return {tokenData : action.ary}
    case DeleteToken:
      return {tokenData: action.ary}
    default:
      return state
  }
}
