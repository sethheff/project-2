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


 # Project 2 Planning

Fork & Clone this repo.

## Part 1

Review the [Project 2 requirements](https://tmdarneille.gitbook.io/seirfx/11-projects/project-2#project-feedback-evaluation) and check out some [examples](https://tmdarneille.gitbook.io/seirfx/11-projects/past-projects/project2).

In this space below, list **THREE** ideas for your Project 2. For each idea, include [user stories](https://revelry.co/user-stories-that-dont-suck/) for each idea and a link to the API(s) you want to use for it.

--------------------------------------------------------
1. CurrencyDesk https://www.exchangerate-api.com - A travel app that that converts USD into the currency of the country your visiting.
2. 
3.
---------------------------------------------------------

Make a PR when you're done!

---

## Part 2

In the space below:
* either embed or link a completed ERD for your approved P2 idea
* if there are any changes/additions to your user stories, place your full set of revised user stories here
* either embed or link wireframes for every page of your app

----------------------------------------------------------
### ERD
https://lucid.app/invitations/accept/ea1243f9-8c8b-4acb-8259-bb48fbff4bd6

----------------------------------------------------------
### User Stories
As a user I want to be able to:

1. Create an account on CurrencyDesk and search through 50+ different countries and their currency's exchange rate from USD (U.S. Dollars)
2. Select a currency & country and view the exchange rate from USD to the currency of the country I am traveling to.
3. Save different countrie's currencys to a favorites page so that I can view them later for when I travel to that country.

----------------------------------------------------------
### Wireframes

BEGINNING: https://www.dropbox.com/sh/si7oueb2qsbawn6/AABdxNCOjBs6R4aJ9gutQsKha?dl=0

ADVANCED: https://www.figma.com/file/ApGw5R9zXn2JlfNkOw05Ms/Project-2-Wire-Frame?node-id=0%3A1

### Logo Files
https://www.dropbox.com/home/GA%20Project%202/CurrencyDesk%20Logo

----------------------------------------------------------

Make a PR when you're done!



* create a node app
* .gitignore
* install and set up express
* stubbed out GET auth/login, GET auth/signup, POST auth/login, POST auth/signup
* configured auth controller
* set up ejs, express-ejs-layouts, verified that it's working
* set up the signup and login forms, tested post routes
