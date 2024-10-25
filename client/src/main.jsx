import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { GoogleOAuthProvider } from '@react-oauth/google';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<GoogleOAuthProvider clientId="<your_client_id>">
    <App />
</GoogleOAuthProvider>
  </React.StrictMode>,
)
