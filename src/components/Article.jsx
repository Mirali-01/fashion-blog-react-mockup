import React from "react";

const Article = (props) => {
  return (
    <div className="article">
      <h2>{props.articles.date}</h2>
      <h1>{props.articles.title}</h1>
      <img src={props.articles.img} alt="Nice photo coming soon" />
      <p>{props.articles.text}</p>
      <a href="">Continue...</a>
    </div>
  );
};

export default Article;
