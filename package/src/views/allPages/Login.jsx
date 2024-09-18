import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { context } from '../../App';

const Login = () => {
    let [obj,setObj] = useState({email:"",password:""});
    let [login_ary,setLogin_ary] = useState(JSON.parse(localStorage.getItem("login_ary")) || []);
    let i_ary =JSON.parse(localStorage.getItem("i_ary")) || [];
    const [error, setError] = useState({});
    const [subm, setSubm] = useState(false);
    let {log,setLog} = useContext(context);
    let navigate = useNavigate();

    useEffect(() => {
        if (Object.keys(error).length === 0 && subm) {
            finalS();
        }
    }, [error]);

    let vali = (value) => {
        let err = {};
        if (!value.email || !value.password) {
            if (!value.email) {
                err.email = " email fil";
            }
            if (!value.password) {
                err.password = " password fill";
            }
        }
        else if (value.email && value.password) {
            let findUser_obj = i_ary.find((z) => z.email === value.email);
            if (!findUser_obj) {

                err.password = " password or email incorrect";
                err.email = " email or password incorrect";
            }
            else if (value.password !== findUser_obj.password) {
                err.password = " password incorrect";
            }
        }

        return err;
    };

    let finalS = () => {
        navigate("/");
        setObj({ ...obj });
        localStorage.setItem("loginObj", JSON.stringify(obj));
        login_ary.push(obj);
        setLogin_ary([...login_ary]);
        localStorage.setItem("login_ary", JSON.stringify(login_ary));
        console.log(login_ary, "login_ary");

        setLog(localStorage.getItem('loginObj'));        

    }
    let saved = (e) => {
        e.preventDefault();
        setError(vali(obj));
        setSubm(true);
    }

    let changeD = (e) => {
        obj[e.target.name] = e.target.value;
        setObj({ ...obj });
    };

    const myi = {
        backgroundImage:
            "url('https://wallpapers.com/images/hd/one-punch-man-saitama-q53hdrvd8japtzmf.jpg')",
        height: "100vh",
        // width: "100",
        // marginTop: "100px",
        fontSize: "13px",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",

    };

    return (
        <>
           <div className="rounded  h-100 classform" style={myi}>
<h1 className='text-white text-center pt-3 fw-bolder mb-3' >LOGIN</h1>

    <form className="form w-50   mb-2 shadow-lg p-3 mb-5 bg-body rounded">
        <label htmlFor="email" className="w-100 fw-bolder m-2">Email</label>
        <input type="email" name="email" placeholder='Email' className="w-100 rounded-pill shadow-lg p-2 mb-2 bg-body rounded " onChange={changeD} value={obj.email} />
        {error.email && <p className="text-danger">{error.email}</p>}

        <label htmlFor="password" className="w-100 fw-bolder m-2">Password</label>
        <input type="password" name="password"  placeholder='Password' className="w-100 rounded-pill shadow-lg p-2 mb-2 bg-body rounded" onChange={changeD} value={obj.password} />
        {error.password && <p className="text-danger">{error.password}</p>}

        <button onClick={saved} className="w-100 btn btn-dark me-2 " type="button">LOG IN</button><br />
        <Link to="/register"  className='text-center  mt-4  fw-bolder'>Click for Registration</Link>
    </form>
</div>

        </>
    )
}

export default Login
