import { Component } from "react";
import { Link } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";



class ClassTable extends Component{
    constructor() {
        super();
        this.state = {
            ary: JSON.parse(localStorage.getItem("ary")) || [],
            obj: { id: 0, fname: "", lname: "", number: "", email: "", password: "", hobby: [], gender: "" },
            blankObj: { id: 0, fname: "", lname: "", number: "",email: "", password: "", hobby: [], gender: "" },
            count: JSON.parse(localStorage.getItem("count")) || 0
        }
    }

    deleted = (i)=>{
        this.state.ary.splice(i,1);
        this.setState({ary:[...this.state.ary]});
        localStorage.setItem("ary",JSON.stringify(this.state.ary));
    }


    render(){
        const myS = {
            backgroundImage:
                "url('https://i.pinimg.com/736x/40/61/0e/40610efe5928cadf1a8772ccf9a55996.jpg')",
            height: "100vh",
            width:"1150px",
            // marginTop: "100px",
            fontSize: "12px",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            
        };
        return(
            <div className="classtable bg-dark text-white" style={myS}>
            <h2  className='text-center fst-italic fw-bolder'>Table</h2>
                <table className="table table-secondary shadow-lg p-3 mb-5 bg-body rounded" id="class_table">
                    <thead>
                        <tr>
                            <th className="bg-dark text-white">Id</th>
                            <th  className="bg-dark text-white">Profile</th>
                            <th className="bg-dark text-white">First Name</th>
                            <th className="bg-dark text-white">Last Name</th>
                            <th className="bg-dark text-white">Mobail Number</th>
                            <th className="bg-dark text-white">Email</th>
                            <th className="bg-dark text-white">Password</th>
                            <th className="bg-dark text-white">Hobby</th>
                            <th className="bg-dark text-white">Gender</th>
                            <th className="bg-dark text-white">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.ary.map((x,i)=>{
                                return <>
                                    <tr key={i}>
                                        <td>{x.id}</td>
                                        <td><img src={x.profile} className="rounded-circle" style={{width:"50px"}} /></td>
                                        <td>{x.fname}</td>
                                        <td>{x.lname}</td>
                                        <td>{x.number}</td>
                                        <td>{x.email}</td>
                                        <td>{x.password}</td>
                                        <td>{x.hobby}</td>
                                        <td>{x.gender}</td>
                                        <td>
                                            <button className="btn btn-dark me-2 fs-6"  onClick={()=>this.deleted(i)}><MdDelete /></button>
                                            <Link to={`/form3/${x.id}`} className="btn btn-dark fs-6"><FaEdit />
                                            </Link>
                                        </td>
                                        
                                    </tr>
                                </>
                            })
                        }
                    </tbody>
                </table>

            </div>
        )
    }

}

export default ClassTable;