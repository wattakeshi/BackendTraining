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

[x] **Controllers Refactor:** Separate route definitions from business logic for better scalability.

🔹 Level 2: Advanced Express Features

[x] **Input Validation:** Integrate libraries like Zod or Joi to validate request bodies.

[x] **Middlewares**: Implement global logging and centralized error handling.

🔹 Level 3: Persistence & Infrastructure

[x] **Prisma ORM & PostgreSQL:** Move from volatile memory to a persistent database.

[x] **Docker:** Containerize the application and database for easy deployment.

[x] **JWT Authentication**: Secure routes and implement user login/signup.

## TODO:

🔹 Level 4: Security & Optimization

[ ] Pagination & Filters: Optimize list retrieval for large datasets.


## 📝Personal notes: 

## 🔹 Level 1: Core Logic & Organization

**Routing System:** need to use the cors and app.use(express.json()) for permissions/ read json data.

**CRUD:**

**get** is simple

**post** needs to create a new Task from the req.body and send this with array method (.push)

**PATCH** is pretty simillar to the post, but doesnt need to be too specified (doesnt require every single info, used to edit/change something inside the object)

**DELETE:** need to get the id from req.params and create a new array without the task i want to delete using the array method .filter()

**controlers:** are the functions from (get,patch,put,delete) separated from the route definitions.

## 🔹 Level 2: Advanced Express Features

**ZOD:** used to create schemas like typescript, but not for the compiler (dev), for the user input validation.

**.safeParse()** : to handle errors without crashing the app.

**const partialSchema = schemaName.partial():** to keep the type safety without requiring every single data.

**Middlewares:** Functions that run between the Request and the Controller. (looks like a PrivateRoute from reactrouter)

**Next():** A callback function used to pass control to the next middleware or controller in the stack. If not called, the request hangs

**structure**
the app.ts(server) runs the router, that calls the middlewares that use the schema to validate the inputed datas, then, if passed, the information goes to the controllers and the functions are made.
