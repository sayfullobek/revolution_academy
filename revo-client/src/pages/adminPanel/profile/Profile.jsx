import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {getOne} from "../../../base/service/service";
import back from './backphone.jpg'
import {ProfileEdited} from "./ProfileEdited";
import {Loader} from "../../../component/umumiyComponents/Loader";
import {filesUser} from "../../../other/ImgUzatish";

export const Profile = () => {
    const id = useParams().id
    let [malumot, setMalumot] = useState('')
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
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
    const mal = (m) => {
        setMalumot(m)
    }
    return (
        <>
            {loading ?
                <div className="col-12" style={{height: '100vh'}}>
                    <div className="col-12 d-flex align-items-end justify-content-center" style={{
                        height: '50%',
                        backgroundImage: `url(${back})`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat'
                    }}>
                        <div
                            className="col-5 col-sm-4 col-md-2 d-flex align-items-center justify-content-center flex-column"
                            style={{height: '65%', borderRadius: '50%', position: 'absolute', bottom: '-120px'}}>
                            {data.img !== null ?
                                <div style={{borderRadius: '50%'}}>
                                    <img src={data.img} className="rasm"
                                         style={{width: '100%', height: '100%', fontSize: '160px'}}
                                         alt=""/>
                                </div>
                                : isNaN(filesUser + id + data.firstName + ".jpg"||".png") ?
                                    <>
                                        <img src={filesUser + id + data.firstName + ".jpg"} alt="" className="rasm"
                                             style={{width: '100%', height: '100%', fontSize: '160px'}}/>
                                    </> :
                                    <i className="fas fa-user-circle text-warning rasm" style={{fontSize: '160px'}}/>
                            }
                            <button type="button" data-bs-toggle="modal"
                                    data-bs-target={"#exampleModal"} className="filejonBola d-flex"
                                    onClick={() => mal("image")}>
                                <i className='fas fa-plus-circle m-2'/>
                            </button>
                            <h1 className="text-warning">{data.firstName}</h1>
                        </div>
                    </div>
                    <div className="w-100" style={{margin: '130px 0 0 0', height: '60vh'}}>
                        <ProfileEdited user={data} id={id} malumot={malumot} setMalumot={setMalumot}/>
                    </div>
                </div> :
                <>
                    <Loader/>
                </>
            }
        </>
    )
}