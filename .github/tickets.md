# Spam Project Tickets

This file contains all the tickets/issues for the Spam project. Update this file with your tickets, and then ask Claude to create the project board from this file.

## Ticket Format

Each ticket should include:

- Title
- Description/Body
- Labels (comma-separated)
- Priority (P1, P2, P3)
- Size (S, M, L)

---

## Backlog Tickets

### Replace Sarah Spamalot!#1

**Description:**
Front End: Replace the fake logged in user “sarah-spamalot” with authenticated user info.
Write some code in the components/Nav/LoginButton.tsx so you can render the actual user.
Read the TODO comments in that component, AND the Authenticated.tsxcomponent to fulfill these details.

TIP: check out the jwt-auth challenge for reference, if you get stuck!

Test Login: You can use our example user details to test Logging in to the SPAM site, or make your own by Signing Up!
Example user login details:

email= fakeuser@example.org

password= fakeUser5000!

This ticket is connected to issue #2 —after you finish this ticket, please move on to that issue.

**Labels:** auth0, frontend

**Priority:** P1

**Size:** S

---

### Verify user name renders correctly after Auth0 login #2

**Description:**
Write a front-end test to confirm that when a user logs in via Auth0, the correct user name is rendered on the page.

Acceptance Criteria:

Simulate a login using Auth0 in the front end

After successful authentication, check that the displayed name matches the Auth0 user’s profile

The test should fail if the user name is missing or incorrect

Useful resource:
https://miro.com/app/board/uXjVJE4M2P8=/?moveToWidget=3458764647642243322&cot=14

Depends on:
#1

**Labels:** frontend, test, auth0, software quality

**Priority:**

**Size:**

---

### Style the About page #3

**Description:**
**The About page needs styling!**
Our designer has provided some helpful screenshots of how the About page should look. Your task is to style the About page to replicate the design shown in these screenshots.

