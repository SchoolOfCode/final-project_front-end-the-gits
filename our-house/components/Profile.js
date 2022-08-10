import React, { useEffect, useState } from "react";
import { useUser } from "@auth0/nextjs-auth0";
import styles from "../styles/Profile.module.css";
import Link from "next/link";

export default function Profile() {
  const { user, error, isLoading } = useUser();
  const [newMeta, setNewMeta] = useState("");

  useEffect(() => {
    async function fetchNewMeta() {
      const response = await fetch(`/api/userData/${user.sub}`);
      const data = await response.json();
      setNewMeta(data);
    }
    if (!isLoading) {
      fetchNewMeta();
    }
  }, [isLoading]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    user && (
      <div className={styles.profile}>
        <div className={styles.bar}>
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
