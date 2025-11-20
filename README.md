# TestAutomationProject

End-to-end **QA automation and API testing project** combining UI tests and API validation for a sample web application (e-commerce style flows).

This project reflects my hands-on experience in **manual testing, UI automation (Cypress/Playwright)**, and **API testing (Postman/Newman)** as described in my CV and QA portfolio.

---

## 🎯 Objectives

- Practice real-world **e-commerce style flows** (login, product browsing, cart, checkout).
- Design and execute **manual test cases** and convert key flows into automation.
- Build a **REST API testing collection** in Postman and run it via Newman + CI.
- Showcase how I design, automate, and structure tests for interviews and portfolio.

---

## 🧰 Tech Stack

**Automation & Testing:**

- Cypress (UI tests)
- Playwright (optional/extended UI demo)
- Postman + Newman (API tests)
- JavaScript (Mocha / Chai style assertions)

**CI/CD & Utilities:**

- Git & GitHub
- GitHub Actions (CI)
- Node.js / npm

---

## 📂 Project Structure

Example structure (your folders/files may vary slightly):

```text
TestAutomationProject/
├─ cypress/
│  ├─ e2e/
│  │  ├─ login.cy.js
│  │  ├─ cart.cy.js
│  │  └─ checkout.cy.js
│  ├─ fixtures/
│  ├─ support/
│  │  ├─ commands.js
│  │  └─ e2e.js
├─ postman/
│  ├─ ecommerce-api-collection.json
│  └─ ecommerce-api-environment.json
├─ .github/
│  └─ workflows/
│     └─ ci-tests.yml
├─ package.json
└─ README.md
cypress/e2e/ – UI test specs for core user journeys.

postman/ – Postman collection + environment for REST API testing.

.github/workflows/ – GitHub Actions workflow for CI test runs.

package.json – npm scripts for running Cypress and Newman.

✅ Test Coverage
UI / End-to-End (Cypress)
Key flows covered:

User authentication (login / logout)

Product listing, filtering, and searching

Add to cart / remove from cart

Checkout flow (address, summary, confirmation)

Basic validation (required fields, error messages, etc.)

API (Postman + Newman)
Key endpoints:

Authentication (login)

Products (list / details)

Cart / orders

Error / negative test cases (invalid payloads, wrong tokens, etc.)

🚀 How to Run Locally
1. Clone the Repository

git clone https://github.com/Micharemu/TestAutomationProject.git
cd TestAutomationProject
2. Install Dependencies

npm install
Make sure you have Node.js and npm installed.

3. Run Cypress Tests (UI)

# Open Cypress Test Runner
npm run cypress:open

# OR run all tests in headless mode
npm run cypress:run
(Adjust the commands according to your package.json scripts.)

4. Run API Tests (Postman + Newman)

# Example Newman run
npx newman run postman/ecommerce-api-collection.json \
  -e postman/ecommerce-api-environment.json
You can add a script in package.json like:


"scripts": {
  "api:test": "newman run postman/ecommerce-api-collection.json -e postman/ecommerce-api-environment.json"
}
Then simply run:


npm run api:test
🔁 CI / GitHub Actions
A sample GitHub Actions workflow (.github/workflows/ci-tests.yml) can:

Install Node dependencies

Run Cypress UI tests in headless mode

Run Newman API tests

Optionally upload artifacts or reports

This reflects how I integrate automation into a CI/CD pipeline in real projects.
