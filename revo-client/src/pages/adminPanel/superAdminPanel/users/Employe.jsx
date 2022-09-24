import React, {useEffect, useState} from "react";
import {Loader} from "../../../../component/umumiyComponents/Loader";
import {Pagination} from "../../../../component/adminComponent/Pagenation";
import {PageTitle} from "../../../../component/adminComponent/PageTitle";
import {embeddedGet} from "../../../../base/service/service";
import {Link, useLocation} from "react-router-dom";
import {filesUser} from "../../../../other/ImgUzatish";

export const Employe = () => {
    const location = useLocation().pathname
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [prePage] = useState(10)
    const [search, setSearch] = useState('')
    const ru = localStorage.getItem("ruLan")
    const en = localStorage.getItem("enLan")

    const getAll = async () => {
        try {
            await embeddedGet("auth", setData, "data")
            setLoading(true)
        } catch (err) {
        }
    }

    useEffect(() => {
        getAll()
    }, [])

    const indexOfLastData = currentPage * prePage;
    const indexOfFirstData = indexOfLastData - prePage;
    const currentData = data.slice(indexOfFirstData, indexOfLastData);
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const filter = data.filter(item => item.firstName.toLowerCase().includes(search.toLowerCase()));
    return (
        <>
            {loading ? (
                <div>
                    <div className="card">
                        <div className="card-header pb-0">
                            <div className='d-flex align-items-center justify-content-between'>
                                <PageTitle
                                    title={location==="/admin/users"?"employe":"user"}/>
                                <Link
                                    to={location === "/admin/users/online" ? "/admin/users/register/online" : "/admin/users/register"}
                                    className='btn btn-warning text-light'>
                                    <i className='fas fa-plus-circle m-2'/>
                                    qo'shish
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="card">
                                <div className="card-header">
                                    <input type="text"
                                           placeholder='Qidirish...'
                                           className='form-control1'
                                           value={search} onChange={e => setSearch(e.target.value)}/>
                                </div>
                                <div className="card-body">
                                    <div className="table-reponsive">
                                        {data.length > 1 ? (
                                            <>
                                                {search.length === 0 ? (
                                                    <>
                                                        <UserList currentData={currentData} location={location}
                                                                  getAll={getAll} ru={ru} en={en}
                                                        />
                                                        <Pagination totalData={data.length} perPage={prePage}
                                                                    paginate={paginate}/>
                                                    </>
                                                ) : (
                                                    filter.length > 0 ? (
                                                        <>
                                                            <UserList currentData={filter} location={location}
                                                                      getAll={getAll} ru={ru} en={en}
                                                            />
                                                        </>
                                                    ) : (
                                                        <div className='text-center'>
                                                            <h3 className='card-title text-warning'>
                                                                <i className='fas fa-exclamation-circle me-2'/>
                                                                Qidiruv natijasida ma'lumot topilmadi
                                                            </h3>
                                                        </div>
                                                    )
                                                )}
                                            </>
                                        ) : (
                                            <div className='text-center'>
                                                <h3 className='card-title text-warning'>
                                                    <i className='fas fa-exclamation-circle me-2'/>
                                                    user mavjud emas
                                                </h3>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <Loader/>
            )}
        </>
    )
}


const UserList = ({currentData, ru, en, location}) => {
    return (
        <>
            <table className="table text-center table-hover">
                <tbody>
                <tr className='text-warning'>
                    <th style={{width: '10%', height: '10%'}}>img</th>
                    <th>name</th>
                    <th>phone number</th>
                    <th colSpan={2}>{ru === "true" ? "действие" : en === "true" ? "action" : "harakat"}</th>
                </tr>
                {currentData.map((item, i) => (
                    item.roles.length > 4 ? (
                        <></>
                    ) : (
                        <>
                            {location === "/admin/users/online" ? (
                                item.roles.map(item1 => (
                                    item1.roleName === "USER" ? (
                                        <tr key={i} className="fw-bold">
                                            <td>
                                                <i className="fas fa-user-circle text-warning" style={{fontSize:'36px'}}/>
                                            </td>
                                            <td className="text-lowercase">{item.firstName}</td>
                                            <td>{item.phoneNumber}</td>
                                            <td>
                                                <div className='d-flex align-items-center justify-content-center'>
                                                    <Link to={`/admin/users/see/` + item.id} type="button"
                                                          className="btn btn-warning text-light">
                                                        korish
                                                    </Link>
                                                </div>
                                            </td>
                                        </tr>
                                    ) : (
                                        <></>
                                    )
                                ))
                            ) : (
                                item.roles.map(item1 => (
                                    item1.roleName !== "USER" ? (
                                        <tr key={i} className="fw-bold">
                                            <td>
                                                {item.img !== null ?
                                                    <div style={{borderRadius: '50%'}}>
                                                        <img src={item.img}
                                                             style={{width: '50%', height: '6%'}}
                                                             alt=""/>
                                                    </div>
                                                    : filesUser + item.id + item.firstName + ".jpg" || ".png"?
                                                        <>
                                                            <img src={filesUser + item.id + item.firstName + ".jpg"}
                                                                 alt=""
                                                                 style={{
                                                                     width: '50px',
                                                                     height: '6%',
                                                                     borderRadius: '50%'
                                                                 }}/>
                                                        </> :
                                                        <i className="fas fa-user-circle text-warning" style={{fontSize:'36px'}}/>
                                                }
                                            </td>
                                            <td className="text-lowercase">{item.firstName}</td>
                                            <td>{item.phoneNumber}</td>
                                            <td>
                                                <div className='d-flex align-items-center justify-content-center'>
                                                    <Link to={`/admin/users/see/` + item.id} type="button"
                                                          className="btn btn-warning text-light">
                                                        korish
                                                    </Link>
                                                </div>
                                            </td>
                                        </tr>
                                    ) : (
                                        <></>
                                    )
                                ))
                            )}
                        </>
                    )

                ))}
                </tbody>
            </table>
        </>
    )
}