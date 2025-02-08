"use client"

import { createListCollection, HStack, Stack } from "@chakra-ui/react"
import {
    SelectContent,
    SelectItem,
    SelectLabel,
    SelectRoot,
    SelectTrigger,
    SelectValueText,
} from "@/components/ui/select"
import { Radio, RadioGroup } from "./components/ui/radio"

export default function Demo() {
    return (
        <>
            <SelectRoot collection={frameworks} size="sm" width="320px">
                <SelectLabel>Select framework</SelectLabel>
                <SelectTrigger>
                    <SelectValueText placeholder="Select movie" />
                </SelectTrigger>
                <SelectContent>
                    {frameworks.items.map((movie) => (
                        <SelectItem item={movie} key={movie.value}>
                            {movie.label}
                        </SelectItem>
                    ))}
                </SelectContent>
            </SelectRoot>
            <RadioGroup>
                <Stack direction="column">
                    <Radio value="1">Opción 1</Radio>
                    <Radio value="2">Opción 2</Radio>
                    <Radio value="3">Opción 3</Radio>
                </Stack>
            </RadioGroup>

        </>
    )
}

const frameworks = createListCollection({
    items: [
        { label: "React.js", value: "react" },
        { label: "Vue.js", value: "vue" },
        { label: "Angular", value: "angular" },
        { label: "Svelte", value: "svelte" },
    ],
})
