import { css } from "styled-components";
import chroma from "chroma-js";

const defaultColors = {
  primary: "#f38181",
  accent: "#fce38a",
  success: "#88c459",
  error: "#f5414f",
  warning: "#ffd137"
};

const { primary, accent, success, error, warning } = defaultColors;

const colors = css`
  :root {
    /* main colors */
    --color-primary: ${props => props.theme.colors.primary || primary};
    --color-primary-light: ${props =>
      chroma(props.theme.colors.primary || primary).brighten()};
    --color-primary-dark: ${props =>
      chroma(props.theme.colors.primary || primary).darken()};
    --color-primary-bg: ${props =>
      chroma(props.theme.colors.primary || primary).alpha(0.2)};

    --color-accent: ${props => props.theme.colors.accent || accent};
    --color-accent-light: ${props =>
      chroma(props.theme.colors.accent || accent).brighten()};
    --color-accent-dark: ${props =>
      chroma(props.theme.colors.accent || accent).darken()};
    --color-accent-bg: ${props =>
      chroma(props.theme.colors.accent || accent).alpha(0.2)};

    /* shades - generated using chroma.js - 12 steps */
    --black: #1d1d21;
    --gray-10: #2e2e31;
    --gray-6: #7b7a7d;
    --gray-4: #a5a5a6;
    --gray-3: #bbbbbc;
    --gray-2: #d1d0d2;
    --gray-1: #e8e7e8;
    --white: white;

    --color-success: ${props => props.theme.colors.success || success};
    --color-error: ${props => props.theme.colors.error || error};
    --color-warning: ${props => props.theme.colors.success || warning};

    /* typography */
    --color-text: var(--gray-10);
    --color-text-heading: var(--black);
    --color-text-subtle: var(--gray-6);
    --color-link: var(--color-primary);
    --color-link-visited: var(--color-primary-dark);
    --color-mark: var(--color-accent-bg);
    --color-blockquote-border: var(--gray-2);

    /* border */
    --color-border: var(--gray-2);

    /* body */
    --color-body: var(--white);

    /* forms */
    --form-element-border: var(--color-border);
    --form-element-border-focus: var(--color-primary);
    --form-element-border-error: var(--color-error);
    --form-element-bg: var(--white);
    --form-text-placeholder: var(--gray-4);

    /* buttons */
    --btn-primary-bg: var(--color-primary);
    --btn-primary-hover: var(--color-primary-light);
    --btn-primary-active: var(--color-primary-dark);
    --btn-primary-label: var(--white);

    /* icons */
    --color-icon-primary: var(--gray-4);
    --color-icon-secondary: inherit;
  }
`;

export default colors;
