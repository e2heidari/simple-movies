import React, { useState } from "react";
import heart from '../resources/image/heart.svg'
import heartFill from '../resources/image/heart-fill.svg'
const Movie = ({ title, year, imageUrl, heartUrl, number }) => {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(number)
  const changeImage = () => {
    setLiked(!liked);
    if (liked) {
      setLikeCount(likeCount - 1)
    } else { setLikeCount(likeCount + 1) }
  }
  return (
    <div className="movie-container">
      <div className="item-a">{`${likeCount}`}</div>
      <img className="item-c" src={liked ? heartFill : heart} alt="like" onClick={changeImage} />
      <h2 className="item-b">{`${title} (${year})`}</h2>
      <img className="item-d" src={imageUrl} alt={`${title} - Poster`} />
    </div>
  );
};

export default Movie;
