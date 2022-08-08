import React, { useState } from 'react'
import styles from "../styles/UserProfile.module.css"
import { useUser } from '@auth0/nextjs-auth0';

const UserProfile = () => {

  const avatars = [
    {avatar: "/avatars/avatar_1.svg", avatar_id: 0}, {avatar: "/avatars/avatar_2.svg", avatar_id: 1}, {avatar: "/avatars/avatar_3.svg", avatar_id: 2}, {avatar: "/avatars/avatar_4.svg", avatar_id: 4}, {avatar: "/avatars/avatar_5.svg", avatar_id: 5}, {avatar: "/avatars/avatar_6.svg", avatar_id: 6}, {avatar: "/avatars/avatar_7.svg", avatar_id: 7}, {avatar: "/avatars/avatar_8.svg", avatar_id: 8}, {avatar: "/avatars/avatar_9.svg", avatar_id: 9}, {avatar: "/avatars/avatar_10.svg", avatar_id: 10}, {avatar: "/avatars/avatar_11.svg", avatar_id: 11}, {avatar: "/avatars/avatar_12.svg", avatar_id: 12}, {avatar: "/avatars/avatar_13.svg", avatar_id: 13}, {avatar: "/avatars/avatar_14.svg", avatar_id: 14}, {avatar: "/avatars/avatar_15.svg", avatar_id: 15}, {avatar: "/avatars/avatar_16.svg", avatar_id: 16}, {avatar: "/avatars/avatar_17.svg", avatar_id: 17}, {avatar: "/avatars/avatar_18.svg", avatar_id: 18}, {avatar: "/avatars/avatar_19.svg", avatar_id: 19}, {avatar: "/avatars/avatar_20.svg", avatar_id: 20}, {avatar: "/avatars/avatar_21.svg", avatar_id: 21}, {avatar: "/avatars/avatar_22.svg", avatar_id: 22}, {avatar: "/avatars/avatar_23.svg", avatar_id: 23}, {avatar: "/avatars/avatar_24.svg", avatar_id: 24}, {avatar: "/avatars/avatar_25.svg", avatar_id: 25}, {avatar: "/avatars/avatar_26.svg", avatar_id: 26}, {avatar: "/avatars/avatar_27.svg", avatar_id: 27}, {avatar: "/avatars/avatar_28.svg", avatar_id: 28}, {avatar: "/avatars/avatar_29.svg", avatar_id: 29}, {avatar: "/avatars/avatar_30.svg", avatar_id: 30}, {avatar: "/avatars/avatar_31.svg", avatar_id: 31}, {avatar: "/avatars/avatar_32.svg", avatar_id: 32},{avatar: "/avatars/avatar_33.svg", avatar_id: 33},{avatar: "/avatars/avatar_34.svg", avatar_id: 34},{avatar: "/avatars/avatar_35.svg", avatar_id: 35},{avatar: "/avatars/avatar_36.svg", avatar_id: 36},
  ]

  const theme = [
    {background_color: "rgb(248, 53, 53)", theme_id: 0}, {background_color: "rgb(63, 236, 135)", theme_id: 1}, {background_color: "rgb(73, 196, 245)", theme_id: 2}, {background_color: "rgb(133, 77, 238)", theme_id: 3}, {background_color: "rgb(77, 133, 238)", theme_id: 4}, {background_color: "rgb(206, 77, 238)", theme_id: 5}, {background_color: "rgb(238, 235, 77)", theme_id: 6}, {background_color: "rgb(238, 77, 184)", theme_id: 7}, {background_color: "blue", theme_id: 8}, {background_color: "green", theme_id: 9}, {background_color: "brown", theme_id: 10}, {background_color: "coral", theme_id: 11},{background_color: "coral", theme_id: 12}, {background_color: "coral", theme_id: 13}, {background_color: "coral", theme_id: 14}, {background_color: "coral", theme_id: 15},
  ]

  const [displayAvatar, setDisplayAvatar] = useState("/avatars/avatar_default.svg")
  const [changeColour, setChangeColour] = useState("#868686")


  const handleClick = (index) => {

    
    
    for (let i = 0; i < avatars.length; i++) {
      if (index === avatars[i].avatar_id)     
    {
      displayAvatar = avatars[i].avatar;
   
      setDisplayAvatar(displayAvatar)
     
  }}
  
    
  console.log(displayAvatar)
  }


  const changeBackground = (index) => {
    
    for (let i = 0; i < theme.length; i++) {
      if (index === theme[i].theme_id)     
    {
      changeColour = theme[i].background_color;
   
      setChangeColour(changeColour)
     
  }}

    console.log(changeColour)
  }
  
  return (
    <div className={styles.userProfile}>
          <div className={styles.profile}>
            <div className={styles.bar}>
                <div className={styles.right}>
                    <h2>{}</h2>
            
          </div>
            <div className={styles.profileCirle}  style={{backgroundColor: changeColour}}>
               <img className={styles.img} src={displayAvatar} alt="" />
            </div>
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
                  {avatars.map((avatar, index, id) => ( 
                    <div key={index} id={avatar.avatar_id} className={styles.avatarCirle} onClick={() => handleClick(index)}>
                      <img src={avatar.avatar} alt="" />
                    </div>
                  ))
                  }
              </div>
            </div>
            <div className={styles.mainRight}>
            <div className={styles.h2}>
                <h2>2. Choose Your Theme</h2>
            </div>
            <div className={styles.colourBox}>
                  {theme.map((color, index) => (
                    <div key={index} className={styles.colour} style={{backgroundColor: color.background_color}} onClick={() => {changeBackground(index)}}></div>
                  ))}
                
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