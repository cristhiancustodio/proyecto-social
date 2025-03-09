import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

import { ColorModeProvider } from "@/components/ui/color-mode.jsx"
import { ChakraProvider, defaultSystem } from "@chakra-ui/react"

import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from 'react-oidc-context'
import { cognitoAuthConfig } from './config/cognito.js'


createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<ChakraProvider value={defaultSystem}>
			<ColorModeProvider>
				<BrowserRouter>
					<AuthProvider {...cognitoAuthConfig}>
						<App />
					</AuthProvider>
				</BrowserRouter>
			</ColorModeProvider>
		</ChakraProvider>
	</StrictMode>,
)
