import { Flex, Icon, IconButton, Text } from "@chakra-ui/react";
import { BiComment, BiLike } from "react-icons/bi";


type LikeProps = {

    active: boolean,
    count: number
}

type AccionesPublicacionProps = {
    like: LikeProps,
    setLike: (like: LikeProps) => void
}


export default function AccionesPublicacion({ like, setLike }: AccionesPublicacionProps) {
    const handleLike = (): void => {
        setLike({
            active: !like.active,
            count: like.active ? like.count - 1 : like.count + 1
        })
    }
    return (
        <Flex display="flex" spaceX={4}>
            <Flex alignItems={"center"} gap={1}>
                <IconButton color={like.active ? 'tomato' : ''} variant="ghost" size="md" onClick={handleLike}>
                    <BiLike />
                    <Text>{like.count}</Text>
                </IconButton>
            </Flex>
            <Flex alignItems={"center"} gap={1} >
                <IconButton variant="ghost" size="md" style={{ pointerEvents: 'none' }}>
                    <BiComment />
                    <Text>25</Text>
                </IconButton>
            </Flex>
        </Flex>
    )
}