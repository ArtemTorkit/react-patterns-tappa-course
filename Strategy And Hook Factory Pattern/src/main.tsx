import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import UserContextProvider from './provider/UserContextProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <UserContextProvider type={'json'}>
      <App />
    </UserContextProvider>
  </StrictMode>,
)
