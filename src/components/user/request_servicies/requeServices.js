
import 'font-awesome/css/font-awesome.min.css';
import upload from '../../../assets/Vector.png'
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function RequestServ(){
    const {t}=useTranslation()
    return(<div className="blogs pb-3">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/solid.css"></link>
    <div className="row p-0 m-0 p-4">
        <h3 className="col-12 m-0">{t("addNewblogMainTitle")}</h3>
    </div>
    <hr/>
    <form>
    <div className='blog-form p-4 my-5 mx-auto  '>
        <div className='row'>
        <div className='col-sm-12 col-md-6'>
        <p>{t("labelTitle")}</p>
        <input type='email' className='w-100' placeholder={t("titlePlaceHolderValue")}></input>
        </div>
        <div className='col-sm-12 col-md-6'>
        <p>{t("labelTags")}</p>
        <input type='text' className='w-100' placeholder={t("tagsPlaceHolderValue")}></input>
        </div>
        <div className='col-sm-12 col-md-6'>
        <p >{t("labelUploadPhoto")} ...file..paper</p>
        <div className='upload'>
            <img src={upload} className='d-block mx-auto'></img>
        </div>
        </div>
        <div className='col-sm-12 col-md-6'>
        <p >{t("labelCategories")}</p>
        <input type='text' className='w-100'  placeholder={t("blogCategoriesPlaceHolderValue")}></input>
        </div>
        <div className='col-12'>
            <p>{t("labelWriteDownYourBlog")}..discription</p>
            <textarea placeholder={t("blogBodyPlaceHolderValue")} className='w-100'></textarea>
        </div>
        </div>
        <div className='text-center'>
        <button className=' create px-5 py-2 mt-5 mx-auto'>{t("publish")}</button>
        </div>
        
       
    </div>
    </form>
    </div>
    )
}
export default RequestServ;