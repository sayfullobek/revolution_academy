import React from "react";
import {Link} from "react-router-dom";

export const Cards = ({title, size, description, link}) => {
    return (
        <div className="card col-md-6">
            <h5 className="card-header">{title}</h5>
            <div className="card-body">
                <h5 className="card-title">{size}</h5>
                <p className="card-text">{description}.</p>
                <Link to={link} className="btn btn-primary">{title}</Link>
            </div>
        </div>
    )
}