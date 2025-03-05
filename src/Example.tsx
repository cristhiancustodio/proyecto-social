import { ColorModeButton } from "./components/ui/color-mode"
import { Badge, Box, Button, Card, Center, Container, Flex, Group, Input, Link, SimpleGrid, Stack, Text } from "@chakra-ui/react"
import { Field } from "@/components/ui/field"
import Demo from "./seleccion"
import { LuArrowRight } from "react-icons/lu"

export default function Example() {
    return (
        <Box>
            <SimpleGrid columns={{ sm: 2 }} gap={10}>
                <Box>
                    <Link href="#">
                        <Center inline gap="4">
                            <Box>Visit Chakra UI</Box>
                            <LuArrowRight />
                        </Center>
                    </Link>
                    <ColorModeButton></ColorModeButton>
                    <h1>Bienvenido con chakra</h1>
                    <Button variant='solid' colorPalette='red'>Hola</Button>
                    <Button variant='solid' colorPalette=''>Hola</Button>

                    <Text fontWeight="medium" lg={{ fontWeight: "bold" }}>
                        Text
                    </Text>
                    <Text bg="red.300/100" color="white">
                        Hello World
                    </Text>
                    <Text fontWeight={{ base: "medium", lg: "bold" }}>Text responsivo</Text>
                    <Stack hideFrom="md">
                        <Text>This text will be hidden from the `md` breakpoint</Text>
                    </Stack>


                    <br />
                    <br />
                    <Box display="grid" gridTemplateColumns="repeat(3, minmax(0, 1fr))">
                        <Box sm={8}>Item 1</Box>
                        <Box>Item 2</Box>
                        <Box>Item 3</Box>
                    </Box>
                    <Box display="grid" gridTemplateColumns="repeat(3, minmax(0, 2fr))">
                        <Box>Item 1</Box>
                        <Box gridColumn="span 2 / span 2">Item 2</Box>
                        <Box>Item 3</Box>
                    </Box>

                    <Box display="grid" gap="4" gridTemplateRows="repeat(3, minmax(0, 1fr))">
                        <Box gridRowStart="1" gridRowEnd="3">
                            Item 1
                        </Box>
                        <Box>Item 2</Box>
                        <Box>Item 3</Box>
                    </Box>
                    <Box display="flex" spaceX="20">
                        <Box>Item 1</Box>
                        <Box>Item 2</Box>
                        <Box>Item 3</Box>
                    </Box>

                    <Box display="grid" gridAutoFlow="row" pl="20">
                        <Box>Item 1</Box>
                        <Box>Item 2</Box>
                        <Box>Item 3</Box>
                    </Box>
                    <Box as="ul" listStyleType="circle">
                        <li>Item 1</li>
                        <li>Item 2</li>
                        <li>Item 3</li>
                    </Box>
                    <Box display='flex' justifyContent='center' gap={3}>


                        <Button
                            borderWidth="20px"
                            colorPalette="blue"
                            borderColor="colorPalette.500"
                            focusRingColor="red.500" focusRing="outside"
                            focusRingWidth="20px"
                            _hover={{
                                borderColor: "colorPalette.600",
                            }}
                        >
                            Click me
                        </Button>
                        <Button focusRingStyle="dashed">Click me</Button>
                    </Box>
                    <br />

                    <Card.Root maxW="sm">
                        <Card.Header>
                            <Card.Title>Sign up</Card.Title>
                            <Card.Description>
                                Fill in the form below to create an account
                            </Card.Description>
                        </Card.Header>
                        <Card.Body>
                            <Stack gap="4" w="full">
                                <Field label="First Name">
                                    <Input />
                                </Field>
                                <Field label="Last Name">
                                    <Input size='xs' name="" placeholder="Holaaaaa...." />
                                </Field>
                            </Stack>
                        </Card.Body>
                        <Card.Footer justifyContent="flex-end">
                            <Button variant="outline">Cancel</Button>
                            <Button variant="solid">Sign in</Button>
                        </Card.Footer>
                    </Card.Root>
                </Box>
                <Box>
                    <Text>Segunda Columna</Text>
                    <Demo></Demo>

                    <Stack gap="4" mt={3}>
                        <Group attached>
                            <Button variant="outline">Item 1</Button>
                            <Button variant="outline">Item 2</Button>
                        </Group>

                        <Group attached>
                            <Badge variant="solid" colorPalette="purple">
                                Commit status
                            </Badge>
                            <Badge variant="solid" colorPalette="green">
                                90+
                            </Badge>
                        </Group>
                    </Stack>
                </Box>
            </SimpleGrid>
        </Box>
    )
}