import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faSquareFacebook, faTwitter, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
import './footer.css'
import { useTranslation } from 'react-i18next';

function Footer(){
    const {t} = useTranslation("nav")
    return(
        <div className="text-center footer px-5 mt-4 py-3">
        <h1 className="text-light p-3">Tax Hub</h1>
        <div className='line'></div>
        <div className='py-3 items'>
            <Link className='mx-2 navlink' >{t("home")}</Link>
            <Link className='mx-2 navlink' >{t("about")}</Link>
            <Link className='mx-2 navlink' >{t("services")}</Link>
            <Link className='mx-2 navlink' >{t("blogs")}</Link>
            <Link className='mx-2 navlink' >{t("contact us")}</Link>
        </div>
        <div className='line'></div>
        <div>
        <FontAwesomeIcon icon={faTwitter} className="text-light p-3"/>
        <FontAwesomeIcon icon={faSquareFacebook}  className="text-light p-3"/>
        <FontAwesomeIcon icon={faLinkedin} className='text-light p-3'/>
        </div>
        </div>
    )
}
export default Footer;