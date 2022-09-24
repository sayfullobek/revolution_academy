import React from "react";
import { MDBSpinner } from 'mdb-react-ui-kit';


export const Loader = ()=>{
    return (
        <div className="col-12 d-flex align-items-center justify-content-center" style={{height:'100vh'}}>
            <MDBSpinner role='status'>
                <span className='visually-hidden'>Loading...</span>
            </MDBSpinner>
        </div>
    )
}