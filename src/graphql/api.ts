import {createClient} from "urql";

export const client = createClient({
  url: import.meta.env.VITE_GRAPHQL_API_URL
});
