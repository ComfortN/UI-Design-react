# WUDO Furniture Website

This project is a React implementation of the WUDO furniture e-commerce website UI. It was created as part of a UI challenge to replicate the design shown in the reference images.

## Project Overview

The WUDO furniture website features:
- A clean, minimal design
- Product display pages with detailed information
- Color selection options
- Size specifications
- Add to cart and buy now functionality

## Project Structure

```
├── node_modules
├── public
└── src
    ├── components
    │   ├── left
    │   │   ├── left.css
    │   │   └── left.jsx
    │   ├── navbar
    │   │   ├── navbar.css
    │   │   └── navbar.jsx
    │   └── right
    │       ├── right.css
    │       └── right.jsx
    ├── pages
    │   ├── home.css
    │   └── home.jsx
    ├── App.js
    ├── index.js
    ├── .gitignore
    ├── package-lock.json
    └── package.json
```

## Component Structure

The application is divided into three main component sections:

1. **Navbar Component**: Contains the site logo, navigation menu (Home, Furniture, Product, Store), search icon, and shopping cart.

2. **Left Component**: Handles the product display, including the main product image and thumbnail carousel.

3. **Right Component**: Contains product details including:
   - Product category (PREMIUM CHAIRS)
   - Product name (Drop type cushion chair)
   - Ratings and reviews
   - Color selection
   - Product description
   - Dimensions
   - Price
   - Quantity selector
   - Add to cart and Buy Now buttons

## Getting Started

### Prerequisites

- Node.js (v14 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/ComfortN/UI-Design-react.git
cd UI-Design-react/wudo
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
npm start
# or
yarn start
```

The application should now be running on [http://localhost:3000](http://localhost:3000)

## Implementation Details

- The application uses React for the component structure
- CSS is used for styling components
- Responsive design for mobile and tablet devices
- The project follows a modular approach with separated concerns for different UI sections

## UI Challenge Reference

This project was implemented based on a UI challenge to recreate the WUDO furniture product page, featuring a "Drop type cushion chair" priced at $265.50.

## Screenshot

![Image](https://github.com/user-attachments/assets/4cdcc31e-3df7-4585-98ca-3358de96ae40)