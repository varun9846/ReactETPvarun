import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="links">
        <div className="linkcont">
        <div className="llc"> <Link to="/">Home</Link> </div>
        <div className="llc"><Link to="/Contact">Contact</Link> </div>
        <div className="llc"><Link to="/Inc">Increement/decreement</Link> </div>
        <div className="llc"><Link to="/ColorSub">Color and submit button-12</Link></div>
        <div className="llc"><Link to="/Movielist">Movieslist11</Link></div>
        <div className="llc"><Link to="/Mylogin">Login Form</Link></div>
        <div className="llc"><Link to="/FormV">Form-validation</Link></div>
        <div className="llc"><Link to="/Recordkeep">Recordkeep</Link></div>



        </div>
      </div>
    </div>
  );
};

export default Navbar;
