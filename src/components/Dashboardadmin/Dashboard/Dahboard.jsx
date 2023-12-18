import { Link, Outlet } from "react-router-dom";
import Footer from "../../footer/Footer";
import { useState } from "react";
import "./Dashboardamin.css"


function Main(){
    const [userDropdown ,setuserDropdown] = useState(true)
const [serviceDropdown ,setserviceDropdown] = useState(false)
const [blogDropdown ,setblogDropdown] = useState(false)
const handleShowDropdown = (drop)=>{
    switch (drop) {
      case 'user':
          setuserDropdown(true)
          setserviceDropdown(false)
          setblogDropdown(false)
        break;
      case 'blog':
          setuserDropdown(false)
          setserviceDropdown(false)
          setblogDropdown(true)
        break;
      case 'service':
          setuserDropdown(false)
          setserviceDropdown(true)
          setblogDropdown(false)
        break;
        default:
            break;
    }
}
    return(
        <>
        <div className="main row flex-wrap p-0 m-0">
        <div className="col-sm-12 col-md-2">
            <div className="mx-auto side">
            <h3 className="py-5 mb-5 ps-3">Dashboard</h3>
            <div className="py-3 ps-3 dashitems">
                <Link className="header" to={'/users'}>users</Link>
                <Link to={'/users'}>all users</Link>
                <Link to={'/adduser'}>add new</Link>
                <Link className="header" to={'/blogs'}>blogs</Link>
                <Link to={'/blogs'}>all blogs</Link>
                <Link to={'/addblog'}>add new</Link>
                <Link className="header" to={'/services'}>services</Link>
                <Link>unread</Link>
                <Link>ongoing</Link>
                <Link to={'/services'}>all services</Link>
                <Link className="header">analytics</Link>
                <Link className="header">settings</Link>
            </div>
            <div className="py-3 logout">
                <Link className="mx-auto">Logout</Link>
            </div>
            </div>
            <div className="dropside col-12">
                <div className="links d-flex justify-content-aroun  mt-3">
                <Link className="header" to={'/users'} onClick={()=>handleShowDropdown("user")}>users</Link>
                <Link className="header" to={'/blogs'} onClick={()=>handleShowDropdown("blog")}>blogs</Link>
                <Link className="header" to={'/services'} onClick={()=>handleShowDropdown("service")}>services</Link>
                <Link className="header">analytics</Link>
                <Link className="header">settings</Link>
                </div>
                <div className="mt-4 row">
                {
              userDropdown ?( <div className="dropdown">
              <button className="btn btn-secondary dropdown-toggle col-12" type="button" id="dropdownMenuButton" data-bs-toggle='dropdown' aria-haspopup="true" aria-expanded="false">
                users
              </button>
              <ul className="dropdown-menu col-12" aria-labelledby="dropdownMenuButton">
                <li ><Link className='dropdown-item text-dark' to="/users">all users</Link></li>
                <li><Link className='dropdown-item text-dark' to="/adduser">add user</Link></li>
              </ul>
            </div>):''
            }
                {
              serviceDropdown ?( <div className="dropdown">
              <button className="btn btn-secondary dropdown-toggle col-12" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                services
              </button>
              <ul className='dropdown-menu col-12'>
                <li ><Link className='dropdown-item text-dark' to="/services">all services</Link></li>
                <li ><Link className='dropdown-item text-dark' to="">unread</Link></li>
                <li ><Link className='dropdown-item text-dark' to="">ongoing</Link></li>
              </ul>
            </div>):''
            }
                {
              blogDropdown ?( <div className="dropdown">
              <button className="btn btn-secondary dropdown-toggle col-12" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                blogs
              </button>
              <ul className='dropdown-menu col-12'>
                <li ><Link className='dropdown-item text-dark' to="/blogs">all blogs</Link></li>
                <li><Link className='dropdown-item text-dark' to="/addblog">add blog</Link></li>
              </ul>
            </div>):''
            }
                </div>
            </div>
        </div>
        <div className="col-sm-12 col-lg-12 col-xxl-9">
            {/* <Services/> */}
            {/* <Users/> */}
            {/* <Blogs/> */}
            {/* <Adduser/> */}
            {/* <Addblog/> */}
            <Outlet/>
        </div>
        </div>
        <Footer/>
        </>
    )
}
export default Main;