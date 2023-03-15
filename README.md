# Food Delivery Web Application

This is a full-stack web application built with the MERN stack (MongoDB, Express.js, React, Node.js) for food delivery services. Customers can browse and order
food items from various restaurants and can order it.

## Installation

Before running the application, make sure you have the following tools installed:

- Node.js
- MongoDB

To install the dependencies, run the following command in the root directory of the project:


```npm install```


## Configuration

Create a `.env` file in the root directory and add the following environment variables:

```MONGO_DB_URI = <your mongo db uri>
PORT = 5000
ITEM_COLLECTION_NAME = food_items
ITEM_CATEGORY_NAME = food_categories
AUTH_KEY = <JWT secret key>```


## Running the Application

To start the server, run the following command in the backend directory:

```npm run dev```

To start the client, run the following command in a new terminal window inside the client directory:

```npm start```

