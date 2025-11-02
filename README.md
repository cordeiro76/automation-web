# Automation Exercise - Cypress Tests

This project contains automated end-to-end tests developed with **Cypress** for the [Automation Exercise](https://automationexercise.com/) website.  
The tests simulate real user interactions on a mobile device, validating the entire e-commerce flow — from registration to checkout.

---

## Technologies Used

- [Cypress](https://www.cypress.io/) – End-to-end testing framework  
- [Node.js](https://nodejs.org/) – JavaScript runtime environment  
- JavaScript (ES6)  
- [Mocha](https://mochajs.org/) & [Chai](https://www.chaijs.com/) – Test structure and assertions  

---

## Project Structure

cypress/
├── e2e/
│ └── automation-exercise-final-modules.cy.js # Main test suite
├── fixtures/
│ └── example.json # Test data (user info)
├── modules/
│ ├── menu.js
│ ├── login.js
│ ├── register.js
│ ├── contact.js
│ └── cart.js # Page Object modules
├── support/
│ └── commands.js # Custom Cypress commands
└── cypress.config.js # Cypress configuration file


---

## Requirements

Before running the project, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (version 16 or higher recommended)  
- [npm](https://www.npmjs.com/)  
- Git (optional)

---

## Installation

Clone this repository and install the dependencies:

```bash
git clone https://github.com/cordeiro76/pgats-automacao-web.git
cd pgats-automacao-web
npm install


Test Scenarios

Register a user – Complete the full registration process and verify account creation
Login with valid credentials – Login using correct email and password
Login with invalid credentials – Validate error messages for incorrect login
Logout – Verify user logout and redirection to login page
Registration with existing email – Validate error for duplicate email registration
Send contact form with file upload – Fill out and submit the contact form successfully
Verify all products and product details page – Check that all product info is displayed correctly
Search for a product – Use the search bar and confirm results
Verify subscription in home page – Subscribe with an existing email and validate confirmation message
Place order: register before checkout – Complete full purchase flow (add to cart → checkout → payment → order confirmation)

---

Page Object Modules

The following modules encapsulate specific actions and reusable logic:
menu → Navigation between pages
login → Handles login and pre-registration steps
register → Completes user registration and newsletter subscription
contact → Submits the contact form with file upload
cart → Adds products, proceeds to checkout, and fills payment details
These abstractions make the tests easier to maintain and more readable.


-------

Author

Jessica Cordeiro
QA Engineer | Postgraduate Student in Test Automation
GitHub @cordeiro76