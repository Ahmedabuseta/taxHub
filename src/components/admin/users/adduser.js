
import 'font-awesome/css/font-awesome.min.css';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
function Adduser(){

    const {t}=useTranslation()
    return(
    <div className="users pb-3">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/solid.css"></link>
    <div className="row p-0 m-0 p-4">
        <h3 className="col-12 m-0">{t("addNewUderMainTitle")}</h3>
    </div>
    <hr/>
    <form>
    <div className='user-form p-4 my-5 mx-auto  '>
        <div className='row'>
        <div className='col-12'>
        <p>{t("labelUserEmail")}</p>
        <input type='email' className='w-100' placeholder={t("uerEmailPlaceHolderValue")}></input>
        </div>
        <div className='col-12'>
        <p>{t("labelUserName")}</p>
        <input type='text' className='w-100' placeholder={t("userNamePlaceHolder")}></input>
        </div>
        <div className='col-sm-12 col-md-6'>
        <p >{t("labelPassword")}</p>
        <input type='password'  placeholder='******************'></input>
        </div>
        <div className='col-sm-12 col-md-6'>
        <p >{t("labelRepeatPassword")}</p>
        <input type='password'  placeholder='******************'></input>
        </div>
        </div>
        <button className='d-block create px-5 py-2 mt-5' >{t("createUser")}</button>
       
    </div>
    </form>
    </div>
    )
}
export default Adduser;
