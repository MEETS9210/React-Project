import axios from "axios"
import { DeleteToken, GetToken, InsertToken, UpdateToken } from "../type"

let header = {
  headers: {
    Authorization: "Bearer 89ef23a48ab40432299fc00d5ef07aff2664ea420bc3e4d4a9bd10f29f62f658"
  }
}

export const GetData = () => {
  return (dispatch) => {
    axios
      .get("https://gorest.co.in/public/v2/users", header)
      .then((res) => {
        console.log(res.data)
        dispatch({
          type: GetToken,
          ary: res.data,
        })
      })
      .catch((err) => {
        console.log(err)
      })
  }
}
export const InsertData = (obj) => {
  return (dispatch) => {
    axios
      .post("https://gorest.co.in/public/v2/users",obj, header)
      .then((res) => {
        console.log(res.data)
        dispatch({
          type: InsertToken,
        })
        dispatch(GetData())
      })
      .catch((err) => {
        console.log(err)
      })
  }
}
export const UpdateData = (obj) => {
  return (dispatch) => {
    axios
      .put(`https://gorest.co.in/public/v2/users/${obj.id}`,obj, header)
      .then((res) => {
        dispatch({
          type: UpdateToken
        })
        dispatch(GetData())
      })
      .catch((err) => {
        console.log(err)
      })

  }
}
export const DeleteData = (id) => {
  return (dispatch) => {
    axios
      .delete(`https://gorest.co.in/public/v2/users/${id}`, header)
      .then((res) => {
        dispatch({
          type: DeleteToken,
        })
        dispatch(GetData())
      })
      .catch((err) => {
        console.log(err)
      })
  }
}
