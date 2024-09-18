import { Button, Nav, NavItem } from "reactstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { CiAirportSign1 } from "react-icons/ci";
import { FaWpforms } from "react-icons/fa";
import { useContext } from "react";
import { context } from "../App";


const navigation = [
  {
    title: "Dashboard",
    href: "/",
    icon:"fa-brands fa-discord"
  
  },
    {
      title: "Redux Gorest F",
      href: "/form1",
      icon:"fa-brands fa-discord"
    
    },
    {
      title: "Redux Gorest T",
      href: "/table1",
      icon:"fa-brands fa-slack"
    },
    {
      title: "User Fb F",
      href: "/form2",
      icon:"fa-brands fa-wordpress"
    },
    {
      title: "User Fb T",
      href: "/table2",
      icon:"fa-solid fa-mug-hot",
    },
    {
      title: "Nor Fb Ls F",
      href: "/form3",
      icon:"fa-brands fa-docker",
    },
   
    {
      title: "Nor Fb Ls T",
      href: "/table3",
      icon:"fa-brands fa-dropbox",
    },
    {
      title: "Profile",
      href: "/profile",
      icon:"bi bi-patch-check",
    },

];
let login = [
  {
    title: "Login",
    href: "/login",
    icon: "bi bi-person-vcard",
  },
  {
    title: "Register",
    href: "/register",
    icon: "bi bi-person-fill",
  },
  // {
  //   title: "Logout",
  //   href: "/logout",
  //   icon: "bi bi-box-arrow-right",
  // }
];
const Sidebar = () => {
  const showMobilemenu = () => {
    document.getElementById("sidebarArea").classList.toggle("showSidebar");
  };
  let location = useLocation();
  let navigate = useNavigate();
  let { log, setLog } = useContext(context);

  return (
    <div className="bg-dark">
      <div className="d-flex">
        <Button
          color="white"
          className="ms-auto text-white d-lg-none"
          onClick={() => showMobilemenu()}
        >
          <i className="bi bi-x"></i>
        </Button>
      </div>
      <div className="p-3 mt-2">
        <Nav vertical className="sidebarNav">
          {
            !(localStorage.getItem('loginObj')) ?

              login.map((navi, index) => (
                <NavItem key={index} className="sidenav-bg">
                  <Link
                    to={navi.href}
                    className={
                      location.pathname === navi.href
                        ? "active nav-link py-3"
                        : "nav-link py-3"
                    }
                  >
                    <i className={navi.icon}></i>
                    <span className="ms-3 d-inline-block">{navi.title}</span>
                  </Link>
                </NavItem>
              ))

              :

              navigation.map((navi, index) => (
                <>

                  <NavItem key={index} className="sidenav-bg">
                    <Link
                      to={navi.href}
                      className={
                        location.pathname === navi.href
                          ? "active nav-link py-3"
                          : "nav-link py-3"
                      }
                    >
                      <i className={navi.icon}></i>
                      <span className="ms-3 d-inline-block">{navi.title}</span>
                    </Link>
                  </NavItem>

                </>
              ))

          }

          <NavItem className="sidenav-bg">
            <Link to='/register' className="nav-link py-3" onClick={() => {
              setLog(localStorage.removeItem('loginObj'));
              navigate('/login');
            }}>
              <i className="bi bi-box-arrow-right"></i>
              <span className="ms-3 d-inline-block">Logout</span>
            </Link>
          </NavItem>


          {/* <Button
            color="danger"
            tag="a"
            target="_blank"
            className="mt-3"
            href="https://www.wrappixel.com/templates/adminpro-react-redux-admin/?ref=33"
          >
            Upgrade To Pro
          </Button> */}
        </Nav>
      </div>
    </div>
  );
};

export default Sidebar;
