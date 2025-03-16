import { Box } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import CardPublicacion from "./components/CardPublicacion";



type PostProps = {
    ids?: number
}

export default function Post({ ids }: PostProps) {

    const { id, segundo } = useParams();

    return (
        <Box>
            <CardPublicacion />
        </Box>
    )
}