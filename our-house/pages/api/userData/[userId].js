import { withApiAuthRequired, getAccessToken } from "@auth0/nextjs-auth0";


export default withApiAuthRequired(async function shows(req, res) {
  // request fresh token
  const { accessToken } = await getAccessToken(req, res, {});
  // grab the user metadata object and user id
  const {userId} = req.query;
  // using the Management API update the user_metadata
  const response = await fetch(`https://dev-addbc3gj.us.auth0.com/api/v2/users/${userId}`, {
    headers: {
      authorization: `Bearer ${accessToken}`,
      'content-type': 'application/json'
    }
  })

  const data = await response.json();

  // catch update error
  if (data.statusCode >= 300) {
    res.json({statusCode: data.statusCode, message: data.message});
  }

  res.status(200).json({user_data: data.user_metadata})

});
