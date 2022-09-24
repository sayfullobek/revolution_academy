import React, {useState} from "react";
import {PageTitle} from "../../../component/adminComponent/PageTitle";
import {Link, useNavigate} from "react-router-dom";
import {saveIcons} from "../../../base/service/service";

export const IconsSave = () => {
    const navigate = useNavigate()
    const [uzName, setUzName] = useState('')
    const [enName, setEnName] = useState('')
    const [ruName, setRuName] = useState('')
    const [iconName, setIconName] = useState('')

    const saveIcon = async (e) => {
        e.preventDefault()
        const data = {
            uzName,
            enName,
            ruName,
            iconName
        }
        await saveIcons("icons", data, navigate)
    }

    return (
        <div style={{height: '100vh'}}>
            <div className="card">
                <div className="card-header pb-0">
                    <div className='d-flex align-items-center justify-content-between'>
                        <PageTitle
                            title={"icons save"}/>
                        <Link
                            to={"/admin/icons"}
                            className='btn btn-warning text-light'>
                            orqaga
                        </Link>
                    </div>
                </div>
            </div>

            <div>
                <form onSubmit={saveIcon}>
                    <label htmlFor="uzName"
                           className='card-title text-warning text-warning m-0'>iconning O'zbekcha nomini kiriting
                    </label>
                    <input type="text" className="form-control1" id="uzName"
                           placeholder='Masalan: uzName'
                           value={uzName} onChange={e => setUzName(e.target.value)}/>

                    <label htmlFor="enName"
                           className='card-title text-warning text-warning m-0'>iconning Inglizcha nomini kiriting
                    </label>
                    <input type="text" className="form-control1" id="enName"
                           placeholder='Masalan: enName'
                           value={enName} onChange={e => setEnName(e.target.value)}/>

                    <label htmlFor="ruName"
                           className='card-title text-warning text-warning m-0'>iconning Ruscha nomini kiriting
                    </label>
                    <input type="text" className="form-control1" id="ruName"
                           placeholder='Masalan: ruName'
                           value={ruName} onChange={e => setRuName(e.target.value)}/>

                    <label htmlFor="iconName"
                           className='card-title text-warning text-warning m-0'>iconning linkini kiriting
                    </label>
                    <input type="text" className="form-control1" id="iconName"
                           placeholder='Masalan: https://iconName...'
                           value={iconName} onChange={e => setIconName(e.target.value)}/>
                    <div className="m-3">
                        <button className="btn btn-warning text-light">
                            <i className='fas fa-plus-circle m-2'/>
                            qo'shish
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}