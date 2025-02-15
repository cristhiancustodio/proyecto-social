import { Box, Button, Flex, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

function GenerateMenu({ menu }) {

    const [activo, setActivo] = useState(false);



    return (
        <Box w="250px" h="100vh" color="white" p="4" spaceY={2}>
            {
                menu.map((item, index) => {
                    return (
                        <Box key={item.name}>
                            <Button key={item.name} variant="outline">
                                <NavLink to={item.rout} >{item.name}</NavLink>
                            </Button>
                            {
                                (item?.children || []).length > 0 ? <GenerateMenu menu={item.children}></GenerateMenu> : null
                            }
                        </Box>
                    )
                })
            }
        </Box>
    )

}

export default function Menu() {

    const menu = [
        {
            name: "Inicio",
            rout: '/',
            children: [],
        },
        {
            name: "Ejemplo",
            rout: '/ejemplo',
            children: [],
        }
    ]


    return (

        <>
            <Flex>
                <GenerateMenu menu={menu}></GenerateMenu>
                <Box flex="1" p="4">
                    <Outlet />
                </Box>
            </Flex>
        </>
    )
}