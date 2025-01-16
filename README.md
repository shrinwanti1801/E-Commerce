E-Commerce Web Application

\==========================

This is an e-commerce web application built with the MERN (MongoDB, Express.js, React.js, Node.js) stack. The application includes features like user authentication, product search, cart management, and handling of ordered and refunded products.

Features

\--------

\* \*\*User Authentication\*\*: Secure login and signup functionality.

\* \*\*Product Search\*\*: Search products and view product details.

\* \*\*Cart Management\*\*: Add and remove products from the cart.

\* \*\*Order Management\*\*: View ordered and refunded products.

\* \*\*Responsive Design\*\*: Fully responsive layout for all devices.

Tech Stack

\----------

\* \*\*Frontend\*\*: React.js

\* \*\*Backend\*\*: Node.js, Express.js , Razorpay

\* \*\*Database\*\*: MongoDB

\* \*\*Styling\*\*: CSS, CSS Modules

Getting Started

\---------------

\### Prerequisites

\* Node.js

\* npm or yarn

\* MongoDB

\### Installation

1\. git clone https://github.com/shrinwanti1801/E-Commerce

2\. cd servernpm install

3\. cd ../clientnpm install

\### Environment Variables

Create a .env file in the server directory and add the following environment variables:

\`\`\`

MONGO\_URI=your\_mongodb\_connection\_string

JWT\_SECRET=your\_jwt\_secret

RAZORPAY\_KEY\_ID=your\_razorpay\_key\_id

RAZORPAY\_KEY\_SECRET=your\_razorpay\_key\_secret \`

\`\`\`

\### Running the Application

1\. bashCopy codecd server npm start

2\. bashCopy codecd ../client npm start

API Endpoints

\-------------

\### Authentication

\* \*\*POST\*\* /api/v1/signup - Register a new user

\* \*\*POST\*\* /api/v1/login - Authenticate user and get token

\### Payment

\* \*\*GET\*\* /api/v1/getkeyid - Get Razorpay Key ID

\* \*\*POST\*\* /api/v1/capturepayment - Capture payment

\* \*\*POST\*\* /api/v1/refundpayment - Refund payment

\* \*\*GET\*\* /api/v1/fetchallpayments - Fetch all payments

\* \*\*GET\*\* /api/v1/getpaymentdetails/:id - Get payment details by ID

\* \*\*GET\*\* /api/v1/fetchcarddetails - Fetch card details

\* \*\*POST\*\* /api/v1/paymentverification - Verify payment

\### Cart Management

\* \*\*POST\*\* /api/v1/addtocart - Add product to cart

\* \*\*DELETE\*\* /api/v1/removefromcart - Remove product from cart

\* \*\*POST\*\* /api/v1/showcartitems - Show all cart items

\### Order Management

\* \*\*POST\*\* /api/v1/orderedproducts - Show all ordered products

\* \*\*POST\*\* /api/v1/refundedproducts - Show all refunded products

\### DB Schema

![Ecommerce_DB](https://github.com/user-attachments/assets/c8e92ab8-3088-4f8a-902e-35a5d62f8fa7)

Contribution

\------------

Feel free to submit issues or pull requests if you have suggestions or improvements.

License

\-------

This project is licensed under the MIT License.

#
