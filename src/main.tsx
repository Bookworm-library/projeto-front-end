import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { projectTheme } from "./styles/theme";
import { SearchProvider } from "./contexts/searchContext/searchContext";


ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
        <ChakraProvider theme={projectTheme}>
          <App />
        </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
);
