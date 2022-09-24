import React from 'react';
import {baseConfig} from './baseConfig';
import {toast} from "react-toastify";
import {deleteService} from "./service/service";

const ru = localStorage.getItem('ruLan')
const en = localStorage.getItem('enLan')

export const deleteModal = async (id, status, navigate, navigateName) => {
    try {
        let confirm = window.confirm("O'chirasizmi")
        if (confirm) {
            if (navigate === undefined) {
                await deleteService(id, status)
            }else {
                await deleteService(id, status)
                navigate(navigateName)
            }
        }
    } catch (err) {
    }
}