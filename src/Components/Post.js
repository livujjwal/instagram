import React from "react";
import { useSelector } from "react-redux";

const Post = () => {
  const speaker = useSelector((store) => store.joke.speaker);
  const joke = useSelector((store) => store.joke.joke);
  return (
    <div className="relative left-60 top-20 flex flex-col p-2 m-2">
      <h2>{speaker}</h2>
      <p>{joke}</p>
    </div>
  );
};

export default Post;
