// App.js

import { Box, Button } from "@chakra-ui/react";
import { signOutRedirectCredentials } from "../../config/cognito";
import { useEffect } from "react";
import { useAuth } from "react-oidc-context";

function Login() {
	const auth = useAuth();	
	const signOutRedirect = () => {
		const clientId = signOutRedirectCredentials.clientId;
		const logoutUri = signOutRedirectCredentials.logoutUri
		const cognitoDomain = signOutRedirectCredentials.cognitoDomain;
		window.location.href = `${cognitoDomain}/logout?client_id=${clientId}&logout_uri=${encodeURIComponent(logoutUri)}`;
	};
	useEffect(() => {
		
	}, []);



	if (auth.isLoading) {
		return <Box>Loading...</Box>;
	}

	if (auth.error) {
		return <Box>Encountering error... {auth.error.message}</Box>;
	}
	if (auth.isAuthenticated) {
		return (
			<Box>
				<pre> Hello: {auth.user?.profile.email} </pre>
				<pre> ID Token: {auth.user?.id_token} </pre>
				<pre> Access Token: {auth.user?.access_token} </pre>
				<pre> Refresh Token: {auth.user?.refresh_token} </pre>

				<Button onClick={() => auth.removeUser()}>Sign out</Button>
			</Box>
		);
	}
	return (
		<Box>
			<Button onClick={() => auth.signinRedirect()}>Sign in</Button>
			<Button onClick={() => signOutRedirect()}>Sign out</Button>
		</Box>
	);
}

export default Login;