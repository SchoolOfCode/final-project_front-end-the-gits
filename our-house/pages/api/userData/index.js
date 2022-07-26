import { withApiAuthRequired, getAccessToken } from "@auth0/nextjs-auth0";


export default withApiAuthRequired(async function shows(req, res) {
  // request fresh token
  const { accessToken } = await getAccessToken(req, res, {});
  // grab the user metadata object and user id
  const {user_metadata, user_id} = req.body;
  // using the Management API update the user_metadata
  const response = await fetch(`${process.env.AUTH0_ISSUER_BASE_URL}/api/v2/users/${user_id}`, {
    method: 'PATCH',
    headers: {
      authorization: `Bearer ${accessToken}`,
      'content-type': 'application/json'
    },
    body: JSON.stringify({user_metadata})
  })

  const data = await response.json();

  // catch update error
  if (data.statusCode >= 300) {
    res.json({statusCode: data.statusCode, message: data.message});
  }

  res.status(200).json({user_metadata: data.user_metadata})

});
