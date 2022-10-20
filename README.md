# KING Store's Clothes

#### My live app https://king-store-clothes-alek.netlify.app

##### Test login user:

- E-mail: test@test.com
- Password: test

#### Run my project

- Clone this project.
- Navigate (cd) into your project directory.
- Run `npm install` in your command line.
- Run `npm start` in your command line.
- Visit http://localhost:5000 in your browser!

#### To run the frontend:

- Navigate into your frontend directory (`cd client`).
- Run `npm install` in your command line.
- Run `npm start` in your command line.
- Visit http://localhost:3000 in your browser!

#### _Optionally_

- You can run `npm run dev` to start both the frontend & backend.

#### Technologies used in my project

###### ReactJS, Redux, NodeJS, Express, Firebase

#### About my project

- I am using `React` with `Redux` library on the frontend & also using `firebase` library for the ease of communicating to my Firebase database.
  For keeping all of the users' "collection shopping cart" I used `redux-persist` library in order to save the redux store in their local storage. For the styling I went with the `styled-components` library as their _CSS-in-JS_ technique is a good choice to avoid CSS leaking globally.
- On the backend - server is built in `Node.js` with `Express` library. I am using `Firebase` with their NoSQL `Cloud Firestore` database & also using their Google authentication provider.
  I am using `Stripe API` for the payment/billing features that my app offers.

##### Further comment on using `redux-saga`:

In my honest opinion using redux-saga is almost never a good choice, there's a lot of uneasy code to write & "getting used to" on your eyes - if I was to refactor my whole project I would go with RTKQ (Redux ToolKit Query) or even vanilla Redux would be a better choice over redux-saga.
