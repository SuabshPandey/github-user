import React, { useState } from "react";
import styles from "./Home.module.css";
import { baseUrl } from "../../axiosInstance";
import UserComponent from "../../components/UI/UserComponent";

const Home = () => {
  const [query, setQuery] = useState("");
  const [users, setUsers] = useState([]);

  // Grabbing the value of the input field
  const searchQuery = (e) => {
    const value = e.target.value;
    setQuery(value);
  };

  // Fetching the data from the API

  const fetchUsers = async () => {
    try {
      const { data } = await baseUrl.get(`/search/users?q=${query}`);
      return data?.items;
    } catch (error) {
      console.log(error);
    }
  };

  const handleSearchUser = async (e) => {
    e.preventDefault();
    if (query) {
      const users = await fetchUsers();
      console.log("Are these user Items?", users);
      setUsers(users);
      setQuery("");
    } else {
      alert("Please enter a username");
    }
  };

  return (
    <div className={`${styles.home_container} container`}>
      <div className={styles.search_form}>
        <h2>Search Github Users</h2>
        <form>
          <input
            type="text"
            value={query}
            onChange={searchQuery}
            placeholder="Enter username..."
          />
          <button onClick={handleSearchUser}>Search</button>
        </form>
      </div>
      <div className={styles.search_results}>
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
