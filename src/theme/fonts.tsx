import { GlobalProps } from "@emotion/react";
import dynamic from "next/dynamic";
import { ReactElement } from "react";

const GlobalStyles = dynamic(
  () => import("@emotion/react").then((mod) => mod.Global),
  { ssr: false }
);

const Fonts = () => {
  return (
    <GlobalStyles
      styles={`
    /* latin */
    @font-face {
        font-family: 'Segoe UI Regular';
        font-style: normal;
        font-weight: normal;
        src: local('Segoe UI Regular'), url('Segoe UI.woff') format('woff');
        }
        
    
        @font-face {
        font-family: 'Segoe UI Italic';
        font-style: normal;
        font-weight: normal;
        src: local('Segoe UI Italic'), url('Segoe UI Italic.woff') format('woff');
        }
        
    
        @font-face {
        font-family: 'Segoe UI Bold';
        font-style: normal;
        font-weight: normal;
        src: local('Segoe UI Bold'), url('Segoe UI Bold.woff') format('woff');
        }
        
    
        @font-face {
        font-family: 'Segoe UI Bold Italic';
        font-style: normal;
        font-weight: normal;
        src: local('Segoe UI Bold Italic'), url('Segoe UI Bold Italic.woff') format('woff');
        }
    `}
    />
  );
};

export default Fonts;
