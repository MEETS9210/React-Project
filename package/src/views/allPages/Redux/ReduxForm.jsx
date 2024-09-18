import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { GetData, InsertData, UpdateData } from './Action/tokenaction'


const ReduxForm = () => {
  let state = useSelector((data) => data.token.tokenData)
  const blank = {
    id: 0,
    name: "",
    email: "",
    gender: "",
    status: ""
  }

  const params = useParams();
  const dispatch = useDispatch()
  const [obj, setobj] = useState({ ...blank })
  const inputC = (o) => {
    obj[o.target.name] = o.target.value
    setobj({ ...obj })
  }
  const saveD = () => {
    if (obj.id === 0) {
      dispatch(InsertData(obj))
    } else {
      dispatch(UpdateData(obj))
    }
  }
  useEffect(() => {
    dispatch(GetData())
  }, [])
  useEffect(() => {
    editD();

  }, [params.id, state]);

  const editD = () => {
    if (params.id) {
      let editObj = state.find(x => x.id == params.id)
      if (editObj) {
        setobj({ ...editObj })
      }
    }
  }
  const myS = {
    backgroundImage:
        "url('https://c4.wallpaperflare.com/wallpaper/118/697/306/light-bulb-minimalism-wallpaper-preview.jpg')",
    height: "100vh",
    width:"1150px",
    // marginTop: "100px",
    fontSize: "13px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    
};

  return (
    <div className="rounded  h-100 classform" style={myS}>
      <h1 className='text-primary text-center pt-3 fw-bold mb-3' >Form 1</h1>

      <form className="form w-50   mb-2 shadow-lg p-3 mb-5 bg-body rounded">


        <label htmlFor="name" className="w-100 fw-bold">Name</label>
        <input onChange={inputC} type="text" value={obj.name} name='name' className="w-100 m-2 rounded-pill shadow-lg p-2 mb-2 bg-body rounded" id="name" />

        <label htmlFor="email" className="w-100 fw-bold">Email</label>
        <input onChange={inputC} type="email" value={obj.email} name='email' className="w-100 m-2 rounded-pill shadow-lg p-2 mb-2 bg-body rounded" id="email" />


        <br />
        <label className='w-100 fw-bold mt-3 mb-2'>Gender</label>

        <input onChange={inputC} checked={obj.gender == "male"} className='m-2' value={"male"} type="radio" name="gender" />
        <label className='fs-6'>Male</label>
        <input onChange={inputC} checked={obj.gender == "female"} className='m-2' value={"female"} type="radio" name="gender" />
        <label className='fs-6'>Female</label>
        <input onChange={inputC} checked={obj.gender == "other"} className='m-2' value={"other"} type="radio" name="gender" />
        <label className='fs-6'>Other</label>


        <br />
        <label className='w-100 fw-bold mt-4 mb-2'>Status</label>

        <input onChange={inputC} checked={obj.status == "active"} className='me-1' value={"active"} type="radio" name="status" />
        <label className='fs-6'>Active</label>
        <input onChange={inputC} checked={obj.status == "inactive"} className='me-1 ms-3' value={"inactive"} type="radio" name="status" />
        <label className='fs-6'>InActive</label>

        <Link type="button" className="mt-4 w-100 px-4 btn btn-dark" onClick={saveD} to={"/table1"}>SAVE</Link>
  

      </form>

    </div>
  )
}

export default ReduxForm;
