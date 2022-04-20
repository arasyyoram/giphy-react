import { useEffect, useState } from "react";

const ImagesComponent = (props) => {
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    console.log("fetching trending...");
    const giphyKey = process.env.REACT_APP_GIPHY_KEY;

    fetch(`https://api.giphy.com/v1/gifs/trending?api_key=${giphyKey}&limit=12`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.data);
        setGifs(data.data);
      });
    // console.log(gifs, "datanya");
    // setGifs({ gifs: gifs.data });
  }, []);

  return (
    <div>
      {gifs.length > 0 &&
        gifs.map((e) => {
          return (
            <img key={e.id} src={e.images.fixed_width.url} alt={e.title} />
          );
        })}
    </div>
  );
};
// https://media.giphy.com/media/Vh8pbGX3SGRwFDh3V0/source.gif
export default ImagesComponent;
