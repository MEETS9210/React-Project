import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

const Table2 = () => {
    let [ary, setAry] = useState([]);
    useEffect(() => {
      CallApi();
  }, [ary]);

  let CallApi = () => {
      axios.get('https://student-api.mycodelibraries.com/api/user/get').then((res) => {

          setAry([...res.data.data]);

      }).catch((error) => {
          console.log(error, 'error');
      })
  }


    let deleted = (x) => {

      axios.delete(`https://student-api.mycodelibraries.com/api/user/delete?id=${x}`).then(() => {
          CallApi();
      }).catch((error) => {
          console.log("error", error);
      });

  }
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
    <div className='classtable' style={myo}>
       <table className='table fs-6 class_table'>
                <thead>

                    <tr>
                        <th>id</th>
                        <th>Profile</th>
                        <th>firstName</th>
                        <th>lastName</th>
                        <th>Age</th>
                        <th>Gender</th>
                        <th>Hobbies</th>
                        <th>Action</th>
                    </tr>

                </thead>

                <tbody>

                    {ary.map((x, i) => {
                        return <tr key={i}>
                            <td>{i + 1}</td>
                           <td> <img src={x.image} className="rounded-circle" style={{width: '100px'}} /></td>
                            <td>{x.firstName}</td>
                            <td>{x.lastName}</td>
                            <td>{x.age}</td>
                            <td>{x.gender}</td>
                            <td>{x.hobbies}</td>
                            <td>
                                <Link type='button' to={`/form2/${x._id}`} className='btn btn-dark fs-6 me-2'><FaEdit /></Link>
                                <button type='button' onClick={() => deleted(x._id)} className='btn btn-dark fs-6'><MdDelete /></button>
                            </td>
                        </tr>
                    })}
                </tbody>
            </table>
    </div>



























    
  )
}

export default Table2
