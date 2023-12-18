import { Link, Outlet } from "react-router-dom";
import Footer from "../../footer/Footer";
import Nav from "../../nav/Nav";
import './main.css'
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../../toolkit/reducers/ReducerUsers";

function Main(){
  const dispatch = useDispatch()
  const users = useSelector(state => state.users)
  const onlineUser = users.filter(user=> user.online===true)
  let id = onlineUser[0]?.id 
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
const {t}=useTranslation();
    return(
        <>
        <Nav/>
        <div className="main row p-0 m-0">
        <div className="col-sm-12 col-lg-2">
            <div className="mx-auto side">
            <h3 className="py-5 mb-5 ps-3">{t("admindashBoardMainTitle")}</h3>
            <div className="py-3 ps-3 dashitems">
                <Link className="header" to={'/dashboard/users'}>{t("admindashBoardUsers")}</Link>
                <Link to={'/dashboard/users'}>{t("admindashBoardAllUsers")}</Link>
                <Link to={'/dashboard/adduser'}>{t("admindashBoardAddNewUser")}</Link>
                <Link className="header" to={'/dashboard/blogs'}>{t("admindashBoardBlogs")}</Link>
                <Link to={'/dashboard/blogs'}>{t("admindashBoardAllBlogs")}</Link>
                <Link to={'/dashboard/addblog'}>{t("admindashBoardAddNewBlog")}</Link>
                <Link className="header" to={'/dashboard/services'}>{t("admindashBoardServices")}</Link>
                <Link>{t("admindashBoardUnread")}</Link>
                <Link>{t("admindashBoardOngoing")}</Link>
                <Link to={'/dashboard/services'}>{t("admindashBoardAllServices")}</Link>
                <Link className="header">{t("admindashBoardAnalytics")}</Link>
                <Link className="header" to={"/dashboard/sitting"}>{t("admindashBoardSettings")}</Link>
            </div>
            <div className="py-3 logout">
                <Link onClick={()=> dispatch(logOut(id))} className="mx-auto">{t("admindashBoardLogout")}</Link>
            </div>
            </div>
            <div className="dropside col-12">
                <div className="links d-flex justify-content-around mt-3">
                <Link className="header" to={'/dashboard/users'} onClick={()=>handleShowDropdown("user")}>{t("admindashBoardUsers")}</Link>
                <Link className="header" to={'/dashboard/blogs'} onClick={()=>handleShowDropdown("blog")}>{t("admindashBoardBlogs")}</Link>
                <Link className="header" to={'/dashboard/services'} onClick={()=>handleShowDropdown("service")}>{t("admindashBoardServices")}</Link>
                <Link className="header">{t("admindashBoardAnalytics")}</Link>
                <Link className="header">{t("admindashBoardSettings")}</Link>
                </div>
              <div className="mt-4 row">
                {
              userDropdown ?( <div className="dropdown">
              <button class="btn btn-secondary dropdown-toggle col-12" type="button" id="dropdownMenuButton" data-bs-toggle='dropdown' aria-haspopup="true" aria-expanded="false">
              {t("admindashBoardUsers")}
              </button>
              <ul class="dropdown-menu col-12" aria-labelledby="dropdownMenuButton">
                <li ><Link className='dropdown-item text-dark' to="/dashboard/users">all users</Link></li>
                <li><Link className='dropdown-item text-dark' to="/dashboard/adduser">add user</Link></li>
              </ul>
            </div>):''
            }
                {
              serviceDropdown ?( <div className="dropdown">
              <button className="btn btn-secondary dropdown-toggle col-12" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              {t("admindashBoardServices")}
              </button>
              <ul className='dropdown-menu col-12'>
                <li ><Link className='dropdown-item text-dark' to="/dashboard/services">all services</Link></li>
                <li ><Link className='dropdown-item text-dark' to="">unread</Link></li>
                <li ><Link className='dropdown-item text-dark' to="">ongoing</Link></li>
              </ul>
            </div>):''
            }
                {
              blogDropdown ?( <div className="dropdown">
              <button className="btn btn-secondary dropdown-toggle col-12" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                {t("admindashBoardBlogs")}
              </button>
              <ul className='dropdown-menu col-12'>
                <li ><Link className='dropdown-item text-dark' to="/dashboard/blogs">all blogs</Link></li>
                <li><Link className='dropdown-item text-dark' to="/dashboard/addblog">add blog</Link></li>
              </ul>
            </div>):''
            }
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-lg-9">
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