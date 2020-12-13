import React from "react";
import DynamicComponent from "./DynamicComponent";
import SbEditable from "storyblok-react";

export default function Tweet({ blok }) {
  return (
    <SbEditable content={blok} key={blok._uid}>
      <div
        style={{
          display: "flex",
          flexFlow: "row wrap",
          justifyContent: "space-between"
        }}
      >
        {blok.tweets.map((blok) => (
          <DynamicComponent blok={blok} key={blok._uid} />
        ))}
      </div>
    </SbEditable>
  );
}
