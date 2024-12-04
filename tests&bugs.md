# Feature Tests and Bug Workarounds

## 1. AccountPage

### Feature 1: User Authentication
- **Test Cases:**
  1. Test sign-up with valid email and password.
  2. Test sign-in with valid credentials.
  3. Test error messages for invalid email or incorrect password.
  4. Ensure navigation to `/account` or `/profile` upon successful authentication.
  5. Verify error messages for empty form fields.
- **Expected Results:**
  - User is redirected to the correct page after successful sign-up/sign-in.
  - Error messages like "Invalid email" or "Incorrect password" appear appropriately.
- **Workarounds:**
  - If authentication fails due to backend issues, display a fallback error message: "Service unavailable. Try again later."
  - If navigation doesn't work, suggest refreshing the page or clearing cache.


## 2. CareerMatchQuiz

### Feature 1: Quiz Navigation
1. **Quiz Feature**
   - **Test Process**:
     - Run a test to ensure users receive the correct career based on their quiz choices.
     - Select a variety of answers, display the total points collected for each career path, and verify the career with the highest points is displayed.
     - Test what happens in the case of a tie by selecting answers that result in equal points for two or more career paths.
   - **Success Criteria**:
     - The correct career is displayed based on quiz choices.
     - Tied career paths are handled logically (e.g., display the first tied career path or a message explaining the tie).
   - **Failure Criteria**:
     - Incorrect career is displayed or the application crashes in case of a tie.
   - **Lighthouse Testing**:
    - Run a Lighthouse test for each page to ensure that Performance, Accessibility, Best Practices, and SEO scores are high (ideally 100%).
### Limitations of Acceptance Tests
- **Quiz Feature**:
  - Scalability and test coverage may be limited. Testing all possible combinations of answers is too time-consuming, potentially leaving edge cases untested.
  - Invalid inputs like skipped questions or multiple selections may not be accounted for, potentially affecting point calculation logic.
---


## 3. Main Application Features

### Feature 1: Navigation
- **Test Cases:**
  1. Test all routes for correct page rendering.
  2. Verify that the Navbar links navigate to the appropriate pages.
  3. Check for invalid routes and ensure they redirect to a 404 or home page.
- **Expected Results:**
  - All links and routes function without errors.
  - Users are redirected to a 404 or the homepage for invalid routes.
- **Workarounds:**
  - Display a user-friendly message for invalid routes: "Page not found. Please navigate using the menu."

---

## 4. Career Pages (e.g., Information Analyst, GRC)

### Feature 1: Dynamic Content
- **Test Cases:**
  1. Verify all dynamic content (e.g., descriptions, links) is displayed correctly.
  2. Test external links for validity and correct redirection.
  3. Ensure page responsiveness on mobile and desktop views.
  4. ensure correct routing for each career page 
- **Expected Results:**
  - All content loads correctly without errors.
  - External links redirect to the intended destination.
- **Workarounds:**
  - If external links fail, suggest alternative resources.
  - For layout issues, implement a "View Desktop Site" option.

---

## 5. General Testing Notes
- Ensure cross-browser compatibility (e.g., Chrome, Firefox, Safari).
- Verify responsiveness for all pages on different devices (mobile, tablet, desktop).
- Monitor for potential crashes or errors in console logs and resolve them promptly.
