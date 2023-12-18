import {
    Route,
    createBrowserRouter,
    createRoutesFromElements,
  } from "react-router-dom";
import Layout from "../Layout/Layout";
import Homepage from "../Homepage/Home";
import Aboutpage from "../About/About";
import Services from "../Services/Services";
import Blogs from "../Blogs/Blog";
import Contactus from "../Contactuspage/Contact";
import Layoutdashboard from "../Layout/Layoutdashboard";
// import Users from "../Dashboardadmin/Users/users";




const router = createBrowserRouter(
    createRoutesFromElements(
        <>
        {/* <Route path="/" element={<Layout/>}>
            <Route index element={<Homepage/>}/>
            <Route path="about" element={<Aboutpage/>}/>
            <Route path="services" element={<Services/>}/>
            <Route path="blogs" element={<Blogs/>}/>
            <Route path="contactus" element={<Contactus/>}/>
        </Route>
        <Route path="/dashbodrd" element={<Layoutdashboard/>}> */}
        {/* <Route index element={<Users/>}/> */}
        {/* </Route> */}
        <Route path="/home" element={<Layout/>}>
            <Route index element={<Homepage/>}/>
            <Route path="about" element={<Aboutpage/>}/>
            <Route path="services" element={<Servicess/>}/>
            <Route path="blogs" element={<Blogss/>}/>
            <Route path="contactUs" element={<Contactus/>}/>
            <Route path="login" element={<Login/>}/>
            <Route path="register" element={<SignUp/>}/>
        </Route>
        </>
    )
);
export default router;