# 🚀 Todo-List API (Learning Express & TypeScript)
A lightweight RESTful API built to practice the fundamentals of backend development. This project currently manages a task list in-memory, focusing on clean routing and HTTP standard practices.

# 🛠️ Technologies & Tools
Node.js - JavaScript runtime environment.

Express.js - Web framework for Node.js.

TypeScript - For static typing and better developer experience.

Postman - Used for API testing (planning to migrate to a more automated tool due to manual workflow limitations).

# 🚧 Roadmap
This project is evolving. Below are the planned study roadmap to become a backend developer:


## ✅ Completed

[x] **Server Creation**: Learned how to initialize and configure a backend server using **Node.js**, **Express**, and **TypeScript**.
[x] **Routing System**: Mastered the process of creating modular routes and connecting them from `index.ts` to the main `app.ts` file.
[x] **HTTP Methods (CRUD)**: Successfully implemented **GET**, **POST**, and **DELETE** methods to manage data, including handling URL parameters (`req.params`) and request bodies (`req.body`).

🔹 Level 1: Core Logic & Organization

[ ] PUT Method: Implement full updates for existing tasks.

[ ] PATCH Method: Add a route to toggle the done status only.

[ ] Controllers Refactor: Separate route definitions from business logic for better scalability.

🔹 Level 2: Advanced Express Features
[ ] Middlewares: Implement global logging and centralized error handling.

[ ] Input Validation: Integrate libraries like Zod or Joi to validate request bodies.

🔹 Level 3: Persistence & Infrastructure
[ ] Prisma ORM & PostgreSQL: Move from volatile memory to a persistent database.

[ ] Docker: Containerize the application and database for easy deployment.

🔹 Level 4: Security & Optimization
[ ] JWT Authentication: Secure routes and implement user login/signup.

[ ] Pagination & Filters: Optimize list retrieval for large datasets.
