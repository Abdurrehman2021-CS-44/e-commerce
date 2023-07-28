import { createRoot } from 'react-dom/client';
import App from "./components/App";
import { Auth0Provider } from '@auth0/auth0-react';


const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript

root.render(
    <>
        <Auth0Provider
            domain="dev-vheyo3eft5u0pte1.uk.auth0.com"
            clientId="DAYRTI7EWjRRxxn9Wm4KlPuZJVMZc46n"
            authorizationParams={{
            redirect_uri: window.location.origin
            }}
        >
            <App/>
        </Auth0Provider>
    </>
    
);