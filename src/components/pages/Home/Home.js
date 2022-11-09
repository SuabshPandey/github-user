import React from "react";
import styles from "./Home.module.css";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div className={`${styles.home_container} container`}>
      <div className={styles.search_form}>
        <h2>Search Github Users</h2>
        <form>
          <input type="text" placeholder="Enter username..." />
          <button>Search</button>
        </form>
      </div>
      <div className={styles.search_results}>
        <div className={styles.user}>
          <div className={styles.image_div}>
            <img
              className={styles.user_img}
              src="images/me-rect.jpg"
              alt="user"
            />
          </div>
          <div className={styles.user_info}>
            <h4>Username</h4>
            <small>bio</small>
            <NavLink to="/user">View Profile</NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
