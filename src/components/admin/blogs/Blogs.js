import './blogs.css'
import 'font-awesome/css/font-awesome.min.css';
import img from '../../../assets/Blogs Featured Image.png'
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
function Blogs(){
    const {t}=useTranslation()
    return(
        <div className="blogs">
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/solid.css"></link>
            <div className="row p-0 m-0 p-4">
                <h3 className="col-6 m-0">{t("allblogsMainTitle")}</h3>
                <div className="col-sm-12 col-md-6 d-flex justify-content-between p-0 m-0">
                    <input placeholder="&#xf0dc; Sort by" className='col-4' style={{"font-family":"FontAwesome"}}></input>
                    <input placeholder="&#xf002; Search list.." className='col-7' style={{"font-family":"FontAwesome"}}></input>
                </div>
            </div>
            <hr/>
            <div className=' p-3 row g-2 w-100 blogparent p-md-5'>
                <div className='col blog'>
                    <img src={img} className='d-block mx-auto'></img>
                    <h5>{t("allblogssubTitle")}</h5>
                    <p>{t("blogsBody")}</p>
                    <div className='d-flex justify-content-between  mb-2' style={{padding:"15px"}}>
                        <Link className='read'>{t("blogsReadMore")}</Link>
                        <div>
                            <button className='edit mx-2'>{t("blogEdit")}</button>
                            <button className='delete'>{t("blogDelete")}</button>
                        </div>
                    </div>
                </div>
                <div className='col blog'>
                    <img src={img} className='d-block mx-auto'></img>
                    <h5>Lorem ipsum dolor sit amet</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod tempor incididunt
                    ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in volu</p>
                    <div className='d-flex justify-content-between  mb-2' style={{padding:"15px"}}>
                        <Link className='read'>Read more</Link>
                        <div>
                            <button className='edit mx-2'>edit</button>
                            <button className='delete'>delete</button>
                        </div>
                    </div>
                </div>
                <div className='col blog'>
                    <img src={img} className='d-block mx-auto'></img>
                    <h5>Lorem ipsum dolor sit amet</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod tempor incididunt
                    ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in volu</p>
                    <div className='d-flex justify-content-between  mb-2' style={{padding:"15px"}}>
                        <Link className='read'>Read more</Link>
                        <div>
                            <button className='edit mx-2'>edit</button>
                            <button className='delete'>delete</button>
                        </div>
                    </div>
                </div>
                <div className='col blog'>
                    <img src={img} className='d-block mx-auto'></img>
                    <h5>Lorem ipsum dolor sit amet</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod tempor incididunt
                    ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in volu</p>
                    <div className='d-flex justify-content-between  mb-2' style={{padding:"15px"}}>
                        <Link className='read'>Read more</Link>
                        <div>
                            <button className='edit mx-2'>edit</button>
                            <button className='delete'>delete</button>
                        </div>
                    </div>
                </div>
                <div className='col blog'>
                    <img src={img} className='d-block mx-auto'></img>
                    <h5>Lorem ipsum dolor sit amet</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod tempor incididunt
                    ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in volu</p>
                    <div className='d-flex justify-content-between  mb-2' style={{padding:"15px"}}>
                        <Link className='read'>Read more</Link>
                        <div>
                            <button className='edit mx-2'>edit</button>
                            <button className='delete'>delete</button>
                        </div>
                    </div>
                </div>
                <div className='col blog'>
                    <img src={img} className='d-block mx-auto'></img>
                    <h5>Lorem ipsum dolor sit amet</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod tempor incididunt
                    ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in volu</p>
                    <div className='d-flex justify-content-between mb-2' style={{padding:"15px"}}>
                        <Link className='read'>Read more</Link>
                        <div>
                            <button className='edit mx-2'>edit</button>
                            <button className='delete'>delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Blogs;