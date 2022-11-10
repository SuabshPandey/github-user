import React from "react";
import styles from "./UserComponent.module.css";
import { NavLink } from "react-router-dom";

const UserComponent = ({ user }) => {
  return (
    <div>
      
        <div className={styles.user}>
          <div className={styles.image_div}>
            <img
              className={styles.user_img}
              src={user?.avatar_url}
              alt="user"
            />
          </div>
          <div className={styles.user_info}>
            <h4>{user?.login}</h4>
            <small>{user?.id}</small>
            <NavLink to={`/user/${user?.login}`}>View Profile</NavLink>
          </div>
        </div>
      </div>
  );
};

export default UserComponent;
