# Career Cabinet

A full-stack **MERN** web app that helps students explore careers, courses and colleges.

- **Interactive quiz (React):** 10 questions about interests; the API scores the answers and recommends the top 3 career streams, each with careers, courses and a match %.
- **Searchable colleges database (MongoDB):** search by name, city, state or course, and filter by stream, state and type, with pagination.
- **REST API (Node.js + Express):** serves quiz questions, scoring, streams/careers and institutes.

## Tech stack

| Layer     | Technology                         |
|-----------|------------------------------------|
| Frontend  | React 18, React Router 6, Vite     |
| Backend   | Node.js, Express 4                 |
| Database  | MongoDB with Mongoose              |

## Folder structure

```
career-cabinet/
├── server/
│   ├── server.js            # connects to MongoDB, seeds data, starts API
│   ├── app.js               # Express app and routes
│   ├── routes/              # quiz.js, careers.js, institutes.js
│   ├── models/              # Institute.js, QuizResult.js
│   ├── lib/scoring.js       # quiz scoring logic
│   ├── data/                # questions, streams, institutes (seed data)
│   └── test/scoring.test.js
└── client/
    └── src/                 # pages/, components/, api.js, styles.css
```

## Setup

You need **Node.js 18+** and **MongoDB** (local install, or a free MongoDB Atlas cluster).

### 1. Backend

```bash
cd server
npm install
cp .env.example .env      # on Windows: copy .env.example .env
# edit .env if your MongoDB is not at mongodb://127.0.0.1:27017
npm start                 # http://localhost:5000
```

On the first start the `institutes` collection is filled automatically with sample data. Run `npm run seed` any time to wipe and reload it. Run `npm test` for the scoring tests.

### 2. Frontend (in a second terminal)

```bash
cd client
npm install
npm run dev               # http://localhost:5173
```

The Vite dev server proxies `/api` requests to the backend on port 5000.

## API

| Method | Endpoint                    | Description                                              |
|--------|-----------------------------|----------------------------------------------------------|
| GET    | `/api/health`               | Health check                                             |
| GET    | `/api/quiz/questions`       | Quiz questions (scoring data is not exposed)             |
| POST   | `/api/quiz/submit`          | Body `{ name?, answers: [{questionId, optionIndex}] }`; returns top 3 streams and full ranking, and saves the result |
| GET    | `/api/streams`              | All streams with careers and courses                     |
| GET    | `/api/streams/:id`          | One stream                                               |
| GET    | `/api/institutes`           | Query: `q`, `stream`, `state`, `type`, `page`, `limit`   |
| GET    | `/api/institutes/filters`   | States and types for the filter dropdowns                |
| GET    | `/api/institutes/:id`       | One institute                                            |

## How the recommendation works

Each quiz option adds points to one or more streams (see `server/data/questions.js`). The API totals the points per stream, ranks them, and turns each total into a match % (points earned ÷ the most that stream could have earned from the questions answered). The logic is in `server/lib/scoring.js` and is covered by tests.

## Important notes

- **College data is sample data.** Check courses, entrance exams and dates on each institute's official website. Edit `server/data/institutes.js` to add your own colleges, then run `npm run seed`.
- The quiz is a guide, not professional counselling.

## Ideas for future work

User login and saved results, admin panel to manage colleges, more questions, college comparison, scholarship and entrance-exam calendar.
