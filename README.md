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
* Remove the `.sample` from `.env.sample` file and provide a value for the `VITE_GRAPHQL_API_URL` variable

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
  
## Why I use React-Virtuoso for Virtualized Timeline
In Animal Gif Explorer, we aim to provide a seamless and efficient browsing experience, especially when dealing with a large number of animal gifs. This is where react-virtuoso comes into play.

### Efficient Rendering with Virtualization
React Virtuoso is a powerful React virtual list component that we have integrated to handle the rendering of our gif timeline. Virtualization is a technique that renders only the items in the list that are currently in the viewport or about to enter it. This means that, instead of loading and rendering every single gif at once – which can be overwhelming for both the browser and the user – `react-virtuoso` dynamically loads and unloads gifs as the user scrolls. This results in a significant performance boost, reducing memory usage and improving the responsiveness of the application.

### Smooth User Experience
With `react-virtuoso`, users experience smooth scrolling regardless of the number of gifs. This is crucial for our application, as it is designed for use in waiting rooms where network conditions can vary and performance is key to keeping children entertained without frustration.

### Scalability and Maintenance
As our application grows and the number of gifs increases, `react-virtuoso` ensures that our app can scale without a drop in performance. Additionally, its well-documented API and active community support make it a reliable choice for long-term maintenance and potential feature expansions.
