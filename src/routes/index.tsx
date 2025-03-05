import Example from "@/Example";
import { Route, Router, Routes } from "react-router-dom";
import Ejemplo2 from "../../ejemplo2";
import Menu from "@/components/layout/menu";



export default function RouterBase() {

    return (
        <Routes>
            <Route path="/" element={<Menu/>}>
                <Route index element={<Example />}/>
                <Route path="ejemplo" >
                    <Route index element={<Ejemplo2/>}/>
                    <Route path="eje" element={<Ejemplo2/>}/>
                </Route>
            </Route>
        </Routes>
    )

}