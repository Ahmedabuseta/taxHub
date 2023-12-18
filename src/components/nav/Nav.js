import { faBars, faGlobe, faUser ,faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import 'bootstrap/dist/css/bootstrap.css'
import '../user/mainUser/mainuser.css'
import './nav.css'
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../../toolkit/reducers/ReducerUsers';

 function Nav(){
    const {t, i18n}=useTranslation("nav")
    function change(option){
    i18n.changeLanguage(option.target.value)
}
    const lang=localStorage.getItem('lang')||'en';
    const dispatch = useDispatch()
    const users = useSelector(state => state.users)
    const onlineUser = users.filter(user=> user.online===true)
    let id = onlineUser[0]?.id 
    return(
        <nav  className=' navbar navbar-expand-lg navbar-light bg-light px-3'  >
            <div className=' container-fluid p-3'  style={{background:"none"}}>
              <Link class="navbar-brand" href="#"><h1>Tax Hub</h1></Link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                  <Link class="nav-link" to="/home">{t("home")}<span class="sr-only">(current)</span></Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to={'/about'}>{t("about")}</Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to={'/services'}>{t("services")}</Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to={'/blogss'}>{t("blogs")}</Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to={'/contactUs'}>{t("contact us")}</Link>
                </li>
              </ul>
              <form class="form-inline my-2 my-lg-0 ms-auto">
                <span className='mx-4'>

                  {onlineUser.length === 0 ?
                    <span>
                  <Link to={'/login'} >
                    Login
                  </Link>
                  <Link to={'/register'} className='mx-2'>
                    Register
                  </Link>
                  </span>
                  :<button 
                  className='btn bg-dark text-light dropside' 
                  onClick={()=>dispatch(logOut(id))}>logout
                  </button>}

                  <Link to='/dashboard' >
                  <FontAwesomeIcon icon={faUser} className='mx-2'/>
                  {/* <FontAwesomeIcon icon={faBars} /> */}
                  </Link>
                  
                  
                  
                  
                </span>
                  <FontAwesomeIcon icon={faGlobe} className='mr-sm-2'/>
                <select onChange={change} className='my-2 my-sm-0'>
                  <option value="en"> English</option>
                  <option value="ar">العربية</option>
                </select>
              </form>
            </div>
          </div>
        </nav>
)
}
export default Nav;