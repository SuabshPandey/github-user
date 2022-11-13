# Github Repository Search App

Single Page Application For GitHub Repositories Listing using React JS

## Author

- [Subash Pandey](https://github.com/SuabshPandey/)

## API Reference

#### Base Url

```http
  GET https://api.github.com
```

#### User Search URL

```http
  GET /search/repositories?q={query}{&page,per_page}
```

| Parameter | Type     | Description              |
| :-------- | :------- | :----------------------- |
| `query`   | `string` | **Not Required** API key |
| `per_page`   | `number` | **Not Required** API key |
| `page`   | `number` | **Not Required** API key |

#### Get User Information

```http
  GET /users/${user}
```

| Parameter | Type     | Description                                                   |
| :-------- | :------- | :------------------------------------------------------------ |
| `user`    | `string` | **Required** to pass "user" parameter to get the user details |

#### Get User Repositories

```http
  GET users/{user}/repos{?type,page,per_page}",
```

| Parameter | Type     | Description                                                                     |
| :-------- | :------- | :------------------------------------------------------------------------------ |
| `user`    | `string` | **Required** to pass "user" parameter to get the user details                   |
| `repos`   | `string` | **Required** to pass "repos" parameter to get the repositories list and details |

## Color Reference

| Color           | Hex                                                               |
| --------------- | ----------------------------------------------------------------- |
| Black 60%       | ![#000000](https://via.placeholder.com/10/0a192f?text=+) #000000  |
| Light Green 75% | ![#26625A](https://via.placeholder.com/10/26625A?text=+) #26625A  |
| Light Purple    | ![#8965AE](https://via.placeholder.com/10/8965AE?text=+) #8965AE  |
| Green           | ![#937E36](https://via.placeholder.com/10/#937E36?text=+) #937E36 |
| White           | ![#ffffff](https://via.placeholder.com/10/#ffffff?text=+) #ffffff |

## Features

- Single Page Application
- List All Github Users
- List Individual User Respositories

## Tech Stack

**Client:** React, CSS3, JSX

**API:** RESTful API

## Run Locally

Clone the project

```bash
  git clone https://github.com/SuabshPandey/github-user.git
```

Go to the project directory

```bash
  cd github-api
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```


## Demo


https://search-github-repo.netlify.app/


## Screenshots

![ss1](https://user-images.githubusercontent.com/53868484/201297282-e4d81094-ee14-497d-9155-d81a1b12a8ad.png)
![ss2](https://user-images.githubusercontent.com/53868484/201297308-ce5f57d0-55ad-4f94-b647-c2d1f5d24a98.png)
