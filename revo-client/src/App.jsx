import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Menyu} from "./pages/mainMenyu/Menyu";
import {NotFoundPages} from "./pages/NotFoundPages";
import {AdminLayout} from "./layout/AdminLayout";
import {Admin} from "./pages/adminPanel/superAdminPanel/Admin";
import {MenyuLayout} from "./layout/MenyuLayout";
import {Login} from "./pages/mainMenyu/Login";
import {Employe} from "./pages/adminPanel/superAdminPanel/users/Employe";
import {UserRegister} from "./pages/adminPanel/superAdminPanel/users/UserRegister";
import {UserSee} from "./pages/adminPanel/superAdminPanel/users/UserSee";
import {AdminBot} from "./pages/adminPanel/botAdmin/AdminBot";
import {AdminCrm} from "./pages/adminPanel/adminCrm/AdminCrm";
import {Teacher} from "./pages/adminPanel/teacher/Teacher";
import {AdminClient} from "./pages/adminPanel/adminClient/AdminClient";
import {UserPanel} from "./pages/user/UserPanel";
import {Profile} from "./pages/adminPanel/profile/Profile";
import {Messenger} from "./pages/adminPanel/messenger/Messenger";
import {CategoryMessengerAdd} from "./pages/adminPanel/messenger/CategoryMessengerAdd";
import {Icons} from "./pages/adminPanel/icons/Icons";
import {IconsSave} from "./pages/adminPanel/icons/IconsSave";
import {ChatUser} from "./pages/adminPanel/messenger/ChatUser";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={"*"} element={<NotFoundPages/>}/>
                <Route path={"/admin"} element={<AdminLayout/>}>
                    <Route index element={<Admin/>}/>
                    <Route path={"/admin/messenger"} element={<Messenger/>}/>
                    <Route path={"/admin/messenger/category"} element={<CategoryMessengerAdd/>}/>
                    <Route path={"/admin/messenger/users/:id"} element={<ChatUser/>}/>
                    <Route path={"/admin/icons"} element={<Icons/>}/>
                    <Route path={"/admin/icons/save"} element={<IconsSave/>}/>

                    {/*super admin uchun start*/}
                    <Route path={"/admin/users"} element={<Employe/>}/>
                    <Route path={"/admin/users/register"} element={<UserRegister/>}/>
                    <Route path={"/admin/users/see/:id"} element={<UserSee/>}/>

                    <Route path={"/admin/users/online"} element={<Employe/>}/>
                    <Route path={"/admin/users/register/online"} element={<UserRegister/>}/>
                    {/*super admin uchun end*/}

                    {/*bot admin uchun start*/}
                    <Route path="/admin/bot" element={<AdminBot/>}/>
                    {/*bot admin uchun end*/}

                    {/*adminCrm uchun start*/}
                    <Route path={"/admin/crm"} element={<AdminCrm/>}/>
                    {/*adminCrm uchun end*/}

                    {/*teacher uchun start*/}
                    <Route path={"/admin/teacher"} element={<Teacher/>}/>
                    {/*teacher uchun end*/}

                    {/*admin client uchun start*/}
                    <Route path={"/admin/client"} element={<AdminClient/>}/>
                    {/*admin client uchun end*/}

                    {/*umumiy malumotlar start*/}
                    <Route path={"/admin/see/profile/:id"} element={<Profile/>}/>
                    {/*umumiy malumotlar end*/}
                </Route>
                <Route path={"/user/panel"} element={<UserPanel/>}/>
                <Route path={"/"} element={<MenyuLayout/>}>
                    <Route index element={<Menyu/>}/>
                    <Route path={"/auth/login"} element={<Login/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
