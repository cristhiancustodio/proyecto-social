// App.js

import { Box, Button } from "@chakra-ui/react";
import { useEffect } from "react";
import { useAuth } from "react-oidc-context";

function Login() {
	const auth = useAuth();

	const signOutRedirect = () => {
		const clientId = "";
		const logoutUri = "http://localhost:5173/";
		const cognitoDomain = "";
		window.location.href = `${cognitoDomain}/logout?client_id=${clientId}&logout_uri=${encodeURIComponent(logoutUri)}`;
	};

	if (auth.isLoading) {
		return <div>Loading...</div>;
	}

	if (auth.error) {
		return <div>Encountering error... {auth.error.message}</div>;
	}
	useEffect(() => {
		console.log(auth);
	}, []);
	
	if (auth.isAuthenticated) {
		return (
			<div>
				<pre> Hello: {auth.user?.profile.email} </pre>
				<pre> ID Token: {auth.user?.id_token} </pre>
				<pre> Access Token: {auth.user?.access_token} </pre>
				<pre> Refresh Token: {auth.user?.refresh_token} </pre>

				<Button onClick={() => auth.removeUser()}>Sign out</Button>
			</div>
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