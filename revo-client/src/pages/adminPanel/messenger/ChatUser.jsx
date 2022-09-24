import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {embeddedGet, getOne, sendMsg} from "../../../base/service/service";
import {Loader} from "../../../component/umumiyComponents/Loader";
import back from '../profile/backphone.jpg'
import {deleteModal} from "../../../base/DeleteModal";

export const ChatUser = () => {
    const id = useParams().id
    const [data, setData] = useState([])
    const [message, setMessage] = useState([])
    const [loading, setLoading] = useState(false)
    const getAll = async () => {
        try {
            await getOne('auth/', setData, id, "data")
            // await embeddedGet("message/getByUser/" + id, setMessage, "data")
            await embeddedGet("message", setMessage, "data")
            setLoading(true)
        } catch (err) {
        }
    }
    useEffect(() => {
        getAll()
    }, [])

    return (
        <>
            {loading ? (
                <div className="w-100 d-flex align-items-center justify-content-center" style={{height: '86vh'}}>
                    <div className="col-12 bg-warning"
                         style={{
                             height: '100%',
                             backgroundImage: `url(${back})`,
                             backgroundPosition: 'center',
                             backgroundSize: 'cover',
                             backgroundRepeat: 'no-repeat',
                         }}>
                        <div className="col-12 text-light" style={{
                            height: '84%',
                            overflow: 'auto',
                            padding: `${message.length === 1 ? 26 : message.length === 2 ? 19 : message.length === 3 ? 12 : message.length === 4 ? 5 : 1}rem 0 0 3rem`
                        }}>
                            <Msg message={message} id={data} getAll={getAll}/>
                        </div>
                        <div className="col-12" style={{height: '16%'}}>
                            <Message id={id} getAll={getAll}/>
                        </div>
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

const Message = (getAll) => {
    const userId = localStorage.getItem("id")
    const fromUserId = useState([])
    fromUserId[0] = ""
    fromUserId[1] = ""
    fromUserId.push(useParams().id)
    const [message, setMessage] = useState('')
    const senMsg = async (e) => {
        e.preventDefault()
        const data = {
            userId,
            fromUserId,
            message
        }
        await sendMsg("message", data, getAll)
    }
    return (
        <div className="col-12">
            <form onSubmit={senMsg} className="col-12 d-flex align-items-center justify-content-between">
                <textarea className="form-control1 col-11" style={{height: '80%'}} value={message}
                          onChange={e => setMessage(e.target.value)}/>
                <button style={{backgroundColor: 'transparent'}}>
                    <i className="fa-solid fa-message text-warning"
                       style={{fontSize: '42px', cursor: 'pointer'}}/>
                </button>
            </form>
        </div>
    )
}

const Msg = (message, users, getAll) => {
    const deleteMsg = async (id) => {
        await deleteModal(id, "message", undefined, undefined)
        window.location.reload()
        getAll()
    }
    return (
        <>
            {message.message.map(item => (
                    <>
                        {item.kimdanKimga.substring(0, 10) === localStorage.getItem("phoneNumber") ? (
                            <div
                                className="ochir-bobo w-50 m-2 p-4 bg-warning float-right d-flex align-items-center justify-content-between">
                                <button onClick={() => deleteMsg(item.id)} className="ochir"
                                        style={{position: 'absolute', left: '-80px'}}>
                                    o'chirish
                                </button>
                                <div className="col-2">
                                    <i className="fas fa-user-circle text-danger rasm" style={{fontSize: '50px'}}/>
                                </div>
                                <div className="col-6">
                                    {item.message}
                                </div>
                                {item.user.map(us => (
                                    <div className='col-4 d-flex align-items-center justify-content-between flex-column'>
                                        <span className="ml-3 col-3 text-center">
                                            {us.firstName}
                                        </span>
                                        <span className="ml-3 col-3 text-center">
                                            {us.phoneNumber}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <>
                                <div
                                    className="w-50 m-2 p-4 bg-danger float-left d-flex align-items-center justify-content-between">
                                    <div className="col-2">
                                        <i className="fas fa-user-circle text-warning rasm" style={{fontSize: '50px'}}/>
                                    </div>
                                    <div className="col-6">
                                        {item.message}
                                    </div>
                                    {item.user.map(us => (
                                        <div
                                            className='col-4 d-flex align-items-center justify-content-between flex-column'>
                                        <span className="ml-3 col-3 text-center">
                                            {us.firstName}
                                        </span>
                                            <span className="ml-3 col-3 text-center">
                                            {us.phoneNumber}
                                        </span>
                                        </div>
                                    ))}
                                </div>
                            </>
                        )}
                        {item.kimdanKimga.substring(12) === users.phoneNumber ? (
                            <div
                                className="w-50 m-2 p-4 bg-warning float-right d-flex align-items-center justify-content-between">
                                <div className="col-6">
                                    {item.message}
                                </div>
                                {item.user.map(us => (
                                    <div className='col-4 d-flex align-items-center justify-content-between flex-column'>
                                        <span className="ml-3 col-3 text-center">
                                            {us.firstName}
                                        </span>
                                        <span className="ml-3 col-3 text-center">
                                            {us.phoneNumber}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <></>
                        )}
                    </>
                )
            )}
        </>
    )
}