import "./projectblog.css"
import image3 from"../images/hand.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import Footer from "../footer/Footer";
import { Link } from "react-router-dom";
function Projectblog() {
    return ( <>
     <div className="container">
    <h1 className="my-5 font_big">Lorem ipsum dolor sit amet</h1>
    <div className="pragrave ">
      <h3 className="mb-4 font_Philosopher">Lorem ipsum dolor sit amet</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna
        aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis
        aute irure dolor in reprehenderit in voluLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
        nisi ut
        aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluLorem ipsum dolor sit amet,
        consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis
        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
        reprehenderit in
        voluLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
        dolore magna
        aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis
        aute irure dolor in reprehenderit in volu</p>
    </div>
    <div className="pragrave ">
      <h3 className="mb-4 font_Philosopher">Lorem ipsum dolor sit amet</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna
        aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis
        aute irure dolor in reprehenderit in voluLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
        nisi ut
        aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluLorem ipsum dolor sit amet,
        consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis
        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
        reprehenderit in
        voluLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
        dolore magna
        aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis
        aute irure dolor in reprehenderit in volu</p>
    </div>
    <div className="my-5">
      <img src={image3} className="rounded img"/>
    </div>
    <div className="pragrave ">
      <h3 className="mb-4 font_Philosopher">Lorem ipsum dolor sit amet</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna
        aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat.
        Duis
        aute irure dolor in reprehenderit in voluLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
        nisi
        ut
        aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluLorem ipsum dolor sit amet,
        consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis
        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
        reprehenderit
        in
        voluLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
        dolore
        magna
        aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat.
        Duis
        aute irure dolor in reprehenderit in volu</p>
    </div>
    <div className="pragrave ">
      <h3 className="mb-4 font_Philosopher">Lorem ipsum dolor sit amet</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna
        aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis
        aute irure dolor in reprehenderit in voluLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
        nisi ut
        aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in volu</p>
    </div>
    <h2 className="my-5 font_big">Related Blogs</h2>
    <div className="row d-flex flex-row flex-wrap justify-content-between  mb-5">

    <div className="col-xs-12  col-sm-12 col-md-3 Blogs_border border border-primary rounded-lg p-4 ">
        <img src={image3} className="rounded img"/>
        <div className="pragrave ">
          <h5 className="my-4 font_Philosopher">Lorem ipsum dolor sit amet</h5>
          <p className="line_blog">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna
            aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in volu</p>
        </div>
        <Link to="/blog"><u>Raed more</u></Link>
      </div>
      <div className="col-xs-12  col-sm-12 col-md-3 Blogs_border border border-primary rounded-lg p-4 ">
        <img src={image3} className="rounded img"/>
        <div className="pragrave ">
          <h5 className="my-4 font_Philosopher">Lorem ipsum dolor sit amet</h5>
          <p className="line_blog">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna
            aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in volu</p>
        </div>
        <Link to="/blog"><u>Raed more</u></Link>
      </div>
      <div className="col-xs-12  col-sm-12 col-md-3 Blogs_border border border-primary rounded-lg p-4 ">
        <img src={image3} className="rounded img"/>
        <div className="pragrave ">
          <h5 className="my-4 font_Philosopher">Lorem ipsum dolor sit amet</h5>
          <p className="line_blog">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna
            aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in volu</p>
        </div>
        <Link to="/blog"><u>Raed more</u></Link>
      </div>
    </div>
    
    <div className="mb-5 text-right">
      <i className="pr-2">View All</i>
      <FontAwesomeIcon style={{color:"#000000"}} icon={faChevronRight} />
    </div> 
        </div> 
      <Footer/>
    </> 
    );
}

export default Projectblog;