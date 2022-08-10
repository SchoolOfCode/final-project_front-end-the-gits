import React from 'react';
import { useUser } from '@auth0/nextjs-auth0';
import styles from "../styles/Profile.module.css"

export default function Profile() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  console.log("USER: ", user)

  async function getMeta() {
    const response = await fetch(`/api/userData/${user.sub}`)
    const data = await response.json();

    console.log("USER LATEST: ", data)
  }

  async function updateMeta() {
    const update = {
      user_metadata: {
        theme_id: 22,
        household: 'room-11'
      },
      user_id: user.sub
    }

    const response = await fetch(`/api/userData`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(update)
    })
    const data = await response.json();

    console.log("USER LATEST: ", data)
  }

  return (
    user && (
      <div className={styles.profile}>
        <div className={styles.bar}>
            <div className={styles.right}>
                <h2 onClick={updateMeta}>{user.name}</h2>
                
            </div>
        <img src='/user_avatar_1.svg' alt={user.name} />
        </div>
      </div>
    )
  );
}