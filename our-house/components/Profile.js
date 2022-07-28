import React from 'react';
import { useUser } from '@auth0/nextjs-auth0';
import styles from "../styles/Profile.module.css"

export default function Profile() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    user && (
      <div className={styles.profile}>
        <div>
            <div className={styles.right}>
                <h2> Welcome back, {user.name}</h2>
                <img src={user.picture} alt={user.name} />
            </div>
        </div>
      </div>
    )
  );
}