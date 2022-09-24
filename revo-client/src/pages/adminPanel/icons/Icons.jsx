import React, {useEffect, useState} from "react";
import {PageTitle} from "../../../component/adminComponent/PageTitle";
import {Link} from "react-router-dom";
import {Loader} from "../../../component/umumiyComponents/Loader";
import {embeddedGet} from "../../../base/service/service";
import {Pagination} from "../../../component/adminComponent/Pagenation";
import {deleteModal} from "../../../base/DeleteModal";

export const Icons = () => {
    const [loading, setLoading] = useState(false)
    const [icon, setIcon] = useState([])
    const [currentPage, setCurrentPage] = useState(1);
    const [prePage] = useState(10)
    const [search, setSearch] = useState('')

    const getAll = async () => {
        try {
            await embeddedGet("icons", setIcon, "embedded")
            setLoading(true)
        } catch (err) {
        }
    }

    useEffect(() => {
        getAll()
    }, [])

    const indexOfLastData = currentPage * prePage;
    const indexOfFirstData = indexOfLastData - prePage;
    const currentData = icon.slice(indexOfFirstData, indexOfLastData);
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const filter = icon.filter(item => item.uzName.toLowerCase().includes(search.toLowerCase()));

    return (
        <>
            {loading ? (
                <div>
                    <div className="card">
                        <div className="card-header pb-0">
                            <div className='d-flex align-items-center justify-content-between'>
                                <PageTitle
                                    title={"icons"}/>
                                <Link
                                    to={"/admin/icons/save"}
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
                                        {icon.length > 1 ? (
                                            <>
                                                {search.length === 0 ? (
                                                    <>
                                                        <GetIcons data={currentData} getAll={getAll()}/>
                                                        <Pagination totalData={icon.length} perPage={prePage}
                                                                    paginate={paginate}/>
                                                    </>
                                                ) : (
                                                    filter.length > 0 ? (
                                                        <>
                                                            <GetIcons data={filter} getAll={getAll()}/>
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
                                                    icon mavjud emas
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

const GetIcons = ({data, getAll}) => {
    // const deleteIcons = async (id) => {
    //     await deleteModal(id, "icons", undefined, undefined)
    //     getAll()
    // }
    return (
        <div className="row justify-content-center">
            {data.map(item => (
                <div className="p-3 m-2 bg-warning col-5 col-sm-4 col-md-2 icon-box">
                    <div className="d-flex align-items-center justify-content-center flex-column">
                        <i className={item.iconName} style={{fontSize: '50px', color: 'white'}}/>
                        <span className="text-light d-flex align-items-center justify-content-center flex-column"
                              style={{fontSize: '30px'}}>
                            <div>
                                {item.uzName}
                            </div>
                            {/*<button className="btn btn-danger" onClick={() => deleteIcons(item.id)}>*/}
                            {/*    <i className="bi bi-trash-fill"/>*/}
                            {/*</button>*/}
                        </span>
                    </div>
                </div>
            ))}
        </div>
    )
}