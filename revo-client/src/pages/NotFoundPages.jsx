import React from "react";
import {Link} from "react-router-dom";

export const NotFoundPages = () => {
    return(
        <div>
            <h1>not found page</h1>
            <Link to={"/"}>get back menyu</Link>
        </div>
    )
}