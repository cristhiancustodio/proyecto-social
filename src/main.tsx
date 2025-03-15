import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

import { ChakraProvider, defaultSystem } from "@chakra-ui/react"
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from 'react-oidc-context'
import { cognitoAuthConfig } from './config/cognito.js'
import { ColorModeProvider } from './components/ui/color-mode.jsx';
import { Provider } from './components/ui/provider.jsx';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<Provider>
			<ColorModeProvider>
				<BrowserRouter>
					<AuthProvider {...cognitoAuthConfig}>
						<App />
					</AuthProvider>
				</BrowserRouter>
			</ColorModeProvider>
		</Provider>
	</StrictMode>,
)
