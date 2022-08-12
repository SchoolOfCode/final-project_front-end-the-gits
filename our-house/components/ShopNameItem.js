import React from "react";
import styles from "../styles/ShopNameItem.module.css";
import { RiDeleteBin6Line } from "react-icons/ri"
import { useUser } from "@auth0/nextjs-auth0";
import { useUserMeta } from "../utils/UserMetaContext";

// props, some are not being used yet as they are part of the stretch goals
const ShopNameItem = ({
  name,
  icon,
  id,
  deleteListItem,
  toggleItemAsCompleted,
  setNameClicked,
  setListItems,
  compareName,
}) => {
  // calling the Auth0 hook
  const { user, error, isLoading } = useUser();
  // getting the latest user meta data
  const metaUser = useUserMeta()

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;
  // calls the props to open shopping list
  function handleClick() {
    setNameClicked(name);
    compareName(name);
  }

  return (
    user && (
      <div className={styles.shopItemContainer}>
       {/*avatar section */} 
        <div className={styles.background} style={{ backgroundColor: metaUser.user_metadata.theme_id }}>
          <img src={metaUser.user_metadata.avatar_id} alt="user avatar icon" width={55} />
        </div>
        <div className={styles.shopNameItem}>
          <div className={styles.cardTop}></div>
           {/*shopping list name  */}
          <div className={styles.cardText}>
            <a onClick={handleClick}>
              <p>
                {user.name} {name}'s List
              </p>
            </a>
          </div>

          <div className={styles.icons}>
            <div className={styles.iconLeft}></div>

            <div className={styles.iconRight}>
              {/* <div className={styles.edit}>
                <FaRegEdit />
              </div> */}
              <div
                className={styles.delete}
                onClick={() => {
                  deleteListItem(name);
                }}
              >
                <RiDeleteBin6Line />
              </div>
            </div>
          </div>
        </div>
        <div
          className={`${styles.avatarsNotification} theme-avatar-notification`}
        >
          <div className={styles.avatarBox1}>
            <div className={styles.notification1}>1</div>
            <img
              className={styles.usersAvatar}
              src="/user_avatar_1.svg"
              width={20}
            />
          </div>
          <div className={styles.avatarBox2}>
            <div className={styles.notification2}>2</div>
            <img className={styles.usersAvatar} src="/user_avatar_1.svg" />
          </div>
          <div className={styles.avatarBox3}>
            <div className={styles.notification3}>4</div>
            <img className={styles.usersAvatar} src="/user_avatar_1.svg" />
          </div>
          <div className={styles.avatarBox4}>
            <div className={styles.notification4}>2</div>
            <img className={styles.usersAvatar} src="/user_avatar_1.svg" />
          </div>
        </div>
      </div>
    )
  );
};
export default ShopNameItem;
