import { Route, Routes } from "react-router-dom";
import Ejemplo2 from "../../ejemplo2";
import Example from "../Example";
import Menu from "../components/layout/menu";
import Logistica from "../view/Logistica";
import Interacciones from "../view/Interacciones";
import Mentores from "../view/Mentores";



export default function RouterBase() {

    return (
        <Routes>
            <Route path="/" element={<Menu/>}>
                <Route index element={<Example />}/>
                <Route path="logistica" element={<Logistica />}/>
                <Route path="interacciones" element={<Interacciones />}/>
                <Route path="mentores" element={<Mentores />}/>
            </Route>
        </Routes>
    )

}