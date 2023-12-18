import { Outlet } from "react-router-dom";
import Nav from "../nav/Nav";
import Main from "../Dashboardadmin/Dashboard/Dahboard";


function Layoutdashboard() {
  
    return ( <>
    <Nav/>
    <Main/>
    <Outlet/>
    </> );
}

export default Layoutdashboard;