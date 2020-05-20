import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
    fontSizes: {
        tiny: "0.83em",
        small: "1em",
        medium: "2em",
        large: "3em"
    }
}

const Theme = ({ children }) => (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;