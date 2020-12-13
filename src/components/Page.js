import React from "react";
import DynamicComponent from "./DynamicComponent";
import SbEditable from "storyblok-react";

export default ({ blok }) => {
  const content =
    blok.body &&
    blok.body.map((childBlok) => (
      <DynamicComponent blok={childBlok} key={childBlok._uid} />
    ));
  return <SbEditable content={blok}>{content}</SbEditable>;
};
