import React, { useEffect, useState } from "react";
import { useUser } from "@auth0/nextjs-auth0";
import styles from "../styles/Profile.module.css";
import Link from "next/link";
import { useUserMeta ,useUserMetaDispatch } from "../utils/UserMetaContext";


export default function Profile() {
  // calling the Auth0 hook
  const { user, error, isLoading } = useUser();
  // stores the latest user meta data
  const [newMeta, setNewMeta] = useState("");
  // uses a reducer to update the meta data context
  const dispatch = useUserMetaDispatch();
  // use an effect to persist the latest meta data
  useEffect(() => {
    async function fetchNewMeta() {
      //  using next.js end point to fetch meta data
      const response = await fetch(`/api/userData/${user.sub}`);
      const data = await response.json();
      setNewMeta(data);
      dispatch({
        type: 'update',
        ...data,
      })
    }
    // wait for Auth0 to finish loading before fetching data
    if (!isLoading) {
      fetchNewMeta();
    }
  }, [isLoading]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    user && (
      <div className={styles.profile}>
        <div className={`${styles.bar} theme-profile-bar`}>
          <div className={styles.right}>
            <h2>{user.name}</h2>
          </div>
          <Link href="/UserProfile">
            <a>
              {!newMeta ? (
                <img
                  src={user.user_metadata.avatar_id}
                  alt={user.name}
                  style={{ backgroundColor: user.user_metadata.theme_id }}
                />
              ) : (
                <img
                  src={newMeta.user_metadata?.avatar_id}
                  alt={user.name}
                  style={{ backgroundColor: newMeta.user_metadata?.theme_id }}
                />
              )}
            </a>
          </Link>
        </div>
      </div>
    )
  );
}
