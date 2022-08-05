// pages/api/auth/[...auth0].js
import { handleAuth, handleLogin } from "@auth0/nextjs-auth0";


console.log('AUTH0_SECRET = ', process.env.AUTH0_SECRET)
export default handleAuth({
  async login(req, res) {
    await handleLogin(req, res, {
      returnTo: "/UserHome",
    });
    var options = {
        theme: {
          logo: 'https://thumbs2.imgbox.com/d3/92/hIE71HWq_t.png'
        }
      };
  },
});