import {baseConfig as baseConfigurer} from "../baseConfig";
import {toast} from "react-toastify";

export const sendMsg = async (url, data, getAll) => {
    const check = {
        message: data.message.trim().length === 0
    }
    if (check.message) {
        return toast.warning("malumot kirgizing")
    }
    if (data.message.length>50){
        return toast.warning("siz buncha katta malumot yozlomaysiz")
    }
    try {
        await baseConfigurer.doPost(url, data);
        window.location.reload()
        getAll()
    } catch (err) {
        toast.error(err)
    }
}

export const saveCaategoryAdd = async (url, data, navigate) => {
    const check = {
        name: data.name.trim().length === 0,
        iconId: data.iconId.trim().length === 0,
        userId: data.userId.length <= 4,
    }
    if (check.name || check.iconId) {
        return toast.warning("malumot kirgizing")
    }
    if (check.userId) {
        return toast.warning("oka hech bo'lmasa guruhda ikki kishi bo'lishi kerak")
    }
    try {
        const res = await baseConfigurer.doPost(url, data);
        if (res.status === 200 || res.status === 201) {
            toast.success("category saqlandi")
            navigate("/admin/messenger")
            // setTimeout(()=>{
            //     window.location.reload()
            // }, 2000)
        }
    } catch (err) {
        console.log(await baseConfigurer.doPost(url, data))
        toast.error("xatolik")
    }
}

export const saveIcons = async (url, data, navigate) => {
    const check = {
        uzName: data.uzName.trim().length === 0,
        enName: data.enName.trim().length === 0,
        ruName: data.ruName.trim().length === 0,
        iconName: data.iconName.trim().length === 0,
    }

    if (check.uzName || check.enName || check.enName || check.iconName) {
        return toast.warning("malumot kirgizing")
    }
    try {
        const res = await baseConfigurer.doPost(url, data)
        if (res.status === 200 || res.status === 201) {
            toast.success("icon saqlandi")
            navigate("/admin/icons")
        }
    } catch (err) {
        console.log(await baseConfigurer.doPost(url, data))
        toast.error("xatolik")
    }
}

export const upload = async (url, id, file) => {
    try {
        await baseConfigurer.doFileUpload(url, id, file)
        toast.success("saqlandi")
        setTimeout(() => {
            window.location.reload()
        }, 2000)
    } catch (err) {
        toast.error("xatolik")
    }
}

export const embeddedGet = async (url, setData, status) => {
    try {
        const res = await baseConfigurer.doGet(url)
        if (status === "data") {
            setData(res.data)
        } else if (status === "embedded") {
            setData(res.data._embedded.list)
        }
    } catch (err) {
    }
}

export const getMsg = async (url, usersId, setData) => {
    try {
        const res = await baseConfigurer.doGetMsg(url, usersId)
        setData(res.data)
    } catch (err) {
    }
}

export const getOne = async (url, setData, id, status) => {
    try {
        const res = await baseConfigurer.doGetOne(id, url);
        if (status === "data") {
            setData(res.data)
        } else if (status === "embedded") {
            setData(res.data._embedded.list)
        }
    } catch (err) {
    }
}

export const deleteService = async (id, status) => {
    try {
        await baseConfigurer.doDelete(id, status)
        toast.success("malumot o'chirlidi")
    } catch (err) {
        toast.error("xatolik")
    }
}