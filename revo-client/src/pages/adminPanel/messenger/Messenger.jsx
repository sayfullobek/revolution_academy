import React, {useEffect, useState} from "react";
import {PageTitle} from "../../../component/adminComponent/PageTitle";
import {Loader} from "../../../component/umumiyComponents/Loader";
import {embeddedGet} from "../../../base/service/service";
import {Link} from "react-router-dom";
import {set} from "mdb-ui-kit/src/js/mdb/perfect-scrollbar/lib/css";

export const Messenger = () => {
    const [categoryBtn, setCategoryBtn] = useState('all')
    const [loading, setLoading] = useState(false)
    const [users, setUsers] = useState([])
    const [category, setCategory] = useState([])

    const getAll = async () => {
        try {
            await embeddedGet("auth", setUsers, "data")
            await embeddedGet("category/messenger", setCategory, "data")
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
                <div>
                    <div className="card">
                        <div className="card-header pb-0">
                            <div className='d-flex align-items-center justify-content-between'>
                                <PageTitle
                                    title={"message"}/>
                                <Link
                                    to={"/admin/messenger/category"}
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
                                <div className="card-body">
                                    <div className="table-reponsive">
                                        <h2 className="text-center text-warning font-weight-bold mb-3">guruhlar</h2>
                                        <CategoryMsg categories={category} categoryBtn={categoryBtn}
                                                     setCategoryBtn={setCategoryBtn}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="card">
                                <div className="card-body">
                                    <div className="table-reponsive">
                                        <Link
                                            to={`/admin/messenger/users/` + localStorage.getItem("id")}
                                            className="btn btn-warning text-light font-weight-bold mb-3">{categoryBtn === "all" ? (
                                            "asosiy guruh"
                                        ) : ("guruhlar")}</Link>
                                        <GetUsers users={users} categoryBtn={categoryBtn}
                                                  category={category}/>
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

const CategoryMsg = ({categories, categoryBtn, setCategoryBtn}) => {
    const btn = (status) => {
        setCategoryBtn(status)
    }
    return (
        <div>
            <button onClick={() => btn("all")}
                    className={categoryBtn === "all" ? `btn-warning btn font-weight-bold` : `btn-light btn font-weight-bold`}>all
            </button>
            {categories.map(item => (
                item.user.map(user => (
                    localStorage.getItem("phoneNumber") === user.phoneNumber ? (
                        <button onClick={() => btn(item.name)}
                                className={categoryBtn === item.name ? `btn-warning btn font-weight-bold` : `btn-light btn font-weight-bold`}>{item.name}
                        </button>
                    ) : (
                        <></>
                    )
                ))
            ))}
        </div>
    )
}
const GetUsers = ({users, setSuperId, categoryBtn, category}) => {
    return (
        <div>
            <ul className="w-100 list-group list-group-light">
                {users.length === 0 ? (
                    <h3 className="text-center text-warning">hech narsa mavjud emas !</h3>
                ) : (
                    <>
                        {categoryBtn === "all" ? (
                            <>
                                {
                                    users.map(item => (
                                        item.roles.map(ro => (
                                            ro.roleName === "USER" ? (
                                                <></>
                                            ) : (
                                                item.phoneNumber === localStorage.getItem("phoneNumber") ? (
                                                    <>

                                                    </>
                                                ) : (
                                                    <>
                                                        <button
                                                            className="w-100 list-group-item px-3 border-0 rounded-3 list-group-item-warning bg-warning text-light mb-2 d-flex align-items-center justify-content-between">
                                                            <div className="ml-3 text-lowercase font-weight-bold">
                                                                {item.firstName}
                                                            </div>
                                                            <div
                                                                className="mr-3 text-lowercase font-weight-bold d-flex">
                                                                <div className="mr-5">
                                    <span className="border border-danger pt-1 pb-1 pr-2 pl-2 bg-danger"
                                          style={{borderRadius: '50%'}}>1</span>
                                                                </div>
                                                                <div>
                                                                    {item.roles.length > 4 ? (
                                                                        <>
                                                                            super admin
                                                                        </>
                                                                    ) : (<></>)}
                                                                    {item.roles.map(rol => (
                                                                        item.roles.length > 4 ? (
                                                                            <>
                                                                            </>
                                                                        ) : (
                                                                            <>
                                                                                {rol.roleName}
                                                                            </>
                                                                        )
                                                                    ))}
                                                                </div>
                                                            </div>
                                                        </button>
                                                    </>
                                                )
                                            )
                                        ))
                                    ))
                                }
                            </>
                        ) : (
                            <>
                                {category.map(item => (
                                        item.name === categoryBtn ? (
                                            item.user.map(use => (
                                                use.phoneNumber === localStorage.getItem("phoneNumber") ? (
                                                    <></>
                                                ) : (
                                                    <>
                                                        <Link to={`/admin/messenger`}
                                                              className="w-100 list-group-item px-3 border-0 rounded-3 list-group-item-warning bg-warning text-light mb-2 d-flex align-items-center justify-content-between">
                                                            <div className="ml-3 text-lowercase font-weight-bold">
                                                                {use.firstName}
                                                            </div>
                                                            <div
                                                                className="mr-3 text-lowercase font-weight-bold d-flex">
                                                                <div className="mr-5">
                                    <span className="border border-danger pt-1 pb-1 pr-2 pl-2 bg-danger"
                                          style={{borderRadius: '50%'}}>1</span>
                                                                </div>
                                                                <div>
                                                                    {use.roles.length > 4 ? (
                                                                        <>
                                                                            super admin
                                                                        </>
                                                                    ) : (<></>)}
                                                                    {use.roles.map(rol => (
                                                                        use.roles.length > 4 ? (
                                                                            <>
                                                                            </>
                                                                        ) : (
                                                                            <>
                                                                                {rol.roleName}
                                                                            </>
                                                                        )
                                                                    ))}
                                                                </div>
                                                            </div>
                                                        </Link>
                                                    </>
                                                )
                                            ))
                                        ) : (<></>)
                                    )
                                )}
                            </>
                        )}
                    </>
                )}
            </ul>
        </div>
    )
}