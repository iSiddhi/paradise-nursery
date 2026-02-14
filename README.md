

# Paradise Nursery Shopping Application

Paradise Nursery Shopping Application is a dynamic e-commerce web application built using React and Redux. The application allows users to browse a collection of houseplants, view plant details, add plants to a shopping cart, and manage cart items with real-time updates.

## Project Overview

This project simulates an online plant shop where users can:

* Browse houseplants grouped into different categories
* View plant thumbnails, names, descriptions, and prices
* Add plants to a shopping cart
* Increase or decrease item quantities
* Remove items from the cart
* View dynamically updated total cost

The goal of this project was to implement a user-friendly shopping experience using modern front-end development practices.

## Technologies Used

* React.js
* Redux Toolkit
* React Router
* CSS
* JavaScript (ES6)

## Features

### Landing Page

* Displays the company name “Paradise Nursery”
* Attractive background image
* “Get Started” button to navigate to product listing page

### Product Listing Page

* Plants grouped into at least three categories
* Each category includes multiple unique plants
* Each plant displays:

  * Thumbnail image
  * Name
  * Price
* “Add to Cart” button:

  * Adds product to cart
  * Disables after adding
  * Updates cart icon count dynamically
* Navigation bar with:

  * Home
  * Plants
  * Cart

### Shopping Cart Page

* Displays all selected plants
* Shows:

  * Thumbnail
  * Name
  * Unit price
  * Quantity controls
  * Total cost per item
* Increase and decrease quantity buttons
* Delete item button
* Total cart amount calculation
* Checkout button (Coming Soon)
* Continue Shopping button

## Folder Structure (Example)

```
src/
│
├── components/
│   ├── AboutUs.jsx
│   ├── ProductList.jsx
│   ├── CartItem.jsx
│
├── redux/
│   ├── CartSlice.jsx
│
├── App.jsx
├── App.css
```

## How to Run the Project

1. Clone the repository
2. Navigate to the project folder
3. Install dependencies

```
npm install
```

4. Start the development server

```
npm start
```

The application will run on:

```
http://localhost:3000
```

## Future Enhancements

* User authentication
* Payment gateway integration
* Backend database integration
* Order history feature

