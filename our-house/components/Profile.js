import React from "react";
import { useUser } from "@auth0/nextjs-auth0";
import styles from "../styles/Profile.module.css";
import Link from "next/link";

export default function Profile() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;
  console.log(user.user_metadata.theme_id)
  return (
    user && (
      <div className={styles.profile}>
        <div className={styles.bar}>
          <div className={styles.right}>
            <h2>{user.name}</h2>
          </div>
          <Link href="/UserProfile">
            <a>
              <img src={user.user_metadata.avatar_id} alt={user.name} style={{backgroundColor: user.user_metadata.theme_id}}/>
            </a>
          </Link>
        </div>
      </div>
    )
  );
}
