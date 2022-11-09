import React from "react";
import { Icon } from "@iconify/react";
import styles from "./User.module.css";

const User = () => {
  return (
    <div className={styles.user_container}>
      <div className={styles.user_information}>
        <div className={styles.user_image_div}>
          <img
            className={styles.user_image}
            src="/images/me-rect.jpg"
            alt="user"
          />
        </div>
        <div className={styles.user_content}>
          <h3 className={styles.user_name}>Subash Pandey</h3>
          <div className={styles.more_data}>
            <div className={styles.user_followers}>
              <h4 className={styles.user_info_detail}>
                <Icon className={styles.user_icons} icon="fa-solid:users" />
                Followers 200, Following 10
              </h4>
              <p className={styles.user_info_detail}>
                <Icon
                  className={styles.user_icons}
                  icon="material-symbols:location-on"
                />
                Location
              </p>
              <p className={styles.user_info_detail}>
                <Icon className={styles.user_icons} icon="mdi:web" />
                site
              </p>
              <p className={styles.user_info_detail}>
                <Icon className={styles.user_icons} icon="mdi:user-circle" />
                github profile
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.user_repos}>
        <h3 className={styles.repo_name}>Repository Name</h3>
        <p className={styles.repo_desp}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente,
          atque.
        </p>
        <div className={styles.repo_details}>
          <small className={styles.repo_activity}>
            <Icon className={styles.repo_icons} icon="carbon:dot-mark" />
            Javascript
          </small>
          <small className={styles.repo_activity}>
            <Icon className={styles.repo_icons} icon="ph:git-fork-bold" />0
          </small>
          <small className={styles.repo_activity}>
            <Icon
              className={styles.repo_icons}
              icon="material-symbols:star-outline-rounded"
            />
            0 
          </small>
          <small className={styles.repo_activity}>
            <Icon
              className={styles.repo_icons}
              icon="ri:git-pull-request-line"
            />
            0
          </small>
          <small className={styles.repo_activity}>Updated at Nov 9.</small>
        </div>
      </div>
    </div>
  );
};

export default User;
