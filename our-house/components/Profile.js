import React from 'react';
import { useUser } from '@auth0/nextjs-auth0';
import styles from "../styles/Profile.module.css"

export default function Profile() {
  const { user, error, isLoading } = useUser();
  const [userMetadata, setUserMetadata] = useState(null);

  useEffect(() => {
    const getUserMetadata = async () => {
      const domain = "dev-addbc3gj.us.auth0.com";
  
      try {
        const accessToken = await getAccessTokenSilently({
          audience: `https://${domain}/api/v2/`,
          scope: "read:current_user",
        });
  
        const userDetailsByIdUrl = `https://${domain}/api/v2/users/${user.sub}`;
  
        const metadataResponse = await fetch(userDetailsByIdUrl, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
  
        const { user_metadata } = await metadataResponse.json();
  
        setUserMetadata(user_metadata);
      } catch (e) {
        console.log(e.message);
      }
    };
  
    getUserMetadata();
  }, [getAccessTokenSilently, user?.sub]);

  console.log(user)

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    user && (
      <div className={styles.profile}>
        <div className={styles.bar}>
            <div className={styles.right}>
                <h2>{user.name}</h2>
                
            </div>
        <img src='/user_avatar_1.svg' alt={user.name} />
        </div>
      </div>
    )
  );
}