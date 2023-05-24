import React from "react"
import { TextSection } from 'aether-marketing'


const dataEnterprise = {
  body: ["This feature is only available on <a href='https://www.postman.com/pricing/'>Postman Enterprise plans</a>."],
  paddingBottom: "0px",
  paddingTop: "0px",
  backgroundColor: "grey_05",
  
};

const dataSelectEnterprise = {
  body: ["This feature is only available on select <a href='https://www.postman.com/pricing/'>Postman Enterprise plans</a>."],
  paddingBottom: "0px",
  paddingTop: "0px",
  backgroundColor: "grey_05",
  className: "offset-lg-0"
};

const dataProEnterprise = {
  body: ["This feature is only available on <a href='https://www.postman.com/pricing/'>Postman Professional and Enterprise plans.</a>"],
  paddingBottom: "0px",
  paddingTop: "0px",
  backgroundColor: "grey_05",
  className: "offset-lg-0"
};

const dataProSelectEnterprise = {
  body: ["This feature is only available on <a href='https://www.postman.com/pricing/'>Postman Professional and select Enterprise plans</a>."],
  paddingBottom: "0px",
  paddingTop: "0px",
  backgroundColor: "grey_05",
  className: "offset-lg-0"
};
const dataProEnterpriseOptions = {
  body: ["Some options of this feature are only available on <a href='https://www.postman.com/pricing/'>Postman Professional and Enterprise plans</a>."],
  paddingBottom: "0px",
  paddingTop: "0px",
  backgroundColor: "grey_05",
  className: "offset-lg-0"
};

export const Pricing_Group = () => ({
  enterprise: <TextSection
    backgroundColor={dataEnterprise.backgroundColor}
    paddingTop={dataEnterprise.paddingTop}
    paddingBottom={dataEnterprise.paddingBottom}
    title={dataEnterprise.title}
    body={dataEnterprise.body}
    className={dataEnterprise.className}
  />,
 selectEnterprise: <TextSection
    subtitle={dataSelectEnterprise.subtitle}
    button={dataSelectEnterprise.button}
    backgroundColor={dataSelectEnterprise.backgroundColor}
    paddingTop={dataSelectEnterprise.paddingTop}
    paddingBottom={dataSelectEnterprise.paddingBottom}
    title={dataSelectEnterprise.title}
    body={dataSelectEnterprise.body}
    className={dataSelectEnterprise.className}
  />,
  proEnterprise:  <TextSection
  subtitle={dataProEnterprise.subtitle}
  button={dataProEnterprise.button}
  backgroundColor={dataProEnterprise.backgroundColor}
  paddingTop={dataProEnterprise.paddingTop}
  paddingBottom={dataProEnterprise.paddingBottom}
  title={dataProEnterprise.title}
  body={dataProEnterprise.body}
  className={dataProEnterprise.className}
/>,
 proSelectEnterprise:  <TextSection
 subtitle={dataProSelectEnterprise.subtitle}
 button={dataProSelectEnterprise.button}
 backgroundColor={dataProSelectEnterprise.backgroundColor}
 paddingTop={dataProSelectEnterprise.paddingTop}
 paddingBottom={dataProSelectEnterprise.paddingBottom}
 title={dataProSelectEnterprise.title}
 body={dataProSelectEnterprise.body}
 className={dataProSelectEnterprise.className}
/>,
proEnterpriseOptions:  <TextSection
subtitle={dataProEnterpriseOptions.subtitle}
button={dataProEnterpriseOptions.button}
backgroundColor={dataProEnterpriseOptions.backgroundColor}
paddingTop={dataProEnterpriseOptions.paddingTop}
paddingBottom={dataProEnterpriseOptions.paddingBottom}
title={dataProEnterpriseOptions.title}
body={dataProEnterpriseOptions.body}
className={dataProEnterpriseOptions.className}
/>
})