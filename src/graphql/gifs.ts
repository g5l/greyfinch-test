import {gql} from "urql";

export const GIFS_BY_CATEGORY_QUERY = gql`
  query gifs ($category: String, $limit: Int, $offset: Int){
    gifs(limit: $limit, where: {category: {_regex: $category}}, offset: $offset) {
      url
      id
      category
    }
  }
`;