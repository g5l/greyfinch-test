import {useQuery} from "urql";
import {GIFS_BY_CATEGORY_QUERY} from "@/graphql/gifs";
import React from "react";
import {Gif} from "@/types";
import {VirtuosoGrid} from "react-virtuoso";
import "./styles.css";

interface PropsTimeline {
  data: Gif[],
  category: string,
  loadMore: () => void
}

const LIMIT: number = 300;

// I kept the commented code to do an InfiniteScroll on Timeline so that maybe during the technical
// interview we could do it together, I couldn't achieve this using userQuery
export const Timeline = (props: PropsTimeline) => {
  // const [gifs, setGifs] = useState<Gif[]>([]);
  // const [isFetchingMore, setIsFetchingMore] = useState(false);
  // const [hasMore, setHasMore] = useState(true);
  // const offset = gifs?.length;

  // useEffect(() => {
  //   setGifs([]);
  //   setHasMore(true);
  // }, [props.category]);

  const [{data, fetching, error}] = useQuery({
    query: GIFS_BY_CATEGORY_QUERY,
    variables: {category: props.category, limit: LIMIT},
    // pause: !props.category || isFetchingMore,
    // context: React.useMemo(() => ({}), [])
  });
  const gifsLength = data?.gifs?.length;

  // useEffect(() => {
  //   if (data && data.gifs) {
  //     console.log({data: data.gifs});
  //     if (data.gifs.length === 0) {
  //       setHasMore(false);
  //     } else {
  //       setGifs(prevItems => [...prevItems, ...data.gifs]);
  //     }
  //     setIsFetchingMore(false);
  //   }
  // }, [data]);

  const loadMore = () => {
    // if (!fetching && !isFetchingMore && hasMore) setIsFetchingMore(true);
  };


  if (error || !gifsLength) return <p>Not found</p>;
  if (fetching) return <p>Loading...</p>;

  return (
    <VirtuosoGrid
      data={data?.gifs}
      totalCount={gifsLength}
      className="infiniteLoop-container"
      endReached={loadMore}
      listClassName="infiniteLoop-list"
      useWindowScroll
      itemContent={(index, item) => (
        <img key={index} src={item.url} alt={item.category} className="infiniteLoop-image"/>
      )}
    />
  );
};