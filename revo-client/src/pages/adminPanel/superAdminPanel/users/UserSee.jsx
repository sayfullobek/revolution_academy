import React, {useEffect, useState} from "react";
import {Link, useParams, useNavigate} from "react-router-dom";
import {embeddedGet, getOne} from "../../../../base/service/service";
import {PageTitle} from "../../../../component/adminComponent/PageTitle";
import {Loader} from "../../../../component/umumiyComponents/Loader";
import {deleteModal} from "../../../../base/DeleteModal";
import {ProfileEdited} from "../../profile/ProfileEdited";
import {filesUser} from "../../../../other/ImgUzatish";

export const UserSee = () => {
    const navigate = useNavigate()
    const id = useParams().id
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState([])
    const [malumot, setMalumot] = useState('')
    console.log(data)
    const getAll = async () => {
        try {
            await getOne('auth/', setData, id, "data")
            setLoading(true)
        } catch (err) {
        }
    }

    useEffect(() => {
        getAll()
    }, [])

    const deleteUser = async (id) => {
        await deleteModal(id, "auth", navigate, "/admin/users")
    }
    return (
        <>
            {loading ? (
                <>
                    <div className="card">
                        <div className="card-header pb-0">
                            <div className='d-flex align-items-center justify-content-between'>
                                <PageTitle
                                    title={"user " + data.firstName}/>
                                <div>
                                    <button className="btn btn-danger m-4" onClick={() => deleteUser(id)}>o'chirish
                                    </button>
                                    <Link to={`/admin/users`} className='btn btn-warning text-light'>
                                        orqaga
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-100 d-flex align-items-center justify-content-center" style={{height: '30vh'}}>
                        <div className="w-30" style={{height: '100%'}}>
                            {data.img !== null ?
                                <div style={{borderRadius: '50%'}}>
                                    <img src={data.img} className="rasm"
                                         style={{width: '100%', height: '100%', fontSize: '160px'}}
                                         alt=""/>
                                </div>
                                : isNaN(filesUser + id + data.firstName + ".jpg" || ".png") ?
                                    <>
                                        <img src={filesUser + id + data.firstName + ".jpg"} alt="" className="rasm"
                                             style={{width: '100%', height: '100%', fontSize: '160px'}}/>
                                    </> :
                                    <i className="fas fa-user-circle text-warning rasm" style={{fontSize: '160px'}}/>
                            }
                        </div>
                    </div>
                    <div className="w-100" style={{margin: '50px 0 0 0', height: '60vh'}}>
                        <ProfileEdited user={data} id={id} malumot={malumot} setMalumot={setMalumot}/>
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