import React, {useEffect, useState} from "react";
import {embeddedGet} from "../../../../base/service/service";
import {Link, useLocation, useNavigate} from 'react-router-dom'
import {userRegister} from "../../../../base/service/authService";
import {PageTitle} from "../../../../component/adminComponent/PageTitle";
import {Loader} from "../../../../component/umumiyComponents/Loader";

export const UserRegister = () => {
    const location = useLocation().pathname
    const [loading, setLoading] = useState(false)
    const getAll = async () => {
        try {
            await embeddedGet('role', setRoleData, 'data')
            setLoading(true)
        } catch (err) {
        }
    }

    useEffect(() => {
        getAll()
    }, [])
    const [roleData, setRoleData] = useState([])
    const navigate = useNavigate()


    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [prePassword, setPrePassword] = useState('')
    const [roleId1, setRoleId] = useState('')


    const createUser = async (e) => {
        e.preventDefault()
        let data = {}
        let roleId;
        let status;
        if (location === "/admin/users/register") {
            roleId = parseInt(roleId1)
            data = {
                firstName,
                lastName,
                phoneNumber,
                email,
                password,
                prePassword,
                roleId
            }
            status = "employee"
        } else if (location === "/admin/users/register/online") {
            roleId = 6
            data = {
                firstName,
                lastName,
                phoneNumber,
                email,
                password,
                prePassword,
                roleId
            }
            status = "user"
        }
        await userRegister(data, navigate, status)
    }
    return (
        <>
            {loading ? (
                <>
                    <div className="card">
                        <div className="card-header pb-0">
                            <div className='d-flex align-items-center justify-content-between'>
                                <PageTitle
                                    title={`user register`}/>
                                <Link to={"/admin/users"}
                                      className='btn btn-warning text-light'>
                                    orqaga
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="container d-flex align-items-center justify-content-center">
                        <div className="col-12 d-flex align-items-start justify-content-center"
                             style={{height: '110vh'}}>
                            <div className="w-100">
                                <form onSubmit={createUser}>
                                    <div>
                                        <label htmlFor="firstName"
                                               className='card-title text-warning text-warning m-0'>Userning ismini
                                            kiriting
                                        </label>
                                        <input type="text" className="form-control1" id="firstName"
                                               placeholder='Masalan: shirinliklar'
                                               value={firstName} onChange={e => setFirstName(e.target.value)}/>

                                        <label htmlFor="lastName"
                                               className='card-title text-warning m-0'>Userning familiyasini kiriting
                                        </label>
                                        <input type="text" className="form-control1" id="lastName"
                                               placeholder='For example: lastName'
                                               value={lastName} onChange={e => setLastName(e.target.value)}/>

                                        <label htmlFor="phoneNumber"
                                               className='card-title text-warning m-0'>Userning tel raqqamini kiriting
                                        </label>
                                        <input type="number" className="form-control1" id="phoneNumber"
                                               placeholder='Например: shirinliklar'
                                               value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)}/>

                                        <label htmlFor="email"
                                               className='card-title text-warning m-0'>Userning emailini nomlanishini
                                        </label>
                                        <input type="email" className="form-control1" id="email"
                                               placeholder='Например: email'
                                               value={email} onChange={e => setEmail(e.target.value)}/>

                                        <label htmlFor="password"
                                               className='card-title text-warning m-0'>Userning parolini kiriting
                                        </label>
                                        <input type="text" className="form-control1" id="password"
                                               placeholder='Например: password'
                                               value={password} onChange={e => setPassword(e.target.value)}/>

                                        <label htmlFor="prePassword"
                                               className='card-title text-warning m-0'>parolni tasdiqlash
                                        </label>
                                        <input type="text" className="form-control1" id="prePassword"
                                               placeholder='Например: prePassword'
                                               value={prePassword} onChange={e => setPrePassword(e.target.value)}/>

                                        {
                                            location === "/admin/users/register" ? (
                                                <>
                                                    <label htmlFor="roleId"
                                                           className='card-title text-warning m-0'>rolni tanlang
                                                    </label>
                                                    <select name="roleId" id="roleId" value={roleId1}
                                                            onChange={e => setRoleId(e.target.value)}
                                                            className="form-control1 text-lowercase">
                                                        <option value="null" className="text-warning">tanlang</option>
                                                        {roleData.map(item => (
                                                            item.roleName === "SUPER_ADMIN" || item.roleName === "USER" ? (
                                                                <></>
                                                            ) : (
                                                                <option value={item.id}>{item.roleName}</option>
                                                            )
                                                        ))}
                                                    </select>
                                                </>
                                            ) : (
                                                <></>
                                            )
                                        }
                                    </div>
                                    <button className='btn mt-4 btn-warning text-light d-block'>
                                        <i className='fas fa-plus-circle me-2'/>
                                        Qo'shish
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </>
            ) : (
                <>
                    <Loader/>
                </>
            )}
        </>
    )
}