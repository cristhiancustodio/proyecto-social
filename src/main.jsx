import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import { Provider } from './components/ui/provider.jsx';
import { ColorModeProvider } from "@/components/ui/color-mode.jsx"
import { ChakraProvider, defaultSystem, RadioGroupContext } from "@chakra-ui/react"
import theme from './theme.js';
import { BrowserRouter } from 'react-router-dom';
import RouterBase from './routes/index.jsx';

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<ChakraProvider value={defaultSystem}>
			<ColorModeProvider>
				<BrowserRouter>
					
					<App/>
				
				</BrowserRouter>
			</ColorModeProvider>
		</ChakraProvider>
	</StrictMode>,
)
