import {Provider, useQuery} from 'urql';
import {client} from '@/graphql/api';
import {GIFS_BY_CATEGORY_QUERY} from "@/graphql/gifs";

function App() {
  return (
    <Provider value={client}>
      <div style={{margin: 24}}>
        <SampleQuery/>
      </div>
    </Provider>
  );
}

export default App;

function SampleQuery() {
  const [result] = useQuery({
    query: GIFS_BY_CATEGORY_QUERY,
    variables: {category: "dog", limit: 10},
  });

  let {data, fetching, error} = result;

  if (fetching) return <p>Loading...</p>;
  if (error) return <p>Oh no... {error.message}</p>;

  console.log({data, result});
  return (
    <div>
      {data.gifs.map(gif => (
        <div key={gif.id}>
          <img src={gif.url} alt={gif.title}/>
          <p>{gif.title}</p>
        </div>
      ))}
    </div>
  );
}