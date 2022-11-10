import React from "react";
import styles from "./UserComponent.module.css";
import { Icon } from "@iconify/react";

import { NavLink } from "react-router-dom";

const UserComponent = ({ user }) => {
  return (
    <div className={styles.search_results}>
      <div className={styles.user}>
        <div className={styles.image_div}>
          <img
            className={styles.user_img}
            src={user.avatar_url ? user.avatar_url : "/images/github.png"}
            alt={user.login}
          />
        </div>
        <div className={styles.user_info}>
          <div className={`${styles.user_info_div}  ${styles.icon_text}`}>
            <Icon className={`${styles.user_icons}`} icon="bxs:user-circle" />
            <h3 className={styles.user_name}>{user?.login}</h3>
          </div>
          <div className={`${styles.user_info_div}  ${styles.icon_link}`}>
            <Icon
              className={`${styles.user_icons}`}
              icon="ant-design:github-filled"
            />
            <a href={user?.html_url} rel="noreferrer" target="_blank">
              View Github Profile
            </a>
          </div>
          <div className={`${styles.user_info_div}  ${styles.icon_link}`}>
            <Icon className={`${styles.user_icons}`} icon="bxs:user-detail" />
            <NavLink className={styles.user_link} to={`/user/${user?.login}`}>
              View Profile
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserComponent;
