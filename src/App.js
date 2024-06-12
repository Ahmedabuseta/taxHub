import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Main from './components/admin/mainAdmin/Main';
import Mainuser from './components/user/mainUser/Mainuser';
import Allservices from './components/user/allservices/Allservices';
import Perpapers from './components/user/perpapers/Perpapers';
import Compapers from './components/user/compapers/Compapers';
import Blogs from './components/admin/blogs/Blogs';
import Addblog from './components/admin/blogs/Addblog';
import Services from './components/admin/services/Services';
import Users from './components/admin/users/users';
import Adduser from './components/admin/users/adduser';

import Layout from "./components/Layout/Layout";
import Aboutpage from "./components/About/About";
import Contactus from "./components/Contactuspage/Contact";
import Layoutdashboard from "./components/Layout/Layoutdashboard";
import Homepage from './components/Homepage/Home';
import Blogss from './components/Blogs/Blog';
import Servicess from './components/Services/Services';
import Login from './components/login/login';
import SignUp from './components/register/page';
import Profile from './components/profile/profile';
import Chat from './components/chat/chat';
import { useSelector } from 'react-redux';
import Projectblog from './components/Projectblog/Projectblog';
import RequestServ from './components/user/request_servicies/requeServices';

function App() {
  const users = useSelector(state => state.users)
  const onlineUser = users.filter(user=> user.online===true)
  console.log(onlineUser);
  let role = onlineUser[0]?.role 
  console.log(role === 'admin')
  return (
    <>
          <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="/home" element={<Homepage />} />
          <Route path="about" element={<Aboutpage />} />
          <Route path="services" element={<Servicess />} />
          <Route path="blogss" element={<Blogss />} />
          <Route path="contactUs" element={<Contactus />} />
          <Route path='blog' element={<Projectblog/>}/>
        </Route>

        {role === "admin" && <Route path="/dashboard" element={<Main />}>
          <Route path="blogs" element={<Blogs />} />
          <Route path="addblog" element={<Addblog />} />
          <Route path="services" element={<Services />} />
          <Route path="users" element={<Users />} />
          <Route path="adduser" element={<Adduser />} />
          <Route path="sitting" element={<Profile/>} />
          <Route path="chat" element={<Chat/>} />
        </Route>}

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<SignUp />} />

        { role === 'user' && <Route path="/dashboard" element={<Mainuser />}>
          <Route path="services" element={<Allservices />} />
          <Route path="perpapers" element={<Perpapers />} />
          <Route path="compapers" element={<Compapers />} />
          <Route path="sitting" element={<Profile/>} />
          <Route path="chat" element={<Chat/>} />
          <Route path='requestServ' element={<RequestServ/>}/>
        </Route>}

        <Route path='*' element={<Login />}/>

      </Routes>
    </BrowserRouter>

    </>
  );
}

export default App;
