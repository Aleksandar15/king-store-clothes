# KING Store's Clothes

#### My live app https://king-store-clothes-alek.netlify.app

##### Test login user:

- E-mail: test@test.com
- Password: testtest

### About my project

- I am using `React` with `Redux` library on the frontend & also using `firebase` library for the ease of communicating to my Firebase's Cloud Firestore database.
  For keeping all of the users' "*collection shopping cart*" I used `redux-persist` library in order to save the redux store in their local storage. For the styling I went with the `styled-components` library as their _CSS-in-JS_ technique is a good choice to avoid CSS styles leaking globally.
- On the backend - server is built in `Node.js` with `Express` library. I am using `Firebase` with their NoSQL `Cloud Firestore` database & also using their Google authentication provider to provide a way for my users to sign in using their Google accounts.
  I am using `Stripe API` for the payment/billing features that my app offers.

##### Further comment on using `redux-saga`:

- In my honest opinion using redux-saga is almost never a good choice, there's a lot of uneasy code to write & "getting used to" on your eyes - if I was to refactor my whole project I would go with RTKQ (Redux ToolKit Query) or even vanilla Redux Toolkit would be a better choice over redux-saga.

#### Technologies used in my project

###### ReactJS, Redux, NodeJS, Express, Firebase Cloud Firestore database.

#### -> Here is my <a href="https://github.com/Aleksandar15/king-store-clothes-frontend">frontend</a>'s repo published on Netlify



#### Run my project

- Clone this project.
- Navigate (cd) into your project directory.
- Run `npm install` in your command line.
- Run `npm start` in your command line.
- Visit http://localhost:5000 in your browser!

#### To run the frontend:

- Navigate into your frontend directory (`cd client`).
- Run `npm install` in your command line.
- Before you do `npm start` make sure that your node version is `12.14.1` which is my tested & working version as the newer versions may fail.
- Run `npm start` in your command line.
- Visit http://localhost:3000 in your browser!

#### _Optionally_

- You can run `npm run dev` to start both the frontend & backend.


