import React, {useState} from "react";
import {resetFullName} from "../../../base/service/authService";
import {toast} from "react-toastify";
import {upload} from "../../../base/service/service";

export const ProfileEdited = ({user, id, malumot, setMalumot}) => {
    const [firstName, setFirstName] = useState(user.firstName)
    const [lastName, setLastName] = useState(user.lastName)
    const [email, setEmail] = useState(user.email)
    const [phoneNumber, setPhoneNumber] = useState(user.phoneNumber)
    const [password, setPassword] = useState(user.code)
    const [prePassword, setPrePassword] = useState('')
    const [img, setImg] = useState('')
    const [choiseImg, setChoiseImg] = useState('tanlang')

    const mal = [
        {
            name: user.firstName + " " + user.lastName,
            malumot: "name and surname",
        },
        {
            name: user.phoneNumber,
            malumot: "phoneNumber"
        },
        {
            name: user.code,
            malumot: "password",
        },
        {
            name: user.email,
            malumot: 'email'
        },
        {
            name: user.roles.length > 4 ? "super admin" : user.roles.map(item => item.roleName),
            malumot: "role",
        },
    ]

    const openModal = (malumot) => {
        setMalumot(malumot)
    }

    const editMal = async (e) => {
        e.preventDefault()

        let data = {}

        if (malumot === "name and surname") {
            data = {
                firstName,
                lastName,
                malumot
            }
        } else if (malumot === "email") {
            data = {
                email,
                malumot
            }
        } else if (malumot === "phoneNumber") {
            data = {
                phoneNumber,
                malumot
            }
        } else if (malumot === "password") {
            if (password === prePassword) {
                data = {
                    password,
                    prePassword,
                    malumot
                }
            } else {
                return toast.warning("parol va tasdiqlash paroli teng bo'lishi shart")
            }
        } else if (malumot === "image") {
            if (choiseImg === "url") {
                data = {
                    img,
                    malumot
                }
            }
        }
        await resetFullName(id, data);
    }

    const uploadFile = async (e) => {
        e.preventDefault()
        let file = new FormData();
        file.append("file", fileUpload.files[0])
        await upload("upload", id, file)
    }
    return (
        <>
            <ul className="w-100 list-group list-group-light">
                {mal.map(item => (
                    <li type="button" data-bs-toggle="modal"
                        data-bs-target={item.malumot === "role" ? "" : "#exampleModal"}
                        className="w-100 list-group-item px-3 border-0 rounded-3 list-group-item-warning bg-warning text-light mb-2 d-flex align-items-center justify-content-between"
                        style={item.malumot === "role" ? {cursor: 'auto'} : {}}
                        onClick={() => openModal(item.malumot)}>
                        <div className="ml-3 text-lowercase font-weight-bold">
                            {item.malumot}
                        </div>
                        <div className="mr-3 text-lowercase font-weight-bold">
                            {item.malumot === "password" ?
                                <div className="code">
                                    <span className="code-pas">*************</span>
                                    <span className="code-child">{item.name}</span>
                                </div>
                                : item.name
                            }
                        </div>
                    </li>
                ))}
            </ul>

            <div className="modal fade" id="exampleModal" tabIndex="-1"
                 aria-labelledby="exampleModalLabel"
                 aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">{malumot}ni
                                tahrirlash</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"/>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={choiseImg === "url" ? editMal : uploadFile}>
                                {malumot === "name and surname" ? (
                                    <>
                                        <label htmlFor="firstName"
                                               className='card-title text-warning text-warning m-0'>ismingizni
                                            kiriting
                                        </label>
                                        <input type="text" className="form-control1" id="firstName"
                                               placeholder='Masalan: ketmon'
                                               value={firstName} onChange={e => setFirstName(e.target.value)}/>

                                        <label htmlFor="lastName"
                                               className='card-title text-warning text-warning m-0'>familiyangizni
                                            kiriting
                                        </label>
                                        <input type="text" className="form-control1" id="lastName"
                                               placeholder='Masalan: teshayev'
                                               value={lastName} onChange={e => setLastName(e.target.value)}/>
                                    </>
                                ) : malumot === "email" ? (
                                    <>
                                        <label htmlFor="email"
                                               className='card-title text-warning text-warning m-0'>emailingizni
                                            kiriting
                                        </label>
                                        <input type="email" className="form-control1" id="email"
                                               placeholder='Masalan: 990763246'
                                               value={email} onChange={e => setEmail(e.target.value)}/>
                                    </>
                                ) : malumot === "phoneNumber" ? (
                                    <>
                                        <label htmlFor="phoneNumber"
                                               className='card-title text-warning text-warning m-0'>telefon raqamingizni
                                            kiriting
                                        </label>
                                        <input type="text" className="form-control1" id="phoneNumber"
                                               placeholder='Masalan: 990763246'
                                               value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)}/>
                                    </>
                                ) : malumot === "password" ? (
                                    <>
                                        <label htmlFor="password"
                                               className='card-title text-warning text-warning m-0'>parolingizni
                                            kiriting
                                        </label>
                                        <input type="text" className="form-control1" id="password"
                                               placeholder='Masalan: 990763246'
                                               value={password} onChange={e => setPassword(e.target.value)}/>

                                        <label htmlFor="prePassword"
                                               className='card-title text-warning text-warning m-0'>tasdiqlash
                                            parolingizni
                                            kiriting
                                        </label>
                                        <input type="text" className="form-control1" id="prePassword"
                                               placeholder='Masalan: 990763246'
                                               value={prePassword} onChange={e => setPrePassword(e.target.value)}/>
                                    </>
                                ) : malumot === "image" ? (
                                    <>
                                        <label htmlFor="tanlang"
                                               className='card-title text-warning text-warning m-0'>tanlang
                                        </label>
                                        <select name="tanlang" className="form-control1" id="tanlang" value={choiseImg}
                                                onChange={e => setChoiseImg(e.target.value)}>
                                            <option value="tanlang">tanlang</option>
                                            <option value="url">url</option>
                                            <option value="img">img</option>
                                        </select>

                                        {choiseImg === "tanlang" ? (
                                            <></>
                                        ) : (
                                            <>
                                                <label htmlFor="img"
                                                       className='card-title text-warning text-warning m-0'>rasmni
                                                    kiriting
                                                </label>
                                                {choiseImg === "url" ? (
                                                    <input type="text" className="form-control1" id="img"
                                                           placeholder='Masalan: https://...'
                                                           value={img} onChange={e => setImg(e.target.value)}/>
                                                ) : choiseImg === "img" ? (
                                                    <>
                                                        <input type="file" className="form-control1" id="fileUpload"
                                                               name="fileUpload"
                                                            // value={fileUpload} onChange={e => setFile(e.target.value)}
                                                        />
                                                    </>
                                                ) : (
                                                    <></>
                                                )}
                                            </>
                                        )}
                                    </>
                                ) : ("")}
                                <div className="modal-footer">
                                    <button className="btn btn-warning">Save changes</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}