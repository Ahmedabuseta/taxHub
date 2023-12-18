import { Link, Outlet } from "react-router-dom";
import Footer from "../../footer/Footer";
import Nav from "../../nav/Nav";
import './mainuser.css'
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { logOut } from "../../../toolkit/reducers/ReducerUsers";
import { useDispatch, useSelector } from "react-redux";

function Mainuser(){
const [paperDropdown ,setpaperDropdown] = useState(true)
const [serviceDropdown ,setserviceDropdown] = useState(false)
const handleShowDropdown = (drop)=>{
    switch (drop) {
      case 'paper':
          setpaperDropdown(true)
          setserviceDropdown(false)
        break;
      case 'service':
          setpaperDropdown(false)
          setserviceDropdown(true)
        break;
        default:
            break;
    }
}
const {t}=useTranslation();
const dispatch = useDispatch()
const users = useSelector(state => state.users)
const onlineUser = users.filter(user=> user.online===true)
let id = onlineUser[0]?.id 
    return(
        <>
        <Nav/>
        <div className="main row p-0 m-0">
        <div className="col-sm-12 col-lg-2">
            <div className="mx-auto side">
            <h3 className="py-5 mb-5 ps-3">{t("userdashBoardMainTitle")}</h3>
            <div className="py-3 ps-3 dashitems">
                <Link className="header" to={'/dashboard/perpapers'}>{t("userdashBoardpapers")}</Link>
                <Link to={'/dashboard/perpapers'}>{t("userdashBoardPersonalPapers")}</Link>
                <Link to={'/dashboard/compapers'}>{t("userdashBoardCompanyPapers")}</Link>
                <Link className="header" to={'/dashboard/services'}>{t("userdashBoardServices")}</Link>
                <Link>{t("userdashBoardRequestNewService")}</Link>
                <Link>{t("userdashBoardOngoingServicesUser")}</Link>
                <Link to={'/dashboard/services'}>{t("userdashBoardAllServicesUser")}</Link>
                <Link className="header" to={"/dashboard/sitting"} >{t("userdashBoardSettings")}</Link>
            </div>
            <div className="py-3 logout">
                <Link onClick={()=>dispatch(logOut(id))} className="mx-auto">{t("userdashBoardLogout")}</Link>
            </div>
            </div>
            <div className="dropside">
            <div className="links d-flex justify-content-around mt-3">
                <Link className="header" to={'/dashboard/perpapers'} onClick={()=>handleShowDropdown("paper")}>papers</Link>
                <Link className="header" to={'/dashboard/services'} onClick={()=>handleShowDropdown("service")}>services</Link>
                <Link className="header" to={"/dashboard/sitting"}>settings</Link>
            </div>
            <div className="mt-4 row">
                {
              paperDropdown ?( <div className="dropdown">
              <button class="btn btn-secondary dropdown-toggle col-12" type="button" id="dropdownMenuButton" data-bs-toggle='dropdown' aria-haspopup="true" aria-expanded="false">
                papers
              </button>
              <ul class="dropdown-menu col-12" aria-labelledby="dropdownMenuButton">
                <li ><Link className='dropdown-item text-dark' to="/dashboard/perpapers">personal papers</Link></li>
                <li><Link className='dropdown-item text-dark' to="/dashboard/compapers">company papers</Link></li>
              </ul>
            </div>):''
            }
                {
              serviceDropdown ?( <div className="dropdown">
              <button class="btn btn-secondary dropdown-toggle col-12" type="button" id="dropdownMenuButton" data-bs-toggle='dropdown' aria-haspopup="true" aria-expanded="false">
                services
              </button>
              <ul class="dropdown-menu col-12" aria-labelledby="dropdownMenuButton">
                <li ><Link className='dropdown-item text-dark' to="">request new service</Link></li>
                <li ><Link className='dropdown-item text-dark' to="">ongoing</Link></li>
                <li><Link className='dropdown-item text-dark' to="/dashboard/services">all services</Link></li>
              </ul>
            </div>):''
            }
            </div>
            </div>
        </div>
        <div className="col-sm-12 col-lg-9">
            {/* <Allservices/> */}
            {/* <Perpapers/> */}
            {/* <Compapers/> */}
            <Outlet/>
        </div>
        </div>
        <Footer/>
        </>
    )
}
export default Mainuser;