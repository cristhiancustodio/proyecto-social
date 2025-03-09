interface CognitoAuthConfigProps {
    authority: string;
    client_id: string;
    redirect_uri: string;
    response_type: string;
    scope: string;
}


export const cognitoAuthConfig : CognitoAuthConfigProps = {
    authority: "",
    client_id: "1",
    redirect_uri: "",
    response_type: "",
    scope: "",
};