import React from 'react'
import { Link} from 'react-router-dom'
import { TbError404 } from "react-icons/tb";
import { MdError } from "react-icons/md";



const Error = () => {
  return (
    <div className='text-center mt-5 pt-5'>
        <h4> <MdError />
        Error<MdError />
        </h4>
      <h1 className='text-danger'><TbError404 /> Page not found</h1>
      <Link to="/login ">Go To Page</Link>
    </div>
  )
}

export default Error
