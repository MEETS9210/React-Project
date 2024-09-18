import React from 'react'

const Profile = () => {

  const obj = JSON.parse(localStorage.getItem("loginObj")) || {};
  const i_ary = JSON.parse(localStorage.getItem("i_ary")) || [];
  let user = i_ary.find(((x) => x.email === obj.email));
  console.log(user);

  const myi = {
    backgroundImage:
        "url('https://i.pinimg.com/736x/92/f4/70/92f4704c48069e3bcc5062ef9b6cbb15.jpg')",
    height: "100vh",
    width: "200",
    // marginTop: "100px",
    fontSize: "13px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",

};
  return (
    <div className='profile text-center ' style={myi} >
      {
        <div className='profile_inner '>
          <h2 className='fw-bolder text-white'>  Profile</h2>
          <img id='img_profile' className='rounded-circle  border border-5' src={user.profile} alt="Profile" width={150} height={140} /><br />
          <h6 className="pt-3  mt-3 fw-bold fs-4 badge bg-dark text-wrap " >{user.fname} {user.lname}</h6>
          <div className='w-50 mx-auto text-start '>
            <h6 className="p-3 text-center text-warning bg-dark " ><h5 className='fw-bold'>Email:</h5> <span >{user.email}</span></h6>
            <h6 className="p-3 text-center text-warning bg-dark"><h5 className='fw-bold'>Age: </h5><span >{user.age} </span></h6>
  

          </div>
        </div>
      }
    </div>
  )
}

export default Profile
