import { createListCollection } from "@chakra-ui/react"
import {
    SelectContent,
    SelectItem,
    SelectLabel,
    SelectRoot,
    SelectTrigger,
    SelectValueText,
} from "@/components/ui/select"
import { useState } from "react";

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


export default function Selected({ title, data, change, defecto = "", width = "320px", placeholder = "Seleccione", clear, ...rest }: SelectedProps) {
    const frameworks = createListCollection({
        items: data
    });
    const [selected, setSelected] = useState<PropsOption['value']>(defecto);
    const changing = (value: string) => {
        setSelected(value);
        change(value);
    }
    return (
        <SelectRoot
            collection={frameworks}
            value={selected}
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