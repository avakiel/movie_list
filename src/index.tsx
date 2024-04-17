import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import { HashRouter as Router } from "react-router-dom";
import store from "./Redux/Store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router basename="/">
        <ChakraProvider>
          <App />
        </ChakraProvider>
      </Router>
    </Provider>
  </React.StrictMode>
);
