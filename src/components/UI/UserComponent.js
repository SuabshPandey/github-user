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
            src={
              user?.owner?.avatar_url
                ? user.owner.avatar_url
                : "/images/github.png"
            }
            alt={user.owner.login}
          />
        </div>
        <div className={styles.user_info}>
          <div className={`${styles.user_info_div}  ${styles.icon_text}`}>
            <Icon
              className={`${styles.user_icons}`}
              icon="iconoir:repository"
            />
            <h3 className={styles.user_name}>
              <a
                target="_blank"
                rel="noreferrer"
                href={`https://github.com/${user?.owner?.login}/${user?.name}`}
              >
                {user?.name}
              </a>
            </h3>
          </div>
          <div className={`${styles.user_info_div}  ${styles.icon_link}`}>
            <Icon
              className={`${styles.user_icons}`}
              icon="ant-design:github-filled"
            />
            <a
              href={`https://github.com/${user?.owner?.login}`}
              rel="noreferrer"
              target="_blank"
            >
              {user?.owner?.login}
            </a>
          </div>
          <div className={`${styles.user_info_div}  ${styles.icon_link}`}>
            <Icon className={`${styles.user_icons}`} icon="bxs:user-detail" />
            <NavLink
              className={styles.user_link}
              to={`/user/${user?.owner.login}`}
            >
              View Details
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserComponent;
