📦 TestAutomationProject
End-to-End UI & API Test Automation Suite (Cypress • Playwright • Postman • Newman • GitHub Actions)

This repository showcases a complete quality assurance testing framework, combining:

UI Automation (Cypress + Playwright)

API Testing (Postman + Newman)

Manual Test Artifacts (test cases, bug reports, test plans)

CI/CD Automation (GitHub Actions)

It reflects my hands-on QA experience across manual testing, functional/UI automation, and REST API testing—as described in my resume and QA portfolio.

🚀 Key Features

✔ Real-world e-commerce flow automation
✔ Cypress UI testing (login, products, cart, checkout)
✔ Postman & Newman API testing pipeline
✔ Playwright optional cross-browser demo
✔ GitHub Actions CI pipeline
✔ Clean testing structure following industry standards

🎯 Project Objectives

Automate common e-commerce scenarios: login, add to cart, checkout

Demonstrate strong QA fundamentals: planning, execution, reporting

Convert manual test cases to automated scripts

Validate API endpoints using Postman + Newman

Enable CI/CD pipelines for automation workflows

Provide a complete QA portfolio project for review

🧰 Tech Stack
Automation Tools

Cypress – UI automation (primary)

Playwright – UI automation (optional extension)

Postman – API test design

Newman – API CLI runner

JavaScript (Mocha / Chai) – test assertions

Infrastructure & Version Control

Git & GitHub

GitHub Actions (CI)

Node.js / npm

📁 Project Structure
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

Folder Breakdown

📌 cypress/e2e/ → UI automation test scripts
📌 postman/ → Postman API test collection & environment
📌 .github/workflows/ → CI pipelines
📌 package.json → Scripts for Cypress & Newman

🧪 Test Coverage Summary
🔵 UI (Cypress)

Automated flows include:

Login / logout

Product listing & filtering

Add/remove items from cart

Checkout flow

Validation of fields & error messages

🟠 API (Postman + Newman)

Covered endpoints:

Authentication

Product listing & product details

Cart & order submission

Negative/error scenarios

🛠️ Setup & Installation
1️⃣ Clone the repository
git clone https://github.com/Micharemu/TestAutomationProject.git
cd TestAutomationProject

2️⃣ Install dependencies
npm install

🌐 Run UI Tests (Cypress)
Open interactive UI mode:
npm run cypress:open

Run all tests in headless mode:
npm run cypress:run

🔗 Run API Tests (Postman + Newman)
Basic run:
npx newman run postman/ecommerce-api-collection.json \
  -e postman/ecommerce-api-environment.json

Using package.json script:

Add this:

"scripts": {
  "api:test": "newman run postman/ecommerce-api-collection.json -e postman/ecommerce-api-environment.json"
}


Then run:

npm run api:test

⚙️ Continuous Integration (GitHub Actions)

The CI workflow (ci-tests.yml) performs:

Install dependencies

Run Cypress tests (headless)

Run Newman API tests

Optionally upload HTML reports

You can add a CI badge:

![CI Status](https://github.com/Micharemu/TestAutomationProject/actions/workflows/ci-tests.yml/badge.svg)

📘 Manual Test Artifacts Included

Test Plan

Test Scenarios

Manual Test Cases

Regression Test Suites

Bug Reports

Test Execution Results

🏆 Skills Demonstrated in This Project

✔ UI & API automation
✔ Negative & edge-case testing
✔ Test planning & documentation
✔ CI/CD integration
✔ Git branching & version control
✔ Clean folder structure & maintainability
✔ Industry-level QA best practices

📣 About This Project

This repository is part of my professional QA Engineering Portfolio.
It demonstrates my ability to combine:

Manual + Automated testing

API + UI automation

CI/CD integration

Strong documentation practices

Real-world testing workflows

If you're reviewing this as a recruiter or hiring manager, welcome!
Feel free to explore the repository or contact me.
