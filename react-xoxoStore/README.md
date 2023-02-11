# xoxoStore
E-commerce web application build with React for training purposes.


:dart:  My project for the React course at SoftUni. (June 2022) 


## :warning: Prerequisites
- [ExpressJs](https://expressjs.com/en/starter/installing.html)
- [MongoDB](https://www.mongodb.com/try/download/community)
- [Node.js](https://nodejs.org/en/)
- [React](https://reactjs.org/)


### 1. Server
- You can download the server from the "Server" folder
- Run `npm install` to get the needed packages
- Run `npm start` to start the server

### 2. Client  
- You should be running the server in order to use the Client.
- Run `npm install` in the `Client` directory.
- Run `ng s` (in the `Client` directory) for a dev server. 
- You should see xoxoStore's client-side open in your browser on `http://localhost:3000/`.
- You can also check the deployed version on `https://xoxostore-7ef9a.web.app/`.

## :information_source: Structure
#### Public part (visible without authentication): 
- Homepage - shows summer sales, few items and newsletter
- Login page - user login form;
- Register page - user registration form; 
#### Only for Logged Users:
- Profile
  - view and edit own profile info;
- Catalog
  - Shows a list of products added.
  - Filter for products
  - Sort for products
  - edit or delete own messages;
- Create
  - Page to create a product by Title, Description, Image, Price, Category, Stock, Color, Size
- Cart
  - Shows all added products in the cart along with total price


## :eyes: Screenshots
#### :arrow_right: HomePage
![xoxo-Homepage-screenshot](https://github.com/dimitrov93/xoxoStore/blob/main/screenshots/homepage.png?raw=true)
#### :arrow_right: Login
![xoxo-Login-screenshot](https://github.com/dimitrov93/xoxoStore/blob/main/screenshots/login.png?raw=true)
#### :arrow_right: Register
![xoxo-Register-screenshot](https://github.com/dimitrov93/xoxoStore/blob/main/screenshots/register.png?raw=true)
#### :arrow_right: User
![xoxo-User-screenshot](https://github.com/dimitrov93/xoxoStore/blob/main/screenshots/user.png?raw=true)
#### :arrow_right: Catalog
![xoxo-Catalo-screenshot](https://github.com/dimitrov93/xoxoStore/blob/main/screenshots/catalog.png?raw=true)
#### :arrow_right: Logged-in-user
![xoxo-logged-in-screenshot](https://github.com/dimitrov93/xoxoStore/blob/main/screenshots/loggedIn.png?raw=true)
#### :arrow_right: Cart
![xoxo-Cart-screenshot](https://github.com/dimitrov93/xoxoStore/blob/main/screenshots/cart.png?raw=true)
#### :arrow_right: Non-personal product
![xoxo-noProduct-screenshot](https://github.com/dimitrov93/xoxoStore/blob/main/screenshots/nonPersonalProduct.png?raw=true)
#### :arrow_right: Personal product
![xoxo-personalProduct-screenshot](https://github.com/dimitrov93/xoxoStore/blob/main/screenshots/personalProduct.png?raw=true)
#### :arrow_right: No products in catalog
![xoxo-personalProduct-screenshot](https://github.com/dimitrov93/xoxoStore/blob/main/screenshots/noProducts.png?raw=true)