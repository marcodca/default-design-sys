import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";
import colors from "./colors";
import typography from "./typography";
import spacing from "./spacing";

//based on the amazing work of CodyHouse, create your design system: https://medium.com/codyhouse/create-your-design-system-part-1-typography-7c630d9092bd

const GlobalStyle = createGlobalStyle`
  ${normalize}
  ${spacing}
  ${colors}
  ${typography}
`;

export default GlobalStyle;
