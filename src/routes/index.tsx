import { Route, Routes } from "react-router-dom";

import Example from "../Example";


import Main from "../components/layout/Main";
import Login from "../view/Login/Login";
import Logistica from "../view/Logistica";

import Mentores from "../view/Mentores";
import Interacciones from "../view/Interacciones";




export default function RouterBase() {

    return (
        <Routes>
            <Route path="/login" element={<Login/>}/>
            <Route path="/" element={<Main/>}>
                <Route index element={<Example />}/>
                <Route path="logistica" element={<Logistica />}/>
                <Route path="interacciones" element={<Interacciones />}/>
                <Route path="mentores" element={<Mentores />}/>
            </Route>
        </Routes>
    )

}