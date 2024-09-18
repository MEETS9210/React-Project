import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { FaSave } from "react-icons/fa";

const Form2 = () => {
    let blankObj = { _id: 0, firstName: "", lastName: "", age: "", image: '', hobbies: [], gender: "" }
    let [obj, setObj] = useState({ ...blankObj });
    let [ary, setAry] = useState([]);
    let { id } = useParams();

    useEffect(() => {
        CallApi();
    }, []);

    useEffect(() => {
        if (id) {
            let editObj = ary?.find((z) => z._id === id);
            if (editObj) {
                setObj({ ...editObj });
            }
        }
    }, [ary, id]);

    let CallApi = () => {
        axios.get('https://student-api.mycodelibraries.com/api/user/get').then((res) => {
            setAry([...res.data.data]);

        }).catch((error) => {
            console.log(error, 'error');
        })
    }
    let handleC = (x) => {

        if (x?.target?.name === "hobbies") {

            if (x?.target?.checked) {
                obj.hobbies = [...obj?.hobbies, x?.target?.value];
            }
            else {
                obj.hobbies = obj?.hobbies?.filter((z) => z !== x.target.value);
            }
        }
        else if (x.target.type === 'file') {
            obj.image = x.target.files[0];
        }

        else {
            obj[x.target.name] = x?.target?.value;
        }
        setObj({ ...obj });
    }

    let saveD = () => {
        let form = new FormData();
        form.append("id", obj?._id)
        form.append("firstName", obj?.firstName)
        form.append("lastName", obj?.lastName)
        form.append("age", obj?.age)
        form.append("userImage", obj?.image)
        form.append("gender", obj?.gender)
        form.append("hobbies", obj?.hobbies)
        form.append("city", obj?.city)
        console.log(obj.image);

        if (obj._id === 0) {
            axios.post("https://student-api.mycodelibraries.com/api/user/add", form).then(() => {
                CallApi();
            });
        }
        else {
            obj.id = obj?._id;
            axios.post("https://student-api.mycodelibraries.com/api/user/update", form).then(() => {
                CallApi();
            });
        }
        setAry([...ary]);
    }
    const myS = {
        backgroundImage:
            "url('https://c4.wallpaperflare.com/wallpaper/118/697/306/light-bulb-minimalism-wallpaper-preview.jpg')",
        height: "100vh",
        width: "1150px",
        // marginTop: "100px",
        fontSize: "13px",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",

    };

    return (
        <div className='rounded  h-100 classform' style={myS}>
            <h1 className='text-white text-center pt-3 fw-bolder mb-3' >Form 2</h1>

            <form className='form w-50   mb-2 shadow-lg p-3 mb-5 bg-body rounded'>



                <label className='w-100 fw-bold' htmlFor="firstName">firstName </label><br />
                <input type="text" className='w-100 rounded-pill shadow-lg p-2 mb-2 bg-body rounded' name='firstName' value={obj.firstName} onChange={handleC} /><br />
                <label className='w-100 fw-bold' htmlFor="lastName">lastName  </label><br />
                <input type="text" className='w-100 rounded-pill shadow-lg p-2 mb-2 bg-body rounded' name='lastName' value={obj.lastName} onChange={handleC} /><br />
                <label className='w-100 fw-bold' htmlFor="age">age  </label><br />
                <input type="number" className='w-100 rounded-pill shadow-lg p-2 mb-2 bg-body rounded' name='age' value={obj.age} onChange={handleC} /><br />


                <label className='w-100 fw-bold mt-3 mb-2'>Gender</label><br />
                <input type="radio" className='m-2' value="male" checked={obj.gender.includes("male")} name='gender' id='male' onChange={handleC} />
                <label className='fw-bold' htmlFor="male">Male  </label>
                <input type="radio" className='m-2' value="female" checked={obj.gender.includes("female")} name='gender' id='female' onChange={handleC} />
                <label className='fw-bold' htmlFor="female">Female  </label>
                <input type="radio" className='m-2' value="other" checked={obj.gender.includes("other")} name='gender' id='other' onChange={handleC} />
                <label className='fw-bold' htmlFor="other">Other</label><br />


                <label className='w-100 fw-bold mt-4 mb-2'>Hobbies</label><br />
                <input type="checkbox" className='m-1' checked={obj.hobbies.includes("travel")} value="travel" name='hobbies' id='travel' onChange={handleC} />
                <label className='fw-bold' htmlFor="travel">Travel  </label>
                <input type="checkbox" className='m-1' checked={obj.hobbies.includes("read")} value="read" name='hobbies' id='read' onChange={handleC} />
                <label className='fw-bold' htmlFor="read">Read  </label><br />
                <input type="checkbox" className='m-1' checked={obj.hobbies.includes("write")} value="write" name='hobbies' id='write' onChange={handleC} />
                <label className='fw-bold' htmlFor="write">Write  </label>
                <input type="checkbox" className='m-1' checked={obj.hobbies.includes("cricket")} value="cricket" name='hobbies' id='cricket' onChange={handleC} />
                <label className='fw-bold' htmlFor="cricket">Cricket  </label>
                <br />

                <label htmlFor="image">Image   </label>
                <input type="file" className='me-1 p-2  fs-6 w-100' name='image' id='image ' onChange={handleC} />

                <Link to='/table2' onClick={saveD} type='button' className='mt-4 w-100 px-4 btn btn-dark'>save <FaSave /></Link>




            </form>
        </div>
    )
}

export default Form2
