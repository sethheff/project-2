# Express Auth Boilerplate


---
## HOW TO SET UP

1. Fork & Clone

2. Install Dependencies 
```
npm i
```

3. Create a `config.json` with the following code.
```json
{
  "development": {
    "database": "<insert db name here>",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "test": {
    "database": "<insert db name here>",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "production": {
    "database": "<insert db name here>",
    "host": "127.0.0.1",
    "dialect": "postgres"
  }
}
```


**Note:** If your database requires a username and password, you'll need to include these fields as well.

4. Create a Database
```
sequelize db:create <insert db name here>
```

5. Migrate the `user` model to your database
```
sequelize db:migrate
```

6. Add `SESSION_SECRET` and `PORT` environment variable in a `.env` file (can be any string)
(remember to install npm i dotenv)


 



* create a node app
* .gitignore
* install and set up express
* stubbed out GET auth/login, GET auth/signup, POST auth/login, POST auth/signup
* configured auth controller
* set up ejs, express-ejs-layouts, verified that it's working
* set up the signup and login forms, tested post routes