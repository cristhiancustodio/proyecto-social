import { Button } from "@chakra-ui/react";

type Props = {
    nombre: string;
}


export default function Ejemplo2({ nombre }: Props) {
    return (
        <div className="">
            <h1>Este es mi componente de ejemplo {nombre} </h1>
        </div>
    )
}