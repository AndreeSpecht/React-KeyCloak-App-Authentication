Keycloak Secure Customer Manager
A full-stack application demonstrating a robust, end-to-end security model for a modern web system. It features a Java/Spring Boot backend API and a React frontend, with all authentication and role-based authorization centrally managed by Keycloak.

✨ Features
Full CRUD Functionality: Create, Read, Update, and Delete customer data.
Centralized Authentication: User login is fully delegated to Keycloak using the OpenID Connect (OIDC) protocol.
Role-Based Access Control (RBAC):
API Protection: Each API endpoint (GET, POST, PUT, DELETE) requires a specific user role.
Dynamic UI: Frontend components (buttons, forms) are rendered conditionally based on the logged-in user's roles.
Secure Token Handling: Uses JSON Web Tokens (JWT) issued by Keycloak to manage user sessions and authorize API requests.
Decoupled Architecture: Clean separation between the identity provider, backend API, and frontend client.

⚙️ Tech Stack
Identity Provider:
Keycloak: Manages all users, roles, and authentication flows.
Docker: Used to run the Keycloak instance.
Backend (API):
Java 17
Spring Boot 3.x
Spring Security 6: Secures the API as an OAuth 2.0 Resource Server.
Maven: Dependency Management.
Frontend:
React 18
keycloak-js: Official Keycloak library for browser integration.
axios: For making secure HTTP requests to the backend.

🚀 Getting Started
Follow these steps to get the entire system running locally.
Prerequisites
Ensure you have the following installed on your system:
Java (JDK) 17+
Node.js v18+ and npm
Docker and Docker Desktop
Git


<img width="713" alt="image" src="https://github.com/user-attachments/assets/3494c240-fe8a-4031-809d-f4d2f0e1967c" />

Keycloak Setup (Automated Import)
This project includes a Keycloak realm configuration file to automate setup.
First, create the file realm-export.json in the project's root directory and paste the configuration from the appendix at the bottom of this README.
Then, run Keycloak using Docker. This command will start Keycloak and automatically import the realm configuration from the file.

<img width="703" alt="image" src="https://github.com/user-attachments/assets/a9e991cc-3815-48d3-9396-4029b38e2bbe" />

ackend Setup
Open a new terminal window.

<img width="703" alt="image" src="https://github.com/user-attachments/assets/af26ff2a-5f32-4c6d-86fe-89a4b11f98cd" />

Frontend Setup
Open a third terminal window.

<img width="703" alt="image" src="https://github.com/user-attachments/assets/ac569966-310a-429a-ba01-ff1d34947724" />

🔧 Usage
Open your browser and navigate to http://localhost:3000.
You will be automatically redirected to the Keycloak login page.
Log in with the pre-configured test user:
Username: test.user
Password: test
Upon successful login, you will be redirected back to the application.
You will see that only the "Search" and "Create" buttons are visible, corresponding to the user's default roles.
You can now test the CRUD functionality based on the permissions you have.

🔐 Security Model
Authentication Flow
The application uses the OIDC Authorization Code Flow.
React app redirects unauthenticated users to Keycloak.
Keycloak handles the login process.
On success, Keycloak returns a JWT to the React app.
React includes this JWT as a Bearer Token in all API requests.
The Spring Boot API validates the token on every request before granting access.

<img width="494" alt="image" src="https://github.com/user-attachments/assets/70ff600b-9ed4-4e5a-ad3f-13e57004baac" />

Project Structure

<img width="695" alt="image" src="https://github.com/user-attachments/assets/bc3b2c20-eb08-4163-bf4e-41699e0161cf" />
