import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

import { DeleteData, GetData } from './Action/tokenaction'
const ReduxTable = () => {
  let state = useSelector((data) => data.token.tokenData)
  const dispatch = useDispatch()
  const deleteData = (id) => {
    dispatch(DeleteData(id))
  }
  useEffect(() => {
    dispatch(GetData())
  }, []);

  const myo = {
    backgroundImage:
        "url('https://wallpapers.com/images/hd/lazy-snoopy-right-side-q50siadzjetfbapp.jpg')",
    height: "100vh",
    width:"1150px",
    // marginTop: "100px",
    fontSize: "10px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    
};

  return (
    <div>
      <div className="classtable"  style={myo}>
        <table className="table fs-6 class_table">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Gender</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody id="tbody">
            {
              state?.map((x, i) => {
                return (
                  <tr key={i}>
                    <td>{i + 1}</td>
                    <td>{x.name}</td>
                    <td>{x.email}</td>
                    <td>{x.gender}</td>
                    <td>{x.status}</td>
                    <td>
                      <button type='button' className="btn btn-dark fs-6 me-2"  onClick={() => deleteData(x.id)}><MdDelete/></button>
                      <Link to={`/form1/${x.id}`} className="btn btn-dark fs-6"><FaEdit /></Link>
                    </td>

                  </tr>
                )
              })}
          </tbody>
        </table>
      </div>

    </div>
  )
}

export default ReduxTable



