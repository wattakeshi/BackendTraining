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
🔹 Level 1: Core Logic & Organization

[x] **Server Creation**: Learned how to initialize and configure a backend server using **Node.js**, **Express**, and **TypeScript**.

[x] **Routing System**: Mastered the process of creating modular routes and connecting them from `index.ts` to the main `app.ts` file.

[x] **HTTP Methods (CRUD)**: Successfully implemented **GET**, **POST**, **DELETE**, **PUT** and **PATCH** methods to manage data, including handling URL parameters (`req.params`) and request bodies (`req.body`).

[x] Controllers Refactor: Separate route definitions from business logic for better scalability.

## TODO:

🔹 Level 2: Advanced Express Features

[ ] Middlewares: Implement global logging and centralized error handling.

[ ] Input Validation: Integrate libraries like Zod or Joi to validate request bodies.

🔹 Level 3: Persistence & Infrastructure

[ ] Prisma ORM & PostgreSQL: Move from volatile memory to a persistent database.

[ ] Docker: Containerize the application and database for easy deployment.

🔹 Level 4: Security & Optimization
[ ] JWT Authentication: Secure routes and implement user login/signup.

[ ] Pagination & Filters: Optimize list retrieval for large datasets.


## 📝Personal notes: 

## Level 1: Core Logic & Organization

**Routing System:** need to use the cors and app.use(express.json()) for permissions/ read json data.

**CRUD:**

**get** is simple

**post** needs to create a new Task from the req.body and send this with array method (.push)

**PATCH** is pretty simillar to the post, but doesnt need to be too specified (doesnt require every single info, used to edit/change something inside the object)

**DELETE:** need to get the id from req.params and create a new array without the task i want to delete using the array method .filter()

**controlers:** are the functions from (get,patch,put,delete) separated from the route definitions.
