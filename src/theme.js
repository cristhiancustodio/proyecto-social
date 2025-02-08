
import { createSystem, defineConfig } from '@chakra-ui/react';


const theme = defineConfig({
    config: {
        //useSystemColorMode: false,
        //initialColorMode: "light",
        //cssVarPrefix: "chakra", // Esto usará variables CSS en lugar de clases con hash
    },
});
const system = createSystem(theme)
export default system;