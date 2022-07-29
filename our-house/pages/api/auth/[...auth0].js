// // pages/api/auth/[...auth0].js
// import { handleAuth } from '@auth0/nextjs-auth0';

// console.log('AUTH0_SECRET = ', process.env.AUTH0_SECRET)

// export default handleAuth();

import { handleAuth, handleLogin } from "@auth0/nextjs-auth0";

export default handleAuth({
  async login(req, res) {
    await handleLogin(req, res, {
      returnTo: "/UserHome",
    });
  },
});