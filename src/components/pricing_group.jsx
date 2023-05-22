import React from "react"
import {TextSection} from 'aether-marketing'

const dataFree = {
  body: ["this is free text"],
title: "this title is free",
padding: "0px",
backgroundColor: "grey_05"
};

export const Pricing_Group = () => ({
    free:<TextSection
          subtitle={dataFree.subtitle}
          layout={dataFree.layout}
          button={dataFree.button}
          backgroundColor={dataFree.backgroundColor}
          padding={dataFree.padding}
          title={dataFree.title}
          body={dataFree.body}
  />,
    basic: "This is basic pricing text!",
    professional: "This is professional pricing text!"
  })