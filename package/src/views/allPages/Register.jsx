
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
    let [obj, setObj] = useState({});
    let [i_ary, seti_ary] = useState(JSON.parse(localStorage.getItem("i_ary")) || []);
    const { register, handleSubmit, formState: { errors } } = useForm();
    let navigate = useNavigate();
    const onSub = async (data) => {
        console.log(data.profile[0], "po");
        if (data.profile) {
            for (let x in data) {
                if (x == "profile") {
                    data[x] = data.profile[0] ? await toBase64(data.profile[0]) : "";
                }
            }
        }
        obj = data;
        setObj({ ...obj });
        i_ary.push(obj);
        seti_ary([...i_ary]);
        localStorage.setItem('i_ary', JSON.stringify(i_ary));
        navigate('/login');
    };

    let toBase64 = file => new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = reject;
    });
    const myi = {
        backgroundImage:
            "url('https://img.freepik.com/free-photo/organized-desk-with-copy-space_23-2148219270.jpg')",
        height: "100vh",
        width: "200",
        // marginTop: "100px",
        fontSize: "13px",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",

    };

    return (
        <div className="rounded  h-100 classform" style={myi}>
        <h1 className='text-dark text-center pt-3 fw-bolder mb-3' >Register</h1>
        <form className="form w-50   mb-2 shadow-lg p-3 mb-5 bg-body rounded" onSubmit={handleSubmit(onSub)} >
            <label className=" w-100 fw-bold m-1" htmlFor="fname">First Name</label>
            <input {...register("fname", { required: "First Name is required" })} placeholder='First Name' className="w-100 rounded-pill shadow-lg p-2 mb-2 bg-body rounded " type="text"/>
            {
                errors.fname && <p className='text-danger  '>{errors.fname.message}</p>
            }
            <label className=" w-100 fw-bold m-1" htmlFor="lname">Last Name</label>
            <input {...register("lname", { required: "Last Name is required" })} placeholder='Last Name' className="w-100 rounded-pill shadow-lg p-2 mb-2 bg-body rounded " type="text" />
            {
                errors.lname && <p className='text-danger  '>{errors.lname.message}</p>
            }
            <label className=" w-100 fw-bold m-1" htmlFor="age">Age</label>
            <input {...register("age", { required: "Age is required" })} placeholder='Age' className="w-100 rounded-pill shadow-lg p-2 mb-2 bg-body rounded " type="number" />
            {
                errors.age && <p className='text-danger  '>{errors.age.message}</p>
            }
        
            <label className=" w-100 fw-bold m-1" htmlFor="email">email</label>
            <input {...register("email", { required: "Email is required" })} placeholder='Email' className="w-100 rounded-pill shadow-lg p-2 mb-2 bg-body rounded " type="email" />
            {
                errors.email && <p className='text-danger  '>{errors.email.message}</p>
            }
            <label className=" w-100 fw-bold m-1" htmlFor="password">Password</label>
            <input {...register("password", { required: "Password is required" })} placeholder='Password' className="w-100 rounded-pill shadow-lg p-2 mb-2 bg-body rounded " type="password"  />
            {
                errors.password && <p className='text-danger  '>{errors.password.message}</p>
            }
        
            <label className=" w-100 fw-bold m-1 ">Profile</label><br />
            <input {...register("profile", { required: "Profile is required" })} type="file" name="profile" className="w-100 p-2 " />
            {
                errors.profile && <p className='text-danger  '>{errors.profile.message}</p>
            }
            <button type='submit' className=" w-100 btn btn-dark me-2  ">REGISTER</button>
        </form>
        
        </div>
       
    )
}

export default Register

