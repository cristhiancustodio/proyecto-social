
"use client"

import { Button, Icon, IconButton, Menu, Portal } from "@chakra-ui/react"
import { Tooltip } from "@/components/ui/tooltip"
import { useId } from "react"
import { BiDotsHorizontalRounded, BiSolidBookmark } from "react-icons/bi"


import { BsBookmark, BsFlag } from "react-icons/bs";
export default function IncidenciaPublicacion() {
    const triggerId = useId();


    const opcionSeleccionada = (value: string) => {
        console.log(value);
    }

    return (

        <Menu.Root ids={{ trigger: triggerId }}
            onSelect={opcionSeleccionada}
        >
            <Tooltip
                ids={{ trigger: triggerId }}
                positioning={{ placement: "top" }}
                content="Opciones"
            >
                <Menu.Trigger asChild={true}>
                    <IconButton size={"xs"} variant="ghost" rounded={"full"} >
                        <Icon as={BiDotsHorizontalRounded} />
                    </IconButton>
                </Menu.Trigger>
            </Tooltip>
            <Portal>
                <Menu.Positioner>
                    <Menu.Content>
                        <Menu.Item value="new-save"><BsBookmark size="20px" /> Guardar</Menu.Item>
                        <Menu.Item value="new-report"><BsFlag size="20px" /> Report</Menu.Item>
                    </Menu.Content>
                </Menu.Positioner>
            </Portal>
        </Menu.Root>
    )
}
