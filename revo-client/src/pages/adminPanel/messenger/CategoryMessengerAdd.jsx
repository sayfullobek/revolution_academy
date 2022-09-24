import React, {useEffect, useState} from "react";
import {PageTitle} from "../../../component/adminComponent/PageTitle";
import {Link, useNavigate} from "react-router-dom";
import {embeddedGet, saveCaategoryAdd} from "../../../base/service/service";
import {Loader} from "../../../component/umumiyComponents/Loader";

export const CategoryMessengerAdd = () => {
    const [name, setName] = useState('')
    const [icons, setIcons] = useState('')
    const [iconList, setIconList] = useState([])
    const navigate = useNavigate()
    const userId = useState([])
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(false)

    const getUser = async () => {
        try {
            await embeddedGet("auth", setUsers, "data")
            await embeddedGet("icons", setIconList, "embedded")
            setLoading(true)
        } catch (err) {
        }
    }

    useEffect(() => {
        getUser()
    }, [])

    const saveControllerMessage = async (e) => {
        e.preventDefault()
        const iconId = icons
        userId[0] = ""
        userId[1] = ""
        userId.push(localStorage.getItem("id"))
        const data = {
            name,
            iconId,
            userId
        }
        console.log(userId)
        await saveCaategoryAdd("category/messenger", data, navigate)
    }

    const userChoise = (id) => {
        userId.push(id)
    }

    return (
        <>
            {loading ? (
                <div style={{height: '90vh'}}>
                    <div className="card">
                        <div className="card-header pb-0">
                            <div className='d-flex align-items-center justify-content-between'>
                                <PageTitle
                                    title={"messenger"}/>
                                <Link
                                    to={"/admin/messenger"}
                                    className='btn btn-warning text-light'>
                                    orqaga
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div>
                        <form onSubmit={saveControllerMessage}>
                            <label htmlFor="name"
                                   className='card-title text-warning text-warning m-0'>category nomini kiriting
                            </label>
                            <input type="text" className="form-control1" id="name"
                                   placeholder='Masalan: name'
                                   value={name} onChange={e => setName(e.target.value)}/>

                            <label htmlFor="icons"
                                   className='card-title text-warning text-warning m-0'>iconning nomini kiriting
                            </label>
                            <select name="icons"
                                    className="form-control1" id="icons"
                                    value={icons} onChange={e => setIcons(e.target.value)}>
                                <option value="null">tanlang</option>
                                {iconList.map(item => (
                                    <option value={item.id}>
                                        {item.uzName}
                                    </option>
                                ))}
                            </select>

                            <label htmlFor="user"
                                   className='card-title text-warning text-warning m-0'>userlarni tanlang
                            </label>
                            <div>
                                {users.map(item => (
                                    <>
                                        {item.phoneNumber === localStorage.getItem("phoneNumber") ? (
                                            <></>
                                        ) : (
                                            <>
                                                {item.roles.length > 4 ? (
                                                    <>
                                                        <label htmlFor={item.firstName + " " + item.phoneNumber}
                                                               className='card-title text-warning text-warning m-2'>{item.firstName}
                                                        </label>
                                                        <input type="checkbox" className="form-check-input"
                                                               onClick={() => userChoise(item.id)}
                                                               id={item.firstName + " " + item.phoneNumber}/>
                                                    </>
                                                ) : (item.roles.map(role => (
                                                        role.roleName === "USER" ? (
                                                            <></>
                                                        ) : (
                                                            <>
                                                                <label htmlFor={item.firstName + " " + item.phoneNumber}
                                                                       className='card-title text-warning text-warning m-2'>{item.firstName}
                                                                </label>
                                                                <input type="checkbox" className="form-check-input"
                                                                       onClick={() => userChoise(item.id)}
                                                                       id={item.firstName + " " + item.phoneNumber}/>
                                                            </>
                                                        )
                                                    )
                                                ))}
                                            </>
                                        )}
                                    </>
                                ))}
                            </div>
                            <div className="m-3">
                                <button className="btn btn-warning text-light">
                                    <i className='fas fa-plus-circle m-2'/>
                                    qo'shish
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            ) : (
                <>
                    <Loader/>
                </>
            )}
        </>
    )
}