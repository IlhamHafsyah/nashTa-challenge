<h1 align="center">PT. NashTa - Backend test</h1>


## Built With

[![Express.js](https://img.shields.io/badge/Express.js-4.x-orange.svg?style=rounded-square)](https://expressjs.com/en/starter/installing.html)
[![Node.js](https://img.shields.io/badge/Node.js-v.12.13-green.svg?style=rounded-square)](https://nodejs.org/)

## Requirements

1. <a href="https://nodejs.org/en/download/">Node Js</a>
2. Node_modules
3. <a href="https://www.getpostman.com/">Postman</a>
4. Web Server (ex. localhost)

## How to run the app ?

1. Open app's directory in CMD or Terminal
2. git clone https://github.com/IlhamHafsyah/nashTa-challenge.git
3. Type `npm install`
4. Make new file a called **.env**, set up first [here](#set-up-env-file)
5. Turn on Web Server and MySQL can using Third-party tool like xampp, etc.
6. Create a database with the name #database_name, and Import sql file to **phpmyadmin**
7. run project with `npm start`
8. Open Postman desktop application or Chrome web app extension that has installed before
9. Choose HTTP Method and enter request url.(ex. localhost:3000/)
10. You can see all the end point [here](https://documenter.getpostman.com/view/13449265/TzRa743R) or import Postman API file

## Set up .env file

Open .env file on your favorite code editor, and copy paste this code below :

```
PORT = 3000
HOST = localhost
USER = root
PASSWORD = 1234
DATABASE = nashta
TIMEZONE = UTC
```

## License

© [Mohammad Ilham Nurdhi Hafsyah](https://github.com/IlhamHafsyah)
