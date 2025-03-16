import IncidenciaPublicacion from "@/view/Inicio/components/IncidenciaPublicacion";
import { useColorModeValue } from "@/components/ui/color-mode";
import { Avatar, Box, Button, Flex, HStack, Icon, IconButton, Link, Stack, Text } from "@chakra-ui/react";
import { count } from "console";

import { useEffect, useState } from "react";
import { BiComment, BiDotsHorizontalRounded, BiLike, BiSolidLike } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import AccionesPublicacion from "./AccionesPublicacion";
import ContenidoPublicacion from "./ContenidoPublicacion";
import AvatarUser from "@/components/user/AvatarUser";

type CardPublicacionProps = {

}

export default function CardPublicacion() {
    const navigate = useNavigate();
    const [publicacion, setPublicacion] = useState();

    const [like, setLike] = useState({
        active: false,
        count: 20,
    });



    const convertirTodoMinuscula = (name_post: string): string => {
        let name = name_post.toLowerCase();
        name = name.replace(/ /g, "_");
        name = name.replace(/[¿?]/g, "");
        name = name.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        return name;
    }
    const irPost = (id: number, name_post: string): void => {
        navigate(`/post/${id}/${convertirTodoMinuscula(name_post)}`);
    }

    const bg = useColorModeValue('white', 'gray.800');
    const hoverBg = useColorModeValue('gray.50', 'gray.700');

    return (
        <Box m={4} p={2} textAlign="left" spaceY={1}>
            <Flex alignItems={"center"} justifyContent={"space-between"}>
                <HStack>
                    <AvatarUser name="Cristhian Custodio" />
                    <Box>
                        <Link fontSize="smaller">Cristhian custodio</Link>
                        <Text fontSize="x-small" className="text-muted">Publicado el: 01-01-2025</Text>
                    </Box>
                </HStack>
                <Box>
                    <IncidenciaPublicacion />
                </Box>
            </Flex>
            <Box onClick={() => irPost(2, "¿Cuál es el lenguaje de programación favorito?")}>
                <ContenidoPublicacion />
            </Box>
            <Box>
                <AccionesPublicacion like={like} setLike={setLike} />
            </Box>
        </Box>
    )
}