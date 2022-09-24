import {toast} from 'react-toastify';
import {baseConfig} from '../baseConfig'
import {set} from "mdb-ui-kit/src/js/mdb/perfect-scrollbar/lib/css";

export const login = async (data) => {
    const check = {
        phoneNumber: data.phoneNumber.trim().length === 0,
        password: data.password.trim().length === 0
    }
    if (check.phoneNumber || check.password) {
        return toast.warning("malumot kirgizing")
    }

    try {
        const res = await baseConfig.doPost("auth/login", data)
        if (res.status === 200) {
            const roles = res.data.user.roles.length > 4 ? "SuperAdmin" : res.data.user.roles.map(item => item.roleName)
            localStorage.setItem('token', res.data.resToken.body)
            localStorage.setItem('tokenType', res.data.resToken.tokenType)
            localStorage.setItem('firstName', res.data.user.firstName)
            localStorage.setItem('lastName', res.data.user.lastName)
            localStorage.setItem('phoneNumber', res.data.user.phoneNumber)
            localStorage.setItem('email', res.data.user.email)
            localStorage.setItem('role', roles)
            localStorage.setItem('realPassword', res.data.user.password)
            localStorage.setItem('pre', res.data.user.prePassword)
            localStorage.setItem('id', res.data.user.id)
            localStorage.setItem("view", '0')
            toast.success("kuting...")
            setTimeout(() => {
                window.location.reload()
            }, 2000)
        }
    } catch (err) {
        if (err.response === undefined) {
            return toast.error("internetga ulaning oka")
        } else if (err.response.status === 401) {
            return toast.error("oka sizga kirish mumkin emas")
        }
    }
}

export const userRegister = async (data, navigate, status) => {
    const check = {
        firstName: data.firstName.trim().length === 0,
        lastName: data.lastName.trim().length === 0,
        phoneNumber: data.phoneNumber.trim().length === 0,
        email: data.email.trim().length === 0,
        password: data.password.trim().length === 0,
        prePassword: data.prePassword.trim().length === 0,
    }
    if (check.firstName || check.lastName || check.phoneNumber || check.email || check.password || check.prePassword || check.roleId) {
        return toast.warning("malumot kirgizing")
    }

    if (data.phoneNumber.length!==9){
        return toast.warning("oka tel raqam xato")
    }

    if (data.roleId === "null" || isNaN(data.roleId)) {
        return toast.error("role tanlang oka")
    }

    if (data.password !== data.prePassword) {
        return toast.error("parollar mos emas oka")
    }
    try {
        await baseConfig.doPost('auth/register', data)
        toast.success("user qo'shildi")
        if (status==="employee"){
            navigate('/admin/users')
        }else {
            navigate('/admin/users/online')
        }
    } catch (err) {
        toast.error("xatolik")
    }
}

export const resetFullName = async (id, data) => {
    if (data.malumot === "name and surname") {
        const check = {
            firstName: data.firstName.trim().length === 0,
            lastName: data.lastName.trim().length === 0
        }
        if (check.firstName || check.lastName) {
            return toast.warning("malumit kirgazing oka")
        }
    } else if (data.malumot === "email") {
        const check = {
            email: data.email.trim().length === 0
        }
        if (check.email) {
            return toast.warning("malumot kirgizing brat")
        }
    } else if (data.malumot === "phoneNumber") {
        const check = {
            phoneNumber: data.phoneNumber.trim().length === 0
        }
        if (check.phoneNumber) {
            return toast.warning("malumot kiriting")
        }
    } else if (data.malumot === "password") {
        const check = {
            password: data.password.trim().length === 0
        }
        if (check.password) {
            return toast.warning("malumot kiriting")
        }
    } else if (data.malumot === "image") {
        const check = {
            img: data.img.trim().length === 0
        }
        if (check.img) {
            return toast.warning("malumot kiriting")
        }
    }
    try {
        const res = await baseConfig.doPut(id, "auth/fullName", data)
        if (res.status === 200 || res.status === 201) {
            if (data.malumot === "name and surname") {
                localStorage.setItem('firstName', res.data.object.firstName)
                localStorage.setItem('lastName', res.data.object.lastName)
            } else if (data.malumot === "email") {
                localStorage.setItem('email', res.data.object.email)
            } else if (data.malumot === "phoneNumber") {
                localStorage.setItem('phoneNumber', res.data.object.phoneNumber)
            }
            toast.success("malumot tahrirlandi")
            setTimeout(() => {
                window.location.reload()
            }, 2000)
        }
    } catch (err) {
        console.log(err)
        toast.error("xatolik")
    }
}
