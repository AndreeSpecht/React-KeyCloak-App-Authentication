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

Clone the Repository
<img width="713" alt="image" src="https://github.com/user-attachments/assets/3494c240-fe8a-4031-809d-f4d2f0e1967c" />

