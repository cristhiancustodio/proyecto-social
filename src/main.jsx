import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { Provider } from './components/ui/provider.jsx';
import { ColorModeProvider } from "@/components/ui/color-mode.jsx"
import { ChakraProvider, defaultSystem, RadioGroupContext } from "@chakra-ui/react"
import theme from './theme.js';
import { AuthProvider } from 'react-oidc-context';
import { cognitoAuthConfig } from './config/cognito.js';

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<ChakraProvider value={defaultSystem}>
			<AuthProvider { ... cognitoAuthConfig}>
				<ColorModeProvider>
					<App />
				</ColorModeProvider>
			</AuthProvider>
		</ChakraProvider>
	</StrictMode>,
)
