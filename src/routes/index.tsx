import { Route, Routes } from "react-router-dom";

import Main from "../components/layout/Main";
import Login from "../view/Login/Login";
import Logistica from "../view/Logistica";
import Mentores from "../view/Mentores";
import Interacciones from "../view/Interacciones";
import Inicio from "@/view/Inicio";
import Post from "@/view/Inicio/Post";


export default function RouterBase() {

    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Main />}>
                <Route index element={<Inicio />} />
                <Route path="logistica" element={<Logistica />} />
                <Route path="interacciones" element={<Interacciones />} />
                <Route path="mentores" element={<Mentores />} />
                <Route path="post" >
                    <Route index element={<Post />} />
                    <Route path=":id/:name_interaction" element={<Post />} />
                </Route>
            </Route>
        </Routes >
    )

}