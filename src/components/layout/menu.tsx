import { Box, Button, Flex, MenuArrow, Text } from "@chakra-ui/react";
import React, { act, useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";

interface MenuItem {
    name: string;
    rout: string;
    children: MenuItem[];
}

interface MenuDesplegableProps {
    item: MenuItem;
}

interface GenerateMenuProps {
    menu: MenuItem[];
}

function MenuDesplegable({ item }: MenuDesplegableProps) {

    const [activo, setActivo] = useState<Boolean>(false);

    return (
        <Box>
            <Box key={item.name}>
                <Button key={item.name} variant="plain" size="sm" _hover={{ color: "gray.400" }} onClick={() => setActivo(!activo)} >
                    <NavLink to={item.rout} >{item.name}</NavLink>
                    <FaAngleDown />
                </Button>
                {
                    (item?.children || []).length > 0 ? <GenerateMenu menu={item.children}></GenerateMenu> : null
                }
            </Box>

        </Box>
    )
}

function GenerateMenu({ menu }: GenerateMenuProps) {

    const [activo, setActivo] = useState<Boolean>(false);

    return (
        <Box color="white" p="4" spaceX={2} display={{ base: "d-flex" }} >
            {
                menu.map((item: MenuItem, index: number) =>
                (
                    <MenuDesplegable item={item} key={item.name}></MenuDesplegable>
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
            children: [
                {
                    name: "Interacciones",
                    rout: '/',
                    children: [],
                },
            ],
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