import React from "react"
import { TextSection } from 'aether-marketing'


const dataFree = {
  body: ["This is free pricing text, <a href='/'>the link</a>"],
  paddingBottom: "0px",
  paddingTop: "0px",
  backgroundColor: "grey_05"
};

const dataBasic = {
  body: ["This is <strong>Basic</strong> text, <a href='/'>the Basic link</a>"],
  paddingBottom: "0px",
  paddingTop: "0px",
  backgroundColor: "grey_05"
};

const dataProfessional = {
  body: ["This is <em>Professional</em> text, <a href='https://www.postman.com/pricing/'>the Professional link</a>"],
  paddingBottom: "0px",
  paddingTop: "0px",
  backgroundColor: "grey_05"
};

export const Pricing_Group = () => ({
  free: <TextSection
    backgroundColor={dataFree.backgroundColor}
    paddingTop={dataFree.paddingTop}
    paddingBottom={dataFree.paddingBottom}
    title={dataFree.title}
    body={dataFree.body}
    className={dataFree.className}
  />,
  basic: <TextSection
    subtitle={dataBasic.subtitle}
    button={dataBasic.button}
    backgroundColor={dataBasic.backgroundColor}
    paddingTop={dataBasic.paddingTop}
    paddingBottom={dataBasic.paddingBottom}
    title={dataBasic.title}
    body={dataBasic.body}
    className={dataBasic.className}
  />,
  professional:  <TextSection
  subtitle={dataProfessional.subtitle}
  button={dataProfessional.button}
  backgroundColor={dataProfessional.backgroundColor}
  paddingTop={dataProfessional.paddingTop}
  paddingBottom={dataProfessional.paddingBottom}
  title={dataProfessional.title}
  body={dataProfessional.body}
  className={dataProfessional.className}
/>
})