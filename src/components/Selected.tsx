import React from "react";
import { createListCollection } from "@chakra-ui/react"
import {
    SelectContent,
    SelectItem,
    SelectLabel,
    SelectRoot,
    SelectTrigger,
    SelectValueText,
} from "@/components/ui/select"


interface PropsOption {
    value: string;
    label: string
}

interface SelectedProps {
    title?: string;
    data: PropsOption[];
    defecto?: string;
    change: (value: string) => void;
    width?: string;
    placeholder?: string;
    clear?: boolean;
    [key: string]: any;
}


export default function Selected({ title, data, change, defecto = "", width = "320px", placeholder = "Seleccione", clear = false, ...rest }: SelectedProps) {
    const frameworks = createListCollection({ items: data });
        
    const changing = ({value} : {value: string[]}) => {
        change(value[0]);
    }
    return (
        <SelectRoot
            collection={frameworks}
            defaultValue={defecto}
            width={width}
            onValueChange={changing}
            {...rest}
        >
            {title && <SelectLabel>{title}</SelectLabel>}
            <SelectTrigger clearable={clear}>
                <SelectValueText placeholder={placeholder} />
            </SelectTrigger>
            <SelectContent>
                {frameworks.items.map((item: PropsOption) => (
                    <SelectItem item={item} key={item.value}>
                        {item.label}
                    </SelectItem>
                ))}
            </SelectContent>
        </SelectRoot>
    )
}