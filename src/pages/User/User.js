import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import styles from "./User.module.css";
import { NavLink, useParams } from "react-router-dom";
import { baseUrl } from "../../axiosInstance";
import RepoComponent from "../../components/UI/RepoComponent";

const User = () => {
  const param = useParams().login;
  console.log("Param", param);

  const [userDetail, setUserDetail] = useState({});

  const [userRepos, setUserRepos] = useState([]);

  useEffect(() => {
    const fetchUserDetail = async () => {
      const { data } = await baseUrl.get(`/users/${param}`);
      const repoResponse = await baseUrl.get(`/users/${param}/repos`);
      console.log(data);
      console.log(repoResponse.data);

      setUserDetail(data);
      setUserRepos(repoResponse?.data);
    };
    fetchUserDetail();
    // eslint-disable-next-line
  }, []);

  return (
    <div className={styles.user_container}>
      <div className={styles.back_btn_div}>
        <NavLink className={styles.back_btn} to="/">
          <small>Back</small>
          <Icon
            className={styles.back_icon}
            icon="carbon:previous-filled"
          />{" "}
        </NavLink>
      </div>

      <div className={styles.user_information}>
        <div className={styles.user_image_div}>
          <img
            className={styles.user_image}
            src={userDetail ? userDetail.avatar_url : ""}
            // src="/images/github.png"
            alt={userDetail ? userDetail.login : "user"}
          />
        </div>
        <div className={styles.user_content}>
          <h3 className={styles.user_name}>{userDetail?.name}</h3>
          <div className={styles.more_data}>
            <h4 className={styles.user_info_detail}>
              <Icon className={styles.user_icons} icon="fa-solid:users" />
              Followers {userDetail.followers}, Following {userDetail.following}
            </h4>
            <p className={styles.user_info_detail}>
              <Icon
                className={styles.user_icons}
                icon="material-symbols:location-on"
              />
              {userDetail.location}
            </p>
            <p className={styles.user_info_detail}>
              <Icon className={styles.user_icons} icon="iconoir:repository" />
              {userDetail.public_repos} Repositories
            </p>
            <a
              href={userDetail.html_url}
              target="_blank"
              rel="noreferrer"
              className={styles.user_info_detail}
            >
              <Icon className={styles.user_icons} icon="mdi:github" />
              Github Profile
            </a>
          </div>
        </div>
      </div>
      {userRepos ? (
        userRepos.map((repo) => {
          return <RepoComponent key={repo.id} repo={repo} />;
        })
      ) : (
        <>
          <h2>No Repos</h2>
        </>
      )}
    </div>
  );
};

export default User;
