# Test Cases

## Project
GrabDocs Cypress Testing Assignment

## Student
Isaiah Ladejobi

## Course
COSC369-101-Sprg2026 Software Engineering

## Group
Group 4 - Settings and Financials

## Testing Tool
Cypress

---

## Test Case 1: Login

### Objective
Verify that the user can log into GrabDocs successfully.

### Steps
1. Open the GrabDocs login page.
2. Enter email address.
3. Enter password.
4. Click Sign in.

### Expected Result
The user should be redirected away from the login page after successful authentication.

### Actual Result
Passed.

---

## Test Case 2: Financials File Upload

### Objective
Verify that the user can upload a file through the Financials Import feature.

### Steps
1. Log into GrabDocs.
2. Navigate to the Upload page.
3. Click Financials.
4. Click Import.
5. Upload `test.png`.
6. Verify the uploaded file appears.

### Expected Result
The uploaded file should appear in the system.

### Actual Result
Passed.

---

## Test Case 3: Settings Page Access

### Objective
Verify that the user can access the Settings page.

### Steps
1. Log into GrabDocs.
2. Navigate to the Settings page.
3. Verify that the Settings page loads.

### Expected Result
The URL should include `/settings`, and the page should display the Settings heading.

### Actual Result
Passed.