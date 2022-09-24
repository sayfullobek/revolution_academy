import axios from "axios";
import {baseUrl} from "./baseUrl";

export const baseConfig = {
    doPost: (url, data) => axios.post(
        baseUrl + "/" + url, data
    ),
    doGet: (url) => axios.get(
        baseUrl + "/" + url
    ),
    doGetMsg: (url, data) => axios.get(
        baseUrl + "/" + url, data
    ),
    doPut: (id, url, data) => axios.put(
        baseUrl + "/" + url + "/" + id, data
    ),
    doDelete: (id, url) => axios.delete(
        baseUrl + "/" + url + "/" + id
    ),
    doGetOne: (id, url) => axios.get(
        baseUrl + "/" + url + id
    ),
    doParam: (url, data) => axios.patchForm(
        baseUrl + "/" + url + "/" + data
    ),
    doFileUpload: (url, id, file) => axios.post(
        baseUrl + "/" + url + "/" + id, file
    )
}