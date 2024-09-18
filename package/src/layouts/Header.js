import React from "react";
import { Link } from "react-router-dom";
import {
  Navbar,
  Collapse,
  Nav,
  NavItem,
  NavbarBrand,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Dropdown,
  Button,
} from "reactstrap";
import Logo from "./Logo";
import { FaHome } from "react-icons/fa";
import { IoMdContact } from "react-icons/io";
import { BsActivity } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { IoMdLogOut } from "react-icons/io";
import { ReactComponent as LogoWhite } from "../assets/images/logos/Mainprofile.svg";
import user1 from "../assets/images/logos/Logout.svg";
import user2 from "./Screenshot 2024-07-15 090418.png";


const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const [dropdownOpen, setDropdownOpen] = React.useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);
  const Handletoggle = () => {
    setIsOpen(!isOpen);
  };
  const showMobilemenu = () => {
    document.getElementById("sidebarArea").classList.toggle("showSidebar");
  };

  return (
    <Navbar color="white" light expand="md" className="fix-header">
      <div className="d-flex align-items-center">
        <div className="d-lg-block d-none me-5 pe-3">
          {/* <Logo /> */}
          <img
              src={user2}
              alt="profile"
              className="rounded-circle"
              height="60"
              width="200"
            ></img>
        
        </div>
        <NavbarBrand href="/">
          <LogoWhite className="d-lg-none" />
        </NavbarBrand>
        <Button
          color="primary"
          className=" d-lg-none"
          onClick={() => showMobilemenu()}
        >
          <i className="bi bi-list"></i>
        </Button>
      </div>
      <div className="hstack gap-2">
        <Button
          color="primary"
          size="sm"
          className="d-sm-block d-md-none"
          onClick={Handletoggle}
        >
          {isOpen ? (
            <i className="bi bi-x"></i>
          ) : (
            <i className="bi bi-three-dots-vertical"></i>
          )}
        </Button>
      </div>

      <Collapse navbar isOpen={isOpen}>
        <Nav className="mx-auto me-5" navbar>
          <NavItem>
            <Link to="/" className="nav-link">
            <FaHome /> Home
            </Link>
          </NavItem>
          <NavItem>
            <Link to="/profile" className="nav-link">
            <CgProfile /> profile
            </Link>
          </NavItem>
          <NavItem>
            <Link to="/Pricing" className="nav-link">
            <BsActivity />  Plan&Pricing
            </Link>
          </NavItem>
          <NavItem>
            <Link to="/About" className="nav-link ">
            <IoMdContact />About
            </Link>
          </NavItem>
          
          {/* <UncontrolledDropdown inNavbar nav>
            <DropdownToggle caret nav>
              DD Menu
            </DropdownToggle>
            <DropdownMenu end>
              <DropdownItem>Option 1</DropdownItem>
              <DropdownItem>Option 2</DropdownItem>
              <DropdownItem divider />
              <DropdownItem>Reset</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown> */}
        </Nav>
        {/* <Dropdown isOpen={dropdownOpen} toggle={toggle}>
          <DropdownToggle color="transparent">
            <img
              src={user1}
              alt="profile"
              className="rounded-circle"
              width="30"
            ></img>
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem header>Info</DropdownItem>
            <DropdownItem>My Account</DropdownItem>
            <DropdownItem>Edit Profile</DropdownItem>
            <DropdownItem divider />
            <DropdownItem>My Balance</DropdownItem>
            <DropdownItem>Inbox</DropdownItem>
            <DropdownItem><IoMdLogOut />  Logout</DropdownItem>
          </DropdownMenu>
        </Dropdown> */}
      </Collapse>
    </Navbar>
  );
};

export default Header;
