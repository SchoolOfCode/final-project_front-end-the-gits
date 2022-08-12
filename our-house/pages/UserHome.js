import React from 'react'
import styles from '../styles/UserHome.module.css'
import Link from "next/link";


const UserHome = () => {
  // Displays the cards items which links the user to the pages in the site
  // currently hardcoded, they will be moved to use a component as streatch goal
  return (
    <div className={styles.userHome}>
        
      <div className={styles.cards}>
        <Link href="/ShopName">
					<a>
					<div className={styles.cardContainer}>
						<div className={`${styles.cardIcon} ${styles.shopping}`}>
								<img className={styles.avatar } src='/shopping_icon.svg'></img>  
						</div>
						<div className={styles.card}>             
								<div className={styles.title}>Shopping</div>                
						</div>
					</div>
					<div className={`${styles.avatarsNotification} theme-avatar-notification`}>
						<div className={styles.avatarBox1}>
								<div className={styles.notification1}>1</div>
								<img className={styles.usersAvatar} src='/user_avatar_1.svg' width={20}  />
								
						</div>
						<div className={styles.avatarBox2}>
								<div className={styles.notification2}>2</div>
								<img className={styles.usersAvatar} src='/user_avatar_1.svg'   />                      
						</div>
						<div className={styles.avatarBox3}>
								<div className={styles.notification3}>4</div>
								<img className={styles.usersAvatar} src='/user_avatar_1.svg'   />                      
						</div>
						<div className={styles.avatarBox4}>
								<div className={styles.notification4}>2</div>
								<img className={styles.usersAvatar} src='/user_avatar_1.svg'   />                      
						</div>
					</div>
					</a>
        </Link>
        <Link href="/Chores">
          <a>
            <div className={styles.cardContainer}>
                <div className={`${styles.cardIcon} ${styles.chores}`}>
                    <img className={styles.avatar} src='/chores_icon.svg'></img>  
                </div>
                <div className={styles.card}>             
                    <div className={styles.title}>Chores</div>                
                </div>

            </div>
            <div className={`${styles.avatarsNotification} theme-avatar-notification`}>
							<div className={styles.avatarBox1}>
								<div className={styles.notification1}>1</div>
								<img className={styles.usersAvatar} src='/user_avatar_1.svg' width={20}  />
							</div>
							<div className={styles.avatarBox2}>
								<div className={styles.notification2}>3</div>
								<img className={styles.usersAvatar} src='/user_avatar_1.svg'   />                      
							</div>
							<div className={styles.avatarBox4}>
								<div className={styles.notification4}>5</div>
								<img className={styles.usersAvatar} src='/user_avatar_1.svg'   />                      
							</div>
						</div>
          </a>
        </Link>
        <Link href="/Appointments">
          <a>
            <div className={styles.cardContainer}>
							<div className={`${styles.cardIcon} ${styles.appointments}`}>
								<img className={styles.avatar} src='/appointments_icon.svg'></img>  
							</div>
							<div className={styles.card}>             
								<div className={styles.title}>Appointments</div>                
							</div>
            </div>
            <div className={`${styles.avatarsNotification} theme-avatar-notification`}>
							<div className={styles.avatarBox1}>
								<div className={styles.notification1}>2</div>
								<img className={styles.usersAvatar} src='/user_avatar_1.svg' width={20}  />
							</div>
							<div className={styles.avatarBox3}>
								<div className={styles.notification3}>3</div>
								<img className={styles.usersAvatar} src='/user_avatar_1.svg'   />                      
							</div>
							<div className={styles.avatarBox4}>
								<div className={styles.notification4}>1</div>
								<img className={styles.usersAvatar} src='/user_avatar_1.svg'   />                      
							</div>
						</div>
          </a>
        </Link>
        <Link href="/Bills">
          <a>
            <div className={styles.cardContainer}>
							<div className={`${styles.cardIcon} ${styles.bills}`}>
									<img className={styles.avatar} src='/bills_icon.svg'></img>  
							</div>
							<div className={styles.card}>             
								<div className={styles.title}>Household Bills</div>                
							</div>
            </div>
            <div className={`${styles.avatarsNotification} theme-avatar-notification`}>
							<div className={styles.avatarBox1}>
								<div className={styles.notification1}>1</div>
								<img className={styles.usersAvatar} src='/user_avatar_1.svg' width={20}  />
							</div>
							<div className={styles.avatarBox2}>
								<div className={styles.notification2}>1</div>
								<img className={styles.usersAvatar} src='/user_avatar_1.svg'   />                      
							</div>
						</div>
          </a>
        </Link>
        <Link href="/School">
            <a>
            <div className={styles.cardContainer}>
                <div className={`${styles.cardIcon} ${styles.school}`}>
                    <img className={styles.avatar } src='/school_icon.svg'></img>  
                </div> 
                <div className={styles.card}>             
                    <div className={styles.title}>School Events</div>                
                </div>
            </div>
            <div className={`${styles.avatarsNotification} theme-avatar-notification`}>
                  
                  <div className={styles.avatarBox2}>
                      <div className={styles.notification2}>1</div>
                      <img className={styles.usersAvatar} src='/user_avatar_1.svg'   />                      
                  </div>
                  
                </div>
            </a>
        </Link>
        <Link href="/Social_events">
            <a>
            <div className={styles.cardContainer}>
                <div className={`${styles.cardIcon} ${styles.events}`}>
                    <img className={styles.avatar } src='/glasses_icon.svg'></img>  
                </div>  
                <div className={styles.card}>             
                    <div className={styles.title}>Social Events</div>                
                </div>
            </div>
            <div className={`${styles.avatarsNotification} theme-avatar-notification`}>
                  <div className={styles.avatarBox1}>
                      <div className={styles.notification1}>1</div>
                      <img className={styles.usersAvatar} src='/user_avatar_1.svg' width={20}  />
                      
                  </div>
                  <div className={styles.avatarBox2}>
                      <div className={styles.notification2}>2</div>
                      <img className={styles.usersAvatar} src='/user_avatar_1.svg'   />                      
                  </div>
                  <div className={styles.avatarBox3}>
                      <div className={styles.notification3}>4</div>
                      <img className={styles.usersAvatar} src='/user_avatar_1.svg'   />                      
                  </div>
                  <div className={styles.avatarBox4}>
                      <div className={styles.notification4}>2</div>
                      <img className={styles.usersAvatar} src='/user_avatar_1.svg'   />                      
                  </div>
                </div>
            </a>
        </Link>
        <Link href="/Birthdays">
            <a>
            <div className={styles.cardContainer}>
                <div className={`${styles.cardIcon} ${styles.birthdays}`}>
                    <img className={styles.avatar } src='/birthday_icon.svg'></img>  
                </div>  
                    <div className={styles.card}>             
                        <div className={styles.title}>Birthdays</div>                
                    </div>
                
                <div className={`${styles.avatarsNotification} theme-avatar-notification`}>
                    <div className={styles.avatarBox1}>
                        <div className={styles.notification1}>1</div>
                        <img className={styles.usersAvatar} src='/user_avatar_1.svg' width={20}  />
                        
                    </div>
                    
                    <div className={styles.avatarBox4}>
                        <div className={styles.notification4}>1</div>
                        <img className={styles.usersAvatar} src='/user_avatar_1.svg'   />                      
                    </div>
                  </div>
                </div>
            </a>
        </Link>
        <Link href="/Finances">
            <a>
            <div className={styles.cardContainer}>
                <div className={`${styles.cardIcon} ${styles.finances}`}>
                    <img className={styles.avatar } src='/finances_icon.svg'></img>  
                </div>  
                <div className={styles.card}>             
                    <div className={styles.title}>Finances</div>                
                </div>
            </div>
            <div className={`${styles.avatarsNotification} theme-avatar-notification`}>
                  <div className={styles.avatarBox1}>
                      <div className={styles.notification1}>2</div>
                      <img className={styles.usersAvatar} src='/user_avatar_1.svg' width={20}  />
                      
                  </div>
                  
                  <div className={styles.avatarBox3}>
                      <div className={styles.notification3}>2</div>
                      <img className={styles.usersAvatar} src='/user_avatar_1.svg'   />                      
                  </div>
                  <div className={styles.avatarBox4}>
                      <div className={styles.notification4}>2</div>
                      <img className={styles.usersAvatar} src='/user_avatar_1.svg'   />                      
                  </div>
                </div>
            </a>
        </Link>

      </div>
    </div>
  )
  }


export default UserHome