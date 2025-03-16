import { Avatar } from "@chakra-ui/react";


type AvatarUserProps = {
    name: string,
    src?: string,
    color?: string,
}


export default function AvatarUser({ name, src, color = "red" }: AvatarUserProps) {
    return (

        <Avatar.Root colorPalette={color}>
            <Avatar.Fallback name={name} />
            <Avatar.Image />
        </Avatar.Root>
    )
}