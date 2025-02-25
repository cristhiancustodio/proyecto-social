import { Box, Button, Flex, MenuArrow, Text } from "@chakra-ui/react";
import React, { act, useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";

function MenuDesplegable({ item }) {

    const [activo, setActivo] = useState(false);

    return (
        <Box>
            <Box key={item.name}>
                <Button key={item.name} variant="plain" size="sm" _hover={{ color: "gray.400" }} onClick={() => setActivo(!activo)} >
                    <NavLink to={item.rout} >{item.name}</NavLink>
                    <FaAngleDown style={{ size: "1em" }} />
                </Button>
                {
                    (item?.children || []).length > 0 ? <GenerateMenu menu={item.children}></GenerateMenu> : null
                }
            </Box>

        </Box>
    )
}


function GenerateMenu({ menu }) {

    const [activo, setActivo] = useState(false);

    return (
        <Box color="white" p="4" spaceX={2} display={{ base: "d-flex" }} >
            {
                menu.map((item, index) =>
                (
                    <MenuDesplegable item={item}></MenuDesplegable>
                )
                )
            }
        </Box>
    )

}

export default function Menu() {

    const menu = [
        {
            name: "Interacciones",
            rout: '/',
            children: [],
        },
        {
            name: "Logistica",
            rout: '/ejemplo',
            children: [],
        },
        {
            name: "Abordajes",
            rout: '/abordajes',
            children: [],
        }
    ]


    return (

        <>
            <Box>
                <GenerateMenu menu={menu}></GenerateMenu>
            </Box>
            <Box p={4}>
                <Outlet />
            </Box>

        </>
    )
}