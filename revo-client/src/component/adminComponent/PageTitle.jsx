import React from 'react'
import {Link} from 'react-router-dom'

export const PageTitle = ({title}) => {
    return (
        <div className="pagetitle">
            <h1 className="text-warning">{title}</h1>
            <nav>
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link
                        to="/admin" className="text-warning">dashboard</Link>
                    </li>
                    <li className="breadcrumb-item text-warning">{title}</li>
                </ol>
            </nav>
        </div>
    )
}