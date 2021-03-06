import styled, { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
export const Theme = {
  colors: {
    body: '#333333',
    green: '#cae8dc',
    orange: '#fb8c4b',
    placeholder: '#aaaaaa',
  },
  typography: {
    face: {
      primary: `"Poppins", "Helvetica Neue", sans-serif`,
      secondary: `'Press Start 2P', cursive`,
    },
  },
};

const breakpoints: { [key: string]: number } = {
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
};

export const getBreakpoint = (breakpoint: string): string => {
  return `${breakpoints[breakpoint]}px`;
};

export const GlobalStyle = createGlobalStyle`
  ${reset}

  html, body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;
  }

  body {
    background: #f5f7fb;
    font-size: 16px;
    font-family: ${Theme.typography.face.primary};
    background-color: ${Theme.colors.green};
    padding: 20px;

    @media screen and (max-width: ${getBreakpoint('md')}) {
      font-size: 14px;
    }

    @media screen and (max-width: ${getBreakpoint('sm')}) {
      font-size: 13px;
    }
  }
`;

export const Header1 = styled.h1`
  color: ${(props) => (props.color ? props.color : props.theme.colors.body)};
  font-family: ${(props) => props.theme.typography.face.primary};
  font-size: 3em;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.25;
  letter-spacing: 0.006em;
  margin-bottom: 1rem;
`;

export const Header2 = styled.h2`
  color: ${(props) => (props.color ? props.color : props.theme.colors.body)};
  font-family: ${(props) => props.theme.typography.face.primary};
  font-size: 2.25em;
  font-weight: 700;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.33;
  letter-spacing: 0.006em;
  margin-bottom: 1rem;
`;

export const Header3 = styled.h3`
  color: ${(props) => (props.color ? props.color : props.theme.colors.body)};
  font-family: ${(props) => props.theme.typography.face.primary};
  font-size: 1.25em;
  font-weight: 700;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.8;
  letter-spacing: 0.006em;
  margin-bottom: 1rem;
`;

export const Header4 = styled.h4`
  color: ${(props) => (props.color ? props.color : props.theme.colors.body)};
  font-family: ${(props) => props.theme.typography.face.secondary};
  font-size: 1em;
  font-weight: 600;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.5;
  letter-spacing: 0.013em;
  margin-bottom: 1rem;
`;

export const Header5 = styled.h5`
  color: ${(props) => (props.color ? props.color : props.theme.colors.body)};
  font-family: ${(props) => props.theme.typography.face.secondary};
  font-size: 0.875em;
  font-weight: 600;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.5;
  letter-spacing: 0.013em;
  margin-bottom: 1rem;
`;
