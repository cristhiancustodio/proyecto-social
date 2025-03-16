import { Avatar, AvatarGroup, Box, Button, Flex, GridItem, HStack, SimpleGrid, Stack, Text } from '@chakra-ui/react'
import React, { Component } from 'react'
import { BiSolidLike, BiComment } from 'react-icons/bi'
import CardPublicacion from './components/CardPublicacion'
import { useColorModeValue } from '@/components/ui/color-mode';


export default function Inicio() {

    const bg = useColorModeValue('white', 'gray.800');
    const hoverBg = useColorModeValue('gray.50', 'gray.700');
    return (
        <Box>
            <SimpleGrid columns={{ base: 1, md: 4 }} gap={{ base: "24px", md: "40px" }}>
                <GridItem colSpan={{ base: 1, md: 3 }}>
                    <Box mb={4}>
                        <Button size="xs" rounded="full">Crear publicación</Button>
                    </Box>
                    <Box>
                        <Text color="blackAlpha.600" _dark={{ color: "whiteAlpha.600" }}>Publicaciones recientes</Text>
                    </Box>
                    {
                        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => (
                            <Box key={index} _hover={{ bg: hoverBg, cursor: 'pointer', borderRadius: 'md' }}>
                                <CardPublicacion />
                                <hr />
                            </Box>
                        ))
                    }
                </GridItem>
                <GridItem colSpan={{ base: 1, md: 1 }}>
                    <Box bg="blackAlpha.200" h="dvh" p={4} rounded="md">
                        <Text>Mi segundo cruadro de despliegue</Text>
                    </Box>
                </GridItem>
            </SimpleGrid>

        </Box>
    )

}