
Live - https://flora-vision-nu.vercel.app

# 🌿 FloraVision

A responsive plant showcase and shopping demo built with React, Vite, Tailwind CSS, and Motion. FloraVision features a dark-green visual theme, plant collections, product details, reviews, and a frontend-only shopping flow.

---

# ✨ Project Overview

FloraVision is a frontend project for browsing indoor plants and trying a simple shopping experience. It includes:

* Plant showcase homepage with hero and trending collections
* Top-selling and oxygen plant sections
* Product details and add-to-cart interactions
* Shopping cart with quantity controls
* Login and registration screens
* Demo checkout and order confirmation
* About, customer reviews, and contact sections
* Responsive navigation and layouts
* Motion animations and Lucide icons

Cart, account, and checkout data are handled in the browser; there is no backend or real payment processing.

---

# 🛠️ Technologies Used

## Frontend

* React 19
* Vite 8
* Tailwind CSS 4 with the Vite plugin
* Motion for React (`motion/react`)
* React Router
* Lucide React Icons

---

# 🎨 Design Features

## Glassmorphism UI

The interface uses translucent surfaces and layered plant imagery with:

* Backdrop blur and subtle borders
* Dark-green backgrounds and bright green accents
* Responsive product layouts
* Hover, reveal, and slider animations

---

## Plant Browsing and Shopping

Visitors can explore plant collections, view plant details, add items to the cart, adjust quantities, and complete a demo checkout.

---

# 📁 Project Structure

```bash
src/
 ├── assets/
 │    ├── plant and brand images
 │
 ├── components/
 │    ├── About.jsx
 │    ├── Button.jsx
 │    ├── Contact.jsx
 │    ├── Hero.jsx
 │    ├── Navbar.jsx
 │    ├── O2Section.jsx
 │    ├── ProductGrid.jsx
 │    ├── Reviews.jsx
 │    ├── SectionTitle.jsx
 │    └── TrendingPlants.jsx
 │
 ├── context/
 │    ├── AuthContext.jsx
 │    └── CartContext.jsx
 │
 ├── pages/
 │    ├── Cart.jsx
 │    ├── Checkout.jsx
 │    ├── Login.jsx
 │    └── Register.jsx
 │
 ├── App.jsx
 ├── main.jsx
 └── index.css
```

---

# 🚀 Main Sections

## 1. Homepage

The homepage brings together the hero, trending plants, top-selling products, customer reviews, oxygen plant collection, about section, and contact information.

---

## 2. Plant Collections

Browse featured and top-selling plants in responsive layouts. Product interactions include details and add-to-cart actions.

---

## 3. Cart and Checkout

The cart supports quantity changes and item removal. Checkout collects delivery details and offers demo payment options. Placing an order displays a confirmation summary and clears the in-memory cart.

---

## 4. Account Pages

Login and registration screens provide a frontend account flow. Account state is held in React context and is not persisted to a server.

---

# 🔗 Application Routes

* `/` - Plant showcase homepage
* `/login` - Login screen
* `/register` - Registration screen
* `/cart` - Shopping cart
* `/checkout` - Demo checkout and order confirmation

---

# 🎯 Responsive Design

The layouts adapt to mobile, tablet, and desktop screen sizes using:

* Responsive Tailwind utility classes
* Flexible containers and product grids
* Adaptive navigation and spacing
* Responsive image sizing

---

# ⚡ Animations

Animations are implemented with Motion for React.

Effects include:

* Navigation entrance animation
* Scroll reveal effects
* Plant slider transitions
* Hover and interaction transitions

---

# 🧩 Main Dependencies

* `react` and `react-dom`
* `vite` and `@vitejs/plugin-react`
* `tailwindcss` and `@tailwindcss/vite`
* `motion`
* `react-router-dom`
* `lucide-react`

---

# 👨‍💻 Developer

Developed by Abhishek Kumar Jha

Focused on:

* Frontend Development
* Responsive UI Design
* React.js Projects
* Modern Web Interfaces

---

# 🌱 Final Note

FloraVision combines nature-inspired visuals with a responsive plant-browsing experience. Authentication, cart state, and checkout are frontend demonstrations; connect a backend and payment provider for production use.