The SPAM website uses [Tailwind CSS](https://tailwindcss.com/), a useful styling framework which allows you to style your components inline rather than using a separate CSS file.

Tailwind has all the same properties and attributes as native CSS, however the syntax can be quite different.

NOTE: For this ticket, you do not need to modify the placeholder content. Leave it as it is.

---

**Pro tips:**

- Read the [Tailwind docs](https://tailwindcss.com/docs/installation) thoroughly! They're extremely helpful.
- Check out the `tailwind.config.js` file at the root of the codebase. It contains preset colours and fonts which you'll need to use in your styling. [This page in the docs](https://tailwindcss.com/docs/adding-custom-styles) may be useful.
- We have provided screenshots of how the About page should look. Consult these carefully, they are your reference point!

This ticket is connected to issue #4 —after you finish this ticket, please move on to that issue.

**Labels:** Tailwind CSS, frontend

**Priority:**

**Size:**

---

### Verify About Page CSS Styling with a Frontend Test #4

**Description:**
The About page has already been styled according to the provided screenshots.

Write and implement at least one passing frontend test to confirm that the About page’s Tailwind CSS styling renders as "described in the designer’s screenshots".

**Acceptance Criteria:**
The test should fail if the expected styling is missing or incorrect.

Depends on:
#3

**Labels:** Tailwind CSS, frontend, software quality, test

**Priority:**

**Size:**

---

### Render real data on About page #5

**Description:**
Right now the About page content is all placeholder, including some lovely SPAM Ipsum text. Your task is to replace this fake data with the real About page content, which is currently stored in the database. You'll need to write a client-side function to fetch data from the server, and then use ReactQuery to render it in the About page.

---

Pro tips:

- The backend functionality has been completed for you. Test out these API endpoints in Postman: `api/v1/about/text` and `api/v1/about/images`
- Check out the `client/hooks` folder in the codebase. Note how the ReactQuery functionality is being contained inside these custom hooks, which are then called in the `Pages`. Ensure your code conforms to this layout convention.

- Take a look at the `models` folder for some TypeScript interfaces you can use.

_This ticket is connected to issue #6—after you finish this ticket, please move on to that issue._

**Labels:** frontend

**Priority:**

**Size:**

---

### Frontend Integration Test for About Page Data Fetching #6

**Description:**
Write and implement at least one frontend integration test to verify that real About page content is correctly fetched from the backend and rendered on the About page via ReactQuery.

**Acceptance Criteria:**

- At least one automated integration test passes, confirming that the rendered content matches what is provided by the API.

- Test should fail if placeholder content is displayed or if the About page does not update with real data.

- For testing examples, [check out this code from class](https://github.com/koanga-2025/code-from-class/blob/main/unit3-async-apis-useQuery/4-testing-react-query/client/components/__tests__/Sharks.test.tsx)

or
https://miro.com/app/board/uXjVJE4M2P8=/?moveToWidget=3458764644884274813&cot=14

Depends on:
#5

**Labels:** software quality, test

**Priority:**

**Size:**

---

### Display the comments #7

**Description:**
As a user, when I go to Rate A Spam, and click a Spam flavour, I want to be able to see a list of comments for that spam flavour. There are already some seed data comments in the backend. Do a postman GET request to `/api/v1/comments/:spamId`to see what shape the data response is.

1. in the client folder, create an apiClient function e.g. fetchCommentsBySpamId() to make a get request to the backend route `api/v1/comments/:spamId` .
2. In the `/hooks/useComments.ts` file, make a custom hook in the hooks folder for useQuery to use that apiClient function.
3. Refactor the `/components/RateSpam/ListComments.tsx` component to get the data from our custom hook (make sure it’s passing the spamId from the client side routes params).
4. Render the data in the component- specifically the comments text and created-on (figure out how to turn this timestamp number into a more readable date/ time format)...

_This ticket is connected to issue #8 —after you finish this ticket, please move on to that issue._

**Labels:** frontend

**Priority:**

**Size:**

---

### Verify Comments Display on Rate A Spam Page for Specific spamId #8

**Description:**
Write an automated frontend test to check that, when navigating to /rate-spam/2/, the correct list of comments for spamId 2 is rendered.

The test should simulate visiting `/rate-spam/2/` and verify that the component displays the expected comments and their readable dates.

**Acceptance Criteria:**

- An automated frontend test passes, verifying that `/rate-spam/2/` displays the correct comments for spamId 2.

- Test fails if the expected comments data does not appear, or if placeholder/fake data is rendered.

---

Pro tips:

- To generate sample data for your test, refer to the backend seed data returned from /api/v1/comments/2.

Depends on:
#7

**Labels:** frontend, software quality, test

**Priority:**

**Size:**

---

### STRETCH: Display Commenter Name on Rate A Spam Page #9

**Description:**

Enhance the comments section on the Rate A Spam page by showing the name of the person who made each comment.

TIP: you may need to create a new database function to join the comments and the users table…

**Acceptance Criteria:**
Each comment listed on the Rate A Spam page shows the name of the person who made the comment, along with the text and readable date.

Depends on:
#7

**Labels:** backend, frontend

**Priority:**

**Size:**

---

### Add a comment! Authorized users only #10

**Description:**
We only want authorized users to be able to add a comment to a spam flavour.

In the `/hooks/useComments.ts` file, write a custom useMutation hook that calls the exisiting `addComment` function from the `apis/apiClient.ts` file.

Call your custom hook in the existing `AddComment.tsx` component.

Tip: Make sure you use getAccessTokenSilently from useAuth0() to grab the token, you'll need to pass this token (and your form data), to the mutation function in your handleSubmit.

This ticket is connected to issue #11 —after you finish this ticket, please move on to that issue.

**Labels:** auth0, frontend

**Priority:**

**Size:**

---

### Simulate Authorized User Submitting a Comment on Rate A Spam #11

**Description:**
TEST: Write a test for simulating a user submitting a comment in the form, check that it is added to the database. Use the Week 6, testing lecture example in the code-from-class as a point of reference.
https://github.com/koanga-2025/code-from-class/blob/main/unit6-fullstack/2-mocking-auth-for-tests/client/components/__tests__/AddFruit.test.tsx

Depends on:
#10

**Labels:** auth0, test

**Priority:**

**Size:**

---

### Create an API endpoint for Quiz Results data #12

**Description:**
Your task is to create API endpoints on your server side which should return quiz results data in JSON format.
This will consist of:

- Querying the 'results' table by category - check `db/queries/quiz.ts`
- Writing server-side routes to retrieve this data in JSON format - check `routes/quiz.ts`

---

Pro tips:

- Take a look at the way the data is structured in the `db` and `models` folders.

This ticket is connected to issue #13 —after you finish this ticket, please move on to that issue.

**Labels:** backend

**Priority:**

**Size:**

---

### Backend Integration Test for Quiz Results API #13

**Description:**
Writing **at least 1 x backend integration test**.

Pro tips:

- Take a look at the way the data is structured in the `db` and `models` folders.
- Take a look at the code-from-class for Week 5, for examples of server-side integration tests. Make sure that you're testing both the route and the db query in your test.

Depends on:
#12

**Labels:** backend, test

**Priority:**

**Size:**

---

### Render Quiz results data on the Results page #14

**Description:**
Your task is to retrieve JSON data from the backend API endpoints, and render it on the frontend. You will mostly be working in `client/components/ResultsPage.tsx`

- Use an existing helper function to calculate the category that a user most associates with based on their quiz answers.
- Then write an api function in `apis/quiz` which uses that category to get its associated quiz result data from the backend.
- Writing **at least 1 x frontend integration test**

---

Pro tips:

- Take a look at the hardcoded data `ResultPage` component and their corresponding TypeScript interfaces in the `models` folder. This is your source of truth for the return shape of your data.
- If you're unable to retrieve data from the backend just yet, think about how you can handle this in your api functions. Maybe [Promise.resolve()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/resolve) could help with this?
- Take a look at the code-from-class for Week 3, Day 1 (PM) for frontend integration testing examples.

**Labels:** frontend

**Priority:**

**Size:**

---

### Make Ratings component #15

**Description:**
As a user, when I go to the Rate a Spam page, I want to see the average rating of each spam underneath the spam pictures.
If I click onto an individual spam, I should also see the average rating for that spam.
We currently have the custom hook and the apiClient written, check out `useAvgRatingById` hook in the `useRatings.ts`file. This uses the spamId for getting this info.
Your job is to work inside the `RatingAvg.tsx` component, and use useQuery to render the average rating data on the component.
To make the design/ UI of the rating, use this package from material UI: https://mui.com/material-ui/react-rating/
Ideally we would love a custom icon! Perhaps pink squares to represent SPAM? But if that is too hard, MVP is hearts.

TEST: Write a test to render the `/rate-spam` page, and make sure the ratings for one of the spams is what we expect (the same as from the database).

**Labels:** frontend, test

**Priority:**

**Size:**

---

### Backend - Add a Rating! #16

**Description:**
Create the backend POST route to allow authorized user to add a rating to a spam.
The database is already set up to support ratings. So spend some time looking at the ERD diagram, and see how the `ratings` table connects to the `users` and `spam` tables.

Create your POST route in the `/routes/ratings.ts` file. Have it send some data to the `addRating` database function in `db/spam.ts`

As a point of reference, check the POST route for comments (especially for the checkJWT middleware, and the auth0_id).

Tip: use Postman! Remember to generate a test bearer token!

TEST: Write a backend integration test for this POST route, make sure you get back what you expect.

**Labels:** backend, test

**Priority:**

**Size:**

---

### Backend - Delete Comments - user only! #17

**Description:**
In the backend, create a database function and a route for letting users delete a comment.
The CATCH?? Only the user who MADE the comment is authorized to delete it.

Check the POST route for reference of how to use the checkJwt middleware AND how to extract the auth0_id out of the header.

Otherwise, scope out how the `jwt-auth` challenge protected the delete fruits route in the backend.

Tip: use Postman!

TEST: Write a test for this delete route, make sure you get back what you expect.

**Labels:** backend, test

**Priority:**

**Size:**

---

### Make the app layout responsive #18

**Description:**
Currently the layout for the Spam site is desktop only (take a look in dev tools to see what it looks like in mobile view)

The yellow nav menu at the top of the site should be replaced with a "hamburger menu" (Spamburger?) when at mobile size.
Tip: Check out documentation for Tailwind CSS media queries to help you achieve this

**Labels:** Tailwind CSS, frontend

**Priority:**

**Size:**

---

### Add variable difficulty settings to the Snake game #19

**Description:**
There are 2 variables in Snake which can currently affect the game difficulty: speed, numOfObstacles.

Your task is to make those into dynamic variables which are controlled by a set of 2 sliders.

If you consider each slider to have 3 positions (easy, medium, hard), have the sliders default to medium.
Suggested values for the sliders:

- speed > easy: 200, med: 150, hard: 100
- obstacles > easy: 0, med: 3, hard: 5

Write a front end test to test the number of obstacles. This will entail simulating user events to set the sliders and click the "Play" button, then you can count the number of table cells which are obstacles.

**Labels:** frontend

**Priority:**

**Size:**

---
