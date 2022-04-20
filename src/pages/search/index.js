import { useState } from "react";
import SearchBar from "./searchBar";
import { useSelector, useDispatch } from "react-redux";
import { searchGif } from "./actions";

function SearchComponent() {
  const [gifs, setGifs] = useState([]);
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const currentQuery = useSelector((state) => state.query);

  const getUsers = async (event) => {
    event.preventDefault();
    console.log("fetching...");
    const giphyKey = process.env.REACT_APP_GIPHY_KEY;

    dispatch(searchGif(query));

    const gifs = await fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=${giphyKey}&q=${query}&limit=12`
    )
      .then((response) => response.json())
      .then((data) => data.data);
    console.log(gifs);
    // setGifs({ gifs: gifs.data });
    setGifs(gifs);
  };

  const queryInput = (event) => {
    // setQuery({ query: event.target.value });
    setQuery(event.target.value);
  };

  return (
    <div>
      <SearchBar getUsers={getUsers} queryInput={queryInput} />
      <h1>{currentQuery}</h1>

      {gifs.length > 0 &&
        gifs.map((e) => {
          return (
            <img key={e.id} src={e.images.fixed_width.url} alt={e.title} />
          );
        })}
    </div>
  );
}

export default SearchComponent;
