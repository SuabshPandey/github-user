import React from "react";
import styles from "./Repo.module.css";
import { Icon } from "@iconify/react";

const RepoComponent = ({ repo, userdetails }) => {
  
  return (
    <>
      <div className={styles.user_repos}>
        <h3 className={styles.repo_name}>
          <a
            target="_blank"
            rel="noreferrer"
            href={`https://github.com/${userdetails?.login}/${repo?.name}`}
          >
            {repo?.name}
          </a>
        </h3>
        <p className={styles.repo_desp}>
          {repo.description
            ? `${repo.description.substring(0, 60)} \t...`
            : "No Description"}
        </p>
        <div className={styles.repo_details}>
          <small className={styles.repo_activity}>
            <Icon className={styles.repo_icons} icon="carbon:dot-mark" />
            Language: <b>{repo?.language}</b>
          </small>
          <small className={styles.repo_activity}>
            <Icon className={styles.repo_icons} icon="ph:git-fork-bold" />
            Forks <b> {repo?.forks_count}</b>
          </small>
          <small className={styles.repo_activity}>
            <Icon className={styles.repo_icons} icon="akar-icons:eye" />
            Watcher <b> {repo?.watchers_count}</b>
          </small>
          <small className={styles.repo_activity}>
            <Icon className={styles.repo_icons} icon="cil:star" />
            Stars <b> {repo?.stargazers_count}</b>
          </small>
          <small className={styles.repo_activity}>
            <Icon
              className={styles.repo_icons}
              icon="octicon:issue-opened-16"
            />
            Issues <b>{repo?.open_issues}</b>
          </small>
          <small className={styles.repo_activity}>
            <Icon className={styles.repo_icons} icon="bx:git-branch" />
            Default Branch <b>{repo?.default_branch}</b>
          </small>
          <small className={styles.repo_activity}>
            <Icon className={styles.repo_icons} icon="ic:outline-update" />
            Updated at <b>{new Date(repo?.updated_at).toDateString()}</b>
          </small>
        </div>
      </div>
    </>
  );
};

export default RepoComponent;
