import React from 'react'
import styles from "../styles/UserProfile.module.css"
import { useUser } from '@auth0/nextjs-auth0';

const UserProfile = () => {

  const avatars = [
    {avatar: "/avatars/avatar_1", avatar_id: 1}, {avatar: "/avatars/avatar_2", avatar_id: 2}, {avatar: "/avatars/avatar_3", avatar_id: 3}, {avatar: "/avatars/avatar_4", avatar_id: 4}, {avatar: "/avatars/avatar_5", avatar_id: 5}, {avatar: "/avatars/avatar_6", avatar_id: 6}, {avatar: "/avatars/avatar_7", avatar_id: 7}, {avatar: "/avatars/avatar_8", avatar_id: 8}, {avatar: "/avatars/avatar_9", avatar_id: 9}, {avatar: "/avatars/avatar_10", avatar_id: 10}, {avatar: "/avatars/avatar_11", avatar_id: 11}, {avatar: "/avatars/avatar_12", avatar_id: 12}, {avatar: "/avatars/avatar_13", avatar_id: 13}, {avatar: "/avatars/avatar_14", avatar_id: 14}, {avatar: "/avatars/avatar_15", avatar_id: 15}, {avatar: "/avatars/avatar_16", avatar_id: 16}, {avatar: "/avatars/avatar_17", avatar_id: 17}, {avatar: "/avatars/avatar_18", avatar_id: 18}, {avatar: "/avatars/avatar_19", avatar_id: 19}, {avatar: "/avatars/avatar_20", avatar_id: 20}, {avatar: "/avatars/avatar_21", avatar_id: 21}, {avatar: "/avatars/avatar_22", avatar_id: 22}, {avatar: "/avatars/avatar_23", avatar_id: 23}, {avatar: "/avatars/avatar_24", avatar_id: 24}, {avatar: "/avatars/avatar_25", avatar_id: 25}, {avatar: "/avatars/avatar_26", avatar_id: 26}, {avatar: "/avatars/avatar_27", avatar_id: 27}, {avatar: "/avatars/avatar_28", avatar_id: 28}, {avatar: "/avatars/avatar_29", avatar_id: 29}, {avatar: "/avatars/avatar_30", avatar_id: 30}, {avatar: "/avatars/avatar_31", avatar_id: 31}, {avatar: "/avatars/avatar_32", avatar_id: 32},
  ]

  

  // const { user } = useUser();


  
  return (
    <div className={styles.userProfile}>
          <div className={styles.profile}>
            <div className={styles.bar}>
                <div className={styles.right}>
                    <h2>{}</h2>
            
          </div>
            <img src='/user_avatar_1.svg' alt="" />
            </div>
          </div>
        
          <div className={styles.heading}>
            <h1>Create Your Profile</h1>
          </div>
          <div className={styles.main}>
            <div className={styles.mainLeft}>
              <div className={styles.h2}>
                <h2>1. Choose Your Avatar</h2>
                </div>
              <div className={styles.avatarBox}>

                
              </div>
            </div>
            <div className={styles.mainRight}>
            <div className={styles.h2}>
                <h2>2. Choose Your Theme</h2>
            </div>
            <div className={styles.colourBox}>

                
            </div>
            </div>            
          </div>
          <div className={styles.submit}>
            <button>Submit</button>
          </div>
    </div>
  )
}

export default UserProfile;