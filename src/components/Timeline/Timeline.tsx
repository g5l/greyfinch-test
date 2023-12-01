import {useQuery} from "urql";
import {GIFS_BY_CATEGORY_QUERY} from "@/graphql/gifs";
import React, {useEffect, useState} from "react";
import {Gif} from "@/types";
import {VirtuosoGrid} from "react-virtuoso";
import {Image} from "@/components";
import "./styles.css";

export interface PropsTimeline {
  category: string;
}

const LIMIT: number = 10;

export const Timeline = (props: PropsTimeline) => {
  const [gifs, setGifs] = useState<Gif[]>([]);
  const [shouldFetchMore, setShouldFetchMore] = useState(true);
  const [hasMore, setHasMore] = useState(true);
  const gifsLength = gifs.length;

  useEffect(() => {
    setGifs([]);
    setHasMore(true);
    setShouldFetchMore(true);
  }, [props.category]);

  const [{data, fetching, error}] = useQuery({
    query: GIFS_BY_CATEGORY_QUERY,
    variables: {category: props.category, limit: LIMIT, offset: gifsLength},
    pause: !shouldFetchMore
  });

  useEffect(() => {
    if (data && data.gifs) {
      if (data.gifs.length === 0) {
        setHasMore(false);
      } else {
        setGifs(prevGifs => [...prevGifs, ...data.gifs]);
      }
      setShouldFetchMore(false);
    }
  }, [data]);

  const loadMore = () => {
    if (!fetching && !shouldFetchMore && hasMore) setShouldFetchMore(true);
  };

  if (error) return <p>Not found</p>;
  if (fetching && gifsLength < 0) return <p>Loading...</p>;

  return (
    <VirtuosoGrid
      data={gifs}
      totalCount={gifsLength}
      className="infiniteLoop-container"
      endReached={loadMore}
      listClassName="infiniteLoop-list"
      useWindowScroll
      itemContent={(index, item: Gif) => <Image key={index} {...item}/>}
    />
  );
};