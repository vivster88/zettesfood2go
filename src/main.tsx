import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Safely catch and ignore third-party browser extension injection noise (e.g. MetaMask / Web3 wallets in iframe)
if (typeof window !== 'undefined') {
  window.addEventListener('unhandledrejection', (event) => {
    if (
      event.reason &&
      (typeof event.reason === 'string' || typeof event.reason.message === 'string')
    ) {
      const msg = typeof event.reason === 'string' ? event.reason : event.reason.message;
      if (
        msg.includes('MetaMask') ||
        msg.includes('ethereum') ||
        msg.includes('wallet') ||
        msg.includes('Failed to connect')
      ) {
        event.preventDefault();
        return;
      }
    }
  });

  window.addEventListener('error', (event) => {
    if (
      event.message &&
      (event.message.includes('MetaMask') ||
        event.message.includes('ethereum') ||
        event.message.includes('Failed to connect to MetaMask'))
    ) {
      event.preventDefault();
      return;
    }
  });
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

