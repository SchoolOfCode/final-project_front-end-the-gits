// pages/_app.js
import React from 'react';
import { UserProvider } from '@auth0/nextjs-auth0';
import { Layout } from '../components/Layout';

export default function App({ Component, pageProps }) {
  return (
    <UserProvider>
      <Component {...pageProps} />
    </UserProvider>
  );
}