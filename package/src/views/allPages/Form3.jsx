import { Component } from "react";
import { Link } from "react-router-dom";
import Withroute from "./ClassRoute"
import { FaSave } from "react-icons/fa";

// import ''

class ClassForm extends Component {
    constructor() {
        super();
        this.state = {
            ary: JSON.parse(localStorage.getItem("ary")) || [],
            obj: { id: 0, fname: "", lname: "", number: "",  email: "", password: "", hobby: [], gender: "" },
            blankObj: { id: 0, fname: "", lname: "", number: "",  email: "", password: "", hobby: [], gender: "" },
            count: JSON.parse(localStorage.getItem("count")) || 0
        }
    }

    componentDidMount() {
        let {id} = this.props.params;
        console.log('hello');
        if (id) {
            console.log('hello');
            let editObj = this.state.ary.find((z) => z.id == id);
            console.log(editObj, "editobj");
            if (editObj) {
                console.log(editObj, "editobj");
                this.setState({ obj: editObj });
            }

        }
    }

    handleChange = async (x) => {
        if (x.target.name === 'hobby') {
            if (x.target.checked) {
                this.state.obj.hobby = [...this.state.obj.hobby, x.target.value];
            }
            else {
                this.state.obj.hobby = [...this.state.obj.hobby.filter((z) => z !== x.target.value)];
            }
        }
        else if(x.target.name === "profile"){
            this.state.obj.profile = x.target.files[0] ? await this.toBase64(x.target.files[0]) : "";
        }
        else {
            this.state.obj[x.target.name] = x.target.value;
        }
        this.setState({ obj: this.state.obj })
    }
    toBase64 = file => new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = reject;
    });
    

    saved = () => {
        if (this.state.obj.id === 0) {
            let c1 = this.state.count;
            c1 += 1;
            this.state.obj.id = c1;

            this.state.ary.push(this.state.obj);

            this.setState({ count: c1 });
            localStorage.setItem("count", JSON.stringify(c1));
        }
        else {
            this.state.obj._id = this.state.obj.id;
            let i = this?.state?.ary?.findIndex((x) => x.id == this?.state?.obj.id);
            this?.state?.ary?.splice(i, 1, this?.state?.obj);
        }

        localStorage.setItem("ary", JSON.stringify(this.state.ary));

        this.setState({ ary: [...this.state.ary] });
        console.log(this.state.ary, "ary");
    }

    render() {
        const myStyle = {
            backgroundImage:
                "url('https://c4.wallpaperflare.com/wallpaper/147/719/653/the-dark-background-hands-zombies-wallpaper-preview.jpg')",
            height: "100vh",
            width:"1150px",
            // marginTop: "100px",
            fontSize: "10px",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            
        };
        
        return (
            <div className="rounded  h-100 classform" style={myStyle}>
      <h1 className='text-primary text-center pt-3 fw-bold mb-3' >Form 3</h1>

                <form className="form w-50   mb-2 shadow-lg p-3 mb-5 bg-body rounded" >
                    {/* <div className=" px-5"> */}
                        <label className="w-100 fw-bold" htmlFor="fname">First Name</label>
                        <input onChange={this.handleChange} className="w-100 rounded-pill shadow-lg p-2 mb-2 bg-body rounded " type="text" name="fname" value={this.state.obj.fname} id="fname" />

                        <label className="w-100 fw-bold" htmlFor="number">Mobail Number</label>
                        <input onChange={this.handleChange} className="w-100 rounded-pill shadow-lg p-2 mb-2 bg-body rounded " type="number" name="number" value={this.state.obj.number} id="number" />

                    
                    
                        <label className="w-100 fw-bold" htmlFor="lname">Last Name</label>
                        <input onChange={this.handleChange} className="w-100 rounded-pill shadow-lg p-2 mb-2 bg-body rounded " type="text" name="lname" value={this.state.obj.lname} id="lname" />

                        


                    
                        {/* <label className="mb-2 classform_label">Profile</label><br />
                        <input onChange={this.handleChange} type="file" name="profile" className="input_classform w-100 p-2 fs-6" /> */}
                        <label className="w-100 fw-bold" htmlFor="email">email</label>
                        <input onChange={this.handleChange} className="w-100 rounded-pill shadow-lg p-2 mb-2 bg-body rounded " type="email" name="email" value={this.state.obj.email} id="email" />
                        
                        <label className="w-100 fw-bold" htmlFor="password">Password</label>
                        <input onChange={this.handleChange} className="w-100 rounded-pill shadow-lg p-2 mb-2 bg-body rounded " type="password" name="password" value={this.state.obj.password} id="password" />

                    


                        <label className="w-100 fw-bold mt-3 mb-2">Gender</label><br />

                        <input type="radio" name="gender" value="Female" checked={this.state.obj.gender === "Female"} className="me-2" onChange={this.handleChange} />
                        <label className=" fw-bold">Female</label>
                        <input type="radio" name="gender" value="Male" checked={this.state.obj.gender === "Male"} className="me-1 ms-3" onChange={this.handleChange} />
                        <label className=" fw-bold">Male</label>
                        <input type="radio" name="gender" value="Other" checked={this.state.obj.gender === "Other"} className="me-1 ms-3" onChange={this.handleChange} />
                        <label className=" fw-bold">Other</label>

                        <br />
                        <label className="w-100 fw-bold mt-4 mb-2">Hobby</label><br />

                        <input type="checkbox" name="hobby" value="Read" checked={this.state.obj.hobby.includes("Read")} className="me-2" onChange={this.handleChange} />
                        <label className=" fw-bold">Read</label>
                        <input type="checkbox" name="hobby" value="Write" checked={this.state.obj.hobby.includes("Write")} className="me-1 ms-3" onChange={this.handleChange} />
                        <label className=" fw-bold">Write</label>
                        <input type="checkbox" name="hobby" value="Dance" checked={this.state.obj.hobby.includes("Dance")} className="me-1 ms-3" onChange={this.handleChange} />
                        <label className=" fw-bold">Dance</label>
                        <input type="checkbox" name="hobby" value="Travel" checked={this.state.obj.hobby.includes("Travel")} className="me-1 ms-3" onChange={this.handleChange} />
                        <label className=" fw-bold">Travel</label>

                        <label className="mb-2 classform_label mt-2">Profile</label><br />
                        <input onChange={this.handleChange} type="file" name="profile" className=" w-100 p-2 fs-6" />
                    {/* </div> */}

                    <Link onClick={this.saved} className="mt-4 w-100 px-4 btn btn-dark" to='/table3'>
                   save <FaSave />
                    </Link>
                </form>

            </div>
        )
    }
}

export default Withroute(ClassForm);