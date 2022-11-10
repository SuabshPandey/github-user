import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import styles from "./User.module.css";
import { NavLink, useParams } from "react-router-dom";
import { baseUrl } from "../../axiosInstance";
import RepoComponent from "../../components/UI/RepoComponent";

const User = () => {
  const param = useParams().login;

  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);

  const [userDetail, setUserDetail] = useState({});
  const [userRepos, setUserRepos] = useState([]);

  // Pagination Function
  const handlePrev = () => {
    if (page > 1) {
      setPage(page - 1);
    } else {
      setPage(1);
    }
  };

  const handleNext = () => {
    setPage((page) => page + 1);
  };

  const handlePageLimit = (e) => {
    console.log("Option value", e.target.value);
    const value = e.target.value;
    setLimit(parseInt(value));
  };

  useEffect(() => {
    const fetchUserDetail = async () => {
      const { data } = await baseUrl.get(`/users/${param}`);
      const repoResponse = await baseUrl.get(
        `/users/${param}/repos?per_page=${limit}&page=${page}`
      );

      setUserDetail(data);
      console.log("User", data);
      console.log("Repos", repoResponse?.data);
      setUserRepos(repoResponse?.data);
    };
    fetchUserDetail();
    // eslint-disable-next-line
  }, [page, limit]);

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
            src={
              userDetail.avatar_url
                ? userDetail.avatar_url
                : "/images/github.png"
            }
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
              {userDetail.location === null
                ? "Not Available"
                : userDetail.location}
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
      <div className={styles.user_repo_list}>
        <div className={styles.page_options}>
          <label>
            <small>Per Page</small>
            <select onChange={handlePageLimit}>
              <option value="10">10</option>
              <option value="20">25</option>
              <option value="50">50</option>
            </select>
          </label>
          <small className={styles.total_pages}>
            Total Repsitory:{" "}
            {userDetail.public_repos ? userDetail.public_repos : 0}
          </small>

          <div className={styles.pagination_div}>
            <button onClick={handlePrev}>{page}</button>
            <button onClick={handleNext}>{page + 1}</button>
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
    </div>
  );
};

export default User;
