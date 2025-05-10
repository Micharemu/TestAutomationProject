// Postman script for API Login Test


// ✅ SUCCESSFUL LOGIN TEST
// 🔹 Request Setup
// Request Type: POST
URL: https://yourapi.com/api/login
Body (raw, JSON)


{
  "username"; "testuser",
  "password"; "correctPassword123"
}

//🔹 Tests Tab Script (Success Case)

pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

pm.test("Response is JSON", function () {
    pm.response.to.be.withBody;
    pm.response.to.be.json;
});

pm.test("Contains access and refresh tokens", function () {
    let jsonData = pm.response.json();
    pm.expect(jsonData).to.have.property("accessToken");
    pm.expect(jsonData).to.have.property("refreshToken");
    
    // Save to environment for future use
    pm.environment.set("accessToken", jsonData.accessToken);
    pm.environment.set("refreshToken", jsonData.refreshToken);
});

pm.test("User object or message exists", function () {
    let jsonData = pm.response.json();
    pm.expect(jsonData.user || jsonData.message).to.not.be.undefined;
});


// ❌ FAILED LOGIN TESTS
// Create separate test cases in Postman with incorrect credentials:

// 1. Invalid Username
Body:

{
  "username"; "wronguser",
  "password"; "correctPassword123"
}

Tests:

pm.test("Status code is 401 or 400", function () {
    pm.expect(pm.response.code).to.be.oneOf([400, 401]);
});

pm.test("Error message is present", function () {
    let jsonData = pm.response.json();
    pm.expect(jsonData.message || jsonData.error).to.not.be.undefined;
});

// 2. Invalid Password

Body:

{
  "username"; "testuser",
  "password"; "wrongPassword"
}

// Use the same test script as above.

// 3. Missing Fields
Body:

{
  "username"; "testuser"
}

Tests:

pm.test("Status code is 400 (Bad Request)", function () {
    pm.response.to.have.status(400);
});

pm.test("Validation error is returned", function () {
    let jsonData = pm.response.json();
    pm.expect(jsonData.message || jsonData.error).to.include("password");
});
