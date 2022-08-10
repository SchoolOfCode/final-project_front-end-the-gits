import React, { useEffect, useState } from "react";
import { useUser } from "@auth0/nextjs-auth0";
import styles from "../styles/Profile.module.css";
import Link from "next/link";
import { useUserMeta ,useUserMetaDispatch } from "../utils/UserMetaContext";


export default function Profile() {
  const { user, error, isLoading } = useUser();
  const [newMeta, setNewMeta] = useState("");
  const dispatch = useUserMetaDispatch();

  useEffect(() => {
    async function fetchNewMeta() {
      const response = await fetch(`/api/userData/${user.sub}`);
      const data = await response.json();
      setNewMeta(data);
      dispatch({
        type: 'update',
        ...data,
      })
    }
    if (!isLoading) {
      fetchNewMeta();
    }
  }, [isLoading]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  console.log(useUserMeta())

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
                  src={newMeta.user_metadata.avatar_id}
                  alt={user.name}
                  style={{ backgroundColor: newMeta.user_metadata.theme_id }}
                />
              )}
            </a>
          </Link>
        </div>
      </div>
    )
  );
}
