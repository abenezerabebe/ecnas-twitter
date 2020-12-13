import React from "react";
import Tweets from "./Tweets";
import Tweet from "./Tweet";

const Placeholder = ({ componentName }) => (
  <p className="text-red-700 italic text-center">
    The component <strong>{componentName}</strong> has not been created yet.
  </p>
);

const Components = {
  tweets: Tweets,
  tweet: Tweet
};

export default ({ blok }) => {
  if (typeof Components[blok.component] !== "undefined") {
    const Component = Components[blok.component];
    return <Component blok={blok} />;
  }
  return blok.component ? <Placeholder componentName={blok.component} /> : null;
};
