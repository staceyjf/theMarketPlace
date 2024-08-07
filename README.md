# Welcome to theMarketPlace

theMarketPlace is a React front-end backed by FireBase e-commerce application.

<div align="center">
  <img src="./brief/homepage.png" alt="Homepage Screenshot" width="700">
</div>

<br>

Explore it at: [https://www.staceyfanner.com/theMarketPlace/](https://www.staceyfanner.com/theMarketPlace/)

## About

theMarketPlace is an e-commerce application designed to provide users with an immersive shopping experience for luxury fashion items. Leveraging React and FireBase, it offers a seamless interface for browsing products.

## Planning Artifacts

1. Figma board: [board](https://www.figma.com/file/it0HP8sbGr3JPLmASUos2s/theMarketPlace---ecom?type=design&node-id=1-2&mode=design&t=P6UBNRnVQDfHI7Jo-0)

<div align="center">
  <img src="./brief/responsive-design.png" alt="Screenshot of my Figma design board" width="300">
</div>

<br>

## Key Features:

1. **Product Carousel:** Provides an interactive way to create awareness for new products while increasing user engagement and time spent on site.
2. **Category Page:** Displays a grid of products populated via FireBase.
3. **Product Page:** Provides additional details of a selected product including the ability to add as a favorite and add to cart.
4. **Cart Functionality:** Add products to your cart and checkout. Stock levels are subsequently updated post-checkout.
5. **Github Action:** Integrated a YAML config file to facilitate a basic CI/CD pipeline to build and deploy the app via GitHub Pages.

## Key Learning Highlights

1. **useReducer**: Exploring this as an alternative to useState given I had several methods which affected state.
2. **useContext**: Helped me streamline the way data is passed down through the component tree.
3. **Seeding data via dummyJson API**: Working with the admin SDK for FireBase to populate my db with products.

## Changelog

Date: 05/06/24

Updates:

**Enhanced Cart functionality:**

- Added Cart and Thank You pages to enhance the UX during the checkout process.
- Implemented additional methods to the Cart Reducer to access total cost, total quantity, and clear the cart for the checkout process.

**Layout:**

- Added a favicon for a more polished, professional look.

Date: 03/07/24

Updates:

**Temp fix to Dummy Json API change:**

- Reseeded database to reflect new response shape from Dummy Json API
- BUG: There seems to be an issue with the thumbnails not loading due issues with the CDN url. I have raised a Issues ticket with via their github.

**Layout:**

- Added a favicon for a more polished, professional look.

## To-Dos

1. Search functionality so users can easily find products.
2. Integration of Stripe for dummy payments.

## To-Dos

1. Search functionality so users can easily find products.
2. Integration of Stripe for dummy payments.

## Screenshots

| Home Page                                                    | Product Page                                                    |
| ------------------------------------------------------------ | --------------------------------------------------------------- |
| <img src="./brief/homepage.png" alt="Homepage" height="200"> | <img src="./brief/product.png" alt="Product Page" height="200"> |

| Cart Page                                                     |
| ------------------------------------------------------------- |
| <img src="./brief/cartpage.png" alt="Cart Page" height="200"> |

## Technologies Used

<div align="center">

![React](https://img.shields.io/badge/-React-05122A?style=flat&logo=react)
![Firebase](https://img.shields.io/badge/-Firebase-05122A?style=flat&logo=firebase)
![Figma](https://img.shields.io/badge/-Figma-05122A?style=flat&logo=figma)
![HTML5](https://img.shields.io/badge/-HTML5-05122A?style=flat&logo=html5)
![CSS3](https://img.shields.io/badge/-CSS3-05122A?style=flat&logo=css3)
![Sass](https://img.shields.io/badge/-Sass-05122A?style=flat&logo=sass)
![JavaScript](https://img.shields.io/badge/-JavaScript-05122A?style=flat&logo=javascript)
![Git](https://img.shields.io/badge/-Git-05122A?style=flat&logo=git)
![GitHub](https://img.shields.io/badge/-GitHub-05122A?style=flat&logo=github)

</div>
