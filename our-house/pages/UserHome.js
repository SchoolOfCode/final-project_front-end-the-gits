import React from 'react'
import styles from '../styles/UserHome.module.css'
import Navbar from '../components/Navbar.js'
import Link from "next/link";
import { Layout } from '../components/Layout';


const UserHome = () => {

  const appCards = [
    {
      title: 'Shopping',
      icon: '/shopping_icon.svg'
  },
  {
    title: 'Chores',
    icon: '/school_icon.svg'
},
{
  title: 'Social Events',
  icon: '/glasses_icon.svg'
},
{
  title: 'Bills',
  icon: '/bills_icon.svg'
},
{
  title: 'Birthdays',
  icon: '/shopping_icon.svg'
},
{
  title: 'School',
  icon: '/school_icon.svg'
},
{
  title: 'Appointments',
  icon: '/shopping_icon.svg'
}
, {
  title: 'Finances',
  icon: '/bills_icon.svg'
}
]






  return (
    <div className={styles.shoppinglist}>
    <div className={styles.profile}>
        <div className={styles.bar}>
            <div className={styles.right}>
                <h2> Terry Tibbs</h2>
                
            </div>
        <img src='/user_avatar_1.svg' width={20} height={70} alt='lee' />
        </div>
      </div>
    <div className={styles.userHome}>
      {/* <div className={styles.cards}>
        {appCards.map((appcard) => (
          <div className={styles.card}>
          
          <img className={styles.avatar} src={appcard.icon} width={102}  ></img>
          <div className={styles.title}>{appcard.title}</div>
          </div>
        
        ))}
        </div> */}
       
        

      <div className={styles.cards}>
        <Link href="/ShopName">
            <a>
            <div className={styles.cardContainer}>
                <img className={styles.avatar} src='/shopping_icon.svg'></img>  
                <div className={styles.card}>             
                    <div className={styles.title}>Shopping</div>                
                </div>
            </div>
            <div className={styles.avatarsNotification}>
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
                <img className={styles.avatar} src='/school_icon.svg'></img>  
                <div className={styles.card}>             
                    <div className={styles.title}>Chores</div>                
                </div>
            </div>
            <div className={styles.avatarsNotification}>
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
                <img className={styles.avatar} src='/glasses_icon.svg'></img>  
                <div className={styles.card}>             
                    <div className={styles.title}>Appointments</div>                
                </div>
            </div>
            <div className={styles.avatarsNotification}>
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
                <img className={styles.avatar} src='/bills_icon.svg' ></img>  
                <div className={styles.card}>             
                    <div className={styles.title}>Household Bills</div>                
                </div>
            </div>
            <div className={styles.avatarsNotification}>
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
                <img className={styles.avatar} src='/school_icon.svg'></img>  
                <div className={styles.card}>             
                    <div className={styles.title}>School Events</div>                
                </div>
            </div>
            <div className={styles.avatarsNotification}>
                  
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
                <img className={styles.avatar} src='/glasses_icon.svg'></img>  
                <div className={styles.card}>             
                    <div className={styles.title}>Social Events</div>                
                </div>
            </div>
            <div className={styles.avatarsNotification}>
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
                    <img className={styles.avatar} src='/shopping_icon.svg' ></img>  
                    <div className={styles.card}>             
                        <div className={styles.title}>Birthdays</div>                
                    </div>
                
                <div className={styles.avatarsNotification}>
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
                <img className={styles.avatar} src='/school_icon.svg' ></img>  
                <div className={styles.card}>             
                    <div className={styles.title}>Finances</div>                
                </div>
            </div>
            <div className={styles.avatarsNotification}>
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

   </div>
  )
  }


export default UserHome