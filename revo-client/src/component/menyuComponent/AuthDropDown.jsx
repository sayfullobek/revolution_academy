import React from "react";
import {Link} from "react-router-dom";

export const AuthDropDown = () => {
    return(
        <div className="dropdown show">
            <a className="btn btn-warning dropdown-toggle" href="#" role="button" id="dropdownMenuLink"
               data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                contact
            </a>

            <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <Link to={"/auth/login"} className="dropdown-item">login</Link>
                <Link to={"/auth/contact"} className="dropdown-item">contacts</Link>
            </div>
        </div>
    )
}