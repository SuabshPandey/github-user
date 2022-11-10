import React, { useState, useEffect } from "react";
import styles from "./Home.module.css";
import { baseUrl } from "../../axiosInstance";
import UserComponent from "../../components/UI/UserComponent";

const Home = () => {
  const [inputQuery, setInputQuery] = useState("");

  const [users, setUsers] = useState([]);

  const [page, setPage] = useState(1);

  const [limit, setLimit] = useState(10);

  // Grabbing the value of the input field
  const searchQuery = (e) => {
    const value = e.target.value;
    setInputQuery(value);
  };

  // Pagination Function
  const handlePrev = () => {
    // if (page > 1) {
    //   setPage(page - 1);
    // } else {
    //   setPage(1);
    // }
    setPage((page) => {
      if (page === 1) return page;
      else return page - 1;
    });
  };

  const handleNext = () => {
    // setPage(page + 1);
    setPage((page) => page + 1);
  };

  const handlePageLimit = (e) => {
    console.log("Option value", e.target.value);
    const value = e.target.value;
    setLimit(parseInt(value));
    console.log("Limit value", limit);
    console.log("Page value", page);
  };

  // Fetching the data from the API

  // , {
  //   params: {
  //     page: page,
  //     per_page: limit,
  //   },
  // }
  const fetchUsers = async () => {
    try {
      const { data } = await baseUrl.get("/search/users?q=" + inputQuery, {
        params: {
          page,
          per_page: limit,
        },
      });

      return data?.items;
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  const handleSearchUser = async (e) => {
    e.preventDefault();
    if (inputQuery) {
      const items = await fetchUsers();
      setUsers(items);
      setInputQuery("");
    } else {
      alert("Please enter a username");
    }
  };

  useEffect(() => {
    const usersOnChange = async () => {
      if (inputQuery !== "") {
        console.log("Use Effect before function call");

        const items = await fetchUsers();
        console.log("Usersssssssssss", items);
        setUsers(items);
      }
    };
    usersOnChange();
    console.log("Users", users);
    console.log("Page", page);
    console.log("Limit", limit);
    console.log("Use Effect afer function call");

    // eslint-disable-next-line
  }, [page, limit]);

  // const usersOnChange = async () => {
  //   if (inputQuery) {
  //     const items = await fetchUsers();
  //     console.log("Items", items);
  //     setUsers(items);
  //   }
  // };

  // useEffect(() => {
  //   usersOnChange();
  //   console.log("use effect is running");
  // }, [page, limit]);

  return (
    <div className={`${styles.home_container} container`}>
      <div className={styles.search_form}>
        <h2>Search Github Users</h2>
        <form>
          <input
            type="text"
            value={inputQuery}
            onChange={searchQuery}
            placeholder="Enter username..."
          />
          <button onClick={handleSearchUser}>Search</button>
        </form>
      </div>
      <div className={styles.search_results}>
        <div className={styles.page_options}>
          <label>
            <small>Per Page</small>
            <select onChange={handlePageLimit}>
              <option value="10">10</option>
              <option value="20">25</option>
              <option value="50">50</option>
            </select>
          </label>
          <div className={styles.pagination_div}>
            <button onClick={handlePrev}>{page}</button>
            <button onClick={handleNext}>{page + 1}</button>
          </div>
        </div>
        {
          // Displaying the users
          users ? (
            users.map((user) => {
              return <UserComponent key={user?.id} user={user} />;
            })
          ) : (
            <h2>There is nothing to display...</h2>
          )
        }
      </div>
    </div>
  );
};

export default Home;
