# Animal Gif Explorer
Animal Gif Explorer is a React-based application designed to entertain children in waiting rooms. It utilizes a GraphQL API to fetch and display gifs of various animals such as cats, dogs, elephants, lions, and monkeys. Users can filter gifs by category or through a search input.

## Key Features
* __Gif Browsing:__ Browse gifs across multiple animal categories.
* __Search Functionality:__ Filter gifs by typing part of the animal's name.
* __GraphQL Integration:__ Utilizes a GraphQL API built with Hasura for data retrieval.

## Tech Stack
* __Frontend:__ React
* __API:__ GraphQL, Hasura
* __Others:__ Docker, Vite, URQL

## Getting Started
### Prerequisites
* Node.js
* Docker

### Installation
1. Clone the Repository
```
git clone [repository-link]
cd app
```

2. Install Dependencies
```
npm install
```

3. Run the Application
```
npm run dev
```

## Available Scripts

- __`npm run dev`:__ Runs the app in development mode with hot-reloading enabled.
- __`npm run build`:__ Compiles TypeScript files and builds the app for production to the `dist` folder.
- __`npm run lint`:__ Lints and checks the code for any syntax errors.
- __`npm run preview`:__ Starts a local server for previewing the production build.
- __`npm run test:watch`:__ Runs all test suite in watch mode

## Project Structure
- __/components:__ React components used across the application.
- __/graphql:__ GraphQL queries and mutations.
- __/pages:__ React page components.
- __/types:__ TypeScript type definitions.
