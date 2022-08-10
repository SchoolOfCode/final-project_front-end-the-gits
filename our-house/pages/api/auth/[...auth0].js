// pages/api/auth/[...auth0].js
import { handleAuth, handleLogin } from "@auth0/nextjs-auth0";


export default handleAuth({
  async login(req, res) {
    await handleLogin(req, res, {
      authorizationParams: {
        audience: `${process.env.AUTH0_ISSUER_BASE_URL}/api/v2/`,
        scope: 'openid profile email read:current_user update:current_user_metadata'
      },
      returnTo: "/UserProfile",
    });
    var options = {
        theme: {
          logo: 'https://thumbs2.imgbox.com/d3/92/hIE71HWq_t.png'
        }
      };
  },
});