import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ClerkProvider } from '@clerk/clerk-react'
import './index.css'
import App from './App.jsx'

const publishableKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!publishableKey) {
  console.warn('[Clerk] VITE_CLERK_PUBLISHABLE_KEY is missing. Sign-in is disabled.')
}

const clerkAppearance = {
  variables: {
    colorPrimary: '#1a4331',
    colorTextOnPrimaryBackground: '#d4af37',
    colorBackground: '#fffdd0',
  },
  elements: {
    modalContent: {
      backgroundColor: '#fffdd0',
      boxShadow: 'none',
      zIndex: 3000,
    },
    modalBackdrop: {
      zIndex: 2999,
    },
    formButtonPrimary: {
      backgroundColor: '#1a4331',
      color: '#d4af37',
      boxShadow: 'none',
    },
    userButtonPopoverCard: {
      backgroundColor: '#fffdd0',
      boxShadow: 'none',
    },
  },
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {publishableKey ? (
      <ClerkProvider publishableKey={publishableKey} appearance={clerkAppearance}>
        <App clerkEnabled />
      </ClerkProvider>
    ) : (
      <App clerkEnabled={false} />
    )}
  </StrictMode>,
)
