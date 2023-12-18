import './page.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

function SignUp() {
    const { t } = useTranslation("Signu");

    return (
        <>
        <Nav/>
            <div className="p-5 text-center">
                <h2 className="h2-login mb-3" style={{color: "cornflowerblue "}}>{t('SignUp')}</h2>
            </div>

            <div className="container form-contact" style={{maxWidth: '600px'}}>
                <form>
                    <div className="d-flex container-lg p-3 flex-row g-3 row flex-wrap">
                        <div className="col-xs-12 col-md-6">
                            <label className="" htmlFor="first-name">{t('FirstName')}</label>
                            <input type="text" className="input w-100 form-control" id="first-name"/>
                        </div>
                        <div className="col-xs-12 col-md-6 gy-3">
                            <label className="" htmlFor="last-name">{t('LastName')}</label>
                            <input type="text" className="input w-100 form-control" id="last-name"/>
                        </div>
                    </div>

                    <div className="col-xs-12 row g-0 p-3 pe-4">
                        <label className="" htmlFor="email">{t('EmailAddress')}</label>
                        <input type="email" className="input w-10 form-control" id="email"/>
                    </div>

                    <div className="d-flex flex-row gx-3 row p-3 w-100 flex-wrap">
                        <div className="col-xs-12 col-md-6">
                            <label className="" htmlFor="password">{t('Password')}</label>
                            <input type="password" className="input w-100 form-control" id="password"/>
                        </div>

                        <div className="col-xs-12 col-md-6">
                            <label className="" htmlFor="confirm-Password">{t('ConfirmPassword')}</label>
                            <input type="password" className="input w-100 form-control" id="confirm-Password"/>
                        </div>
                        
                    </div>
                    <div className="col-xs-12 row g-0 p-3 pe-4">
                            <label className="" htmlFor="upload">{t('upload personal photo')}</label>
                            <input type="file" className="input w-10 form-control" id="upload"/>
                    </div>
                    <small className="text-secondary" style={{fontSize: "18px", display: "block", marginBottom: "10px"}}>
                        {t('HaveAccount')} <Link to="/login">{t('Login')}</Link>
                    </small>
                    
                    <button type="submit" className="send-now btn btn-primary" id="submit">{t('Submit')}</button>
                </form> 
            </div>
        </>
    )
}

export default SignUp
