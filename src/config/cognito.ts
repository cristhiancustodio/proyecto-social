type CognitoAuthConfigProps = {
    authority: string;
    client_id: string;
    redirect_uri: string;
    response_type: string;
    scope: string;
}


export const cognitoAuthConfig: CognitoAuthConfigProps = {
    authority: import.meta.env.VITE_authority,
    client_id: import.meta.env.VITE_client_id,
    redirect_uri: import.meta.env.VITE_redirect_uri,
    response_type: "code",
    scope: "email openid phone",
};

export const signOutRedirectCredentials = {
    clientId : import.meta.env.VITE_client_id,
    logoutUri : import.meta.env.VITE_uri_logout,
    cognitoDomain : import.meta.env.VITE_cognito_domain,
}