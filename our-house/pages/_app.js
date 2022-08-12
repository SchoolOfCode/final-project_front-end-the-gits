// pages/_app.js
import React from 'react';
import { UserProvider } from '@auth0/nextjs-auth0';
import { Layout } from '../components/Layout';


export default function App({ Component, pageProps }) {
  // wrapping the app in the UserProvider to pass the latest user metadata
  return (
    <UserProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </UserProvider>
  );
}