# Cosmetics Online Store
This project was created as part of my Web Development course. It includes a React client and a Node.js/Express server that allows users to browse cosmetic products, add items to their cart, and submit an order.

## Live Demo
(Will be available once GitHub Pages base path is fixed)
https://mayasofer1.github.io/Cosmetics-Online-Store/

## Main Features
- Product list with images, prices and descriptions
- Add-to-cart functionality
- Cart summary with total price
- Order form with basic validation
- Success message after submitting an order
- Responsive and simple UI
- Fully separated client and server structure

## Technologies
### Client (React)
- React
- React Router
- Context API
- CSS

### Server (Node.js)
- Node.js
- Express
- MongoDB (Mongoose)

## Project Structure
Cosmetics-Online-Store
├── Client/          (React frontend)
│   ├── src/
│   ├── public/
│   ├── dist/        (build output copied manually into /docs for GitHub Pages)
│   └── vite.config.js
├── Server/          (Node.js backend)
│   ├── routes/
│   ├── controllers/
│   ├── models/
│   ├── db/
│   └── server.js
└── docs/            (GitHub Pages deployment folder for the client)

## How to Run Locally
### Client
cd Client  
npm install  
npm start

### Server
cd Server  
npm install  
node server.js

## Notes
GitHub Pages hosts only the React client (from the /docs folder). The backend must run locally or be deployed separately (e.g., Render).

## Author
Maya Sofer  
Computer Science Student — Sapir College
