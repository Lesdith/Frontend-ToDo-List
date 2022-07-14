# Frontend-ToDo-List
This repository is the Frontend of an application that simulates the operation of a list of tasks known as ToDo List.


In my profile you can find the <a href="https://github.com/Lesdith/Frontend-ToDo-List">Backend-todo-list</a> repository to complement it.

## SETUP
### Requirements to use this project:

<ul>
<li>
<a href="https://nodejs.org/es/download/"> Node.js </a>
</li>
<li>
<a href="https://www.npmjs.com/package/package"> npm </a> (Node Package Manager, it comes with node.js installation)
</li>
</ul>
In case you're not with the latest version of npm:


``` javascript
$ npm install npm -g

```

## Install NPM Dependencies

Once you clone this repository, run this command on your terminal to install all needed dependencies:

```
$ npm install 

or 

$ npm install -force
```

## Start the project

In order to start the project, you need to open the terminal and in your project run the following commands

This command works as a tool to create a project's package.json file. Once you run the npm init steps, a package.json file will be generated and saved to the current directory.

```
$ npm init -y 
```

### Install react
React is a JavaScript library for creating user interfaces.

The react package contains only the functionality necessary to define React components. It is typically used together with a React renderer like react-dom for the web, or react-native for the native environments.

Note: by default, React will be in development mode. The development version includes extra warnings about common mistakes, whereas the production version includes extra performance optimizations and strips all error messages. Don't forget to use the production build when deploying your application.


```
$ npm install --save react
```


### Install axios
Axios is a promise-based HTTP Client for node.js and the browser. It is isomorphic (= can run in browser and nodejs with the same code base). On the server side it uses the native node.js http module, while on the client (browser) side it uses XMLHttpRequests.


```
$ npm install -d axios
```

## Configure file Packaje.json

Following the instructions your Package.json file should look similar to the following:

```
{
    "name": "frontend-todo-list",
    "version": "0.1.0",
    "private": false,
    "description": "Core Code's ToDos app frontend",
    "dependencies": {
        "@testing-library/jest-dom": "^5.16.1",
        "@testing-library/react": "^12.1.2",
        "@testing-library/user-event": "^13.5.0",
        "axios": "^0.27.2",
        "react": "^17.0.2",
        "react-dom": "^17.0.2",
        "react-fetch-hook": "^1.8.5",
        "react-icons": "^3.11.0",
        "react-scripts": "5.0.0",
        "web-vitals": "^2.1.3"
    },
    "scripts": {
        "start": "react-scripts start",
        "build": "react-scripts build",
        "test": "react-scripts test",
        "eject": "react-scripts eject"
    },
    "eslintConfig": {
        "extends": [
            "react-app",
            "react-app/jest"
        ]
    },
    "browserslist": {
        "production": [
            ">0.2%",
            "not dead",
            "not op_mini all"
        ],
        "development": [
            "last 1 chrome version",
            "last 1 firefox version",
            "last 1 safari version"
        ]
    },
    "devDependencies": {
        "eslint": "^8.19.0",
        "eslint-plugin-react": "^7.30.1",
        "postcss-loader": "^7.0.0"
    }
}

```


### Run the Project 

```
$ npm start
```



