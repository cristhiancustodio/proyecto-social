import { Box, Button, Flex, Select, Stack, Text } from "@chakra-ui/react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import Footer from "./Footer";
import { ColorModeButton } from "@/components/ui/color-mode";

import { listaMenu } from "./listaMenu";
import axios from "axios";
import { useEffect } from "react";
import api from "../../config/API";
import Selected from "../Selected";

interface MenuItem {
    name: string;
    rout: string;
    children?: MenuItem[];
}
interface GenerateMenuProps {
    menu: MenuItem[];
}

function GenerateMenu({ menu }: GenerateMenuProps) {
    return (
        <Box display="flex">
            {
                menu.map((item: MenuItem) =>
                (
                    <Box key={item.name}>
                        <Button variant="plain" size="sm" _hover={{ color: "gray.400" }} >
                            <NavLink type="button" to={item.rout} >{item.name}</NavLink>
                            {/* <FaAngleDown /> */}
                        </Button>
                        {
                            (item?.children || []).length > 0 ? <GenerateMenu menu={item.children ?? []}></GenerateMenu> : null
                        }
                    </Box>
                )
                )
            }
        </Box>
    )
}

export default function Main() {

    const navigate = useNavigate();
    const goToJoin = () => {
        navigate('/login');
    }

    const data = [
        { value: '1', label: 'Perú' },
        { value: '2', label: 'Colombia' },
        { value: '3', label: 'Chile' },
        { value: '4', label: 'Ecuador' },
        { value: '5', label: 'Bolivia' },
        { value: '6', label: 'Argentina' },
    ];

    const cambiando = (value: string) => {

    }
    function PokeApi() {
        return axios.get('https://pokeapi.co/api/v2/pokemon/ditto');
    }
    function miAPi() {
        return api.get('/posts');
    }
    useEffect(() => {
        const seleccionar = () => {
            Promise.all([miAPi(), PokeApi()])
                .then(function (result) {

                }).catch((err) => {

                });
        }
        seleccionar();

    }, []);

    return (
        <>
            <Box bg={"orange.500"} color="white" py={1}>
                <Text textAlign="center">Foro oficial</Text>
            </Box>
            <Flex justify="space-between" mx={{ base: 1, sm: 10 }} >
                <Box p={4}>
                    <Selected data={data} width="130px" title='Pais' defecto="1" size="xs" change={cambiando}></Selected>
                </Box>
                <Box display={{ base: "none", md: "flex" }} p={4}>
                    <GenerateMenu menu={listaMenu}></GenerateMenu>
                    <Button size='xs' bg={"orange.500"} onClick={goToJoin}>Registrate</Button>
                    <ColorModeButton />
                </Box>
            </Flex>

            <hr />
            <Flex p={{ base: 2, sm: 10 }} minHeight="90vh">
                <br />
                <Outlet />
            </Flex>
            <Box>
                <Footer></Footer>
            </Box>
        </>
    )
}