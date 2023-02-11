import React from "react";
import { Provider } from "react-redux";
import { AppStack } from "./navigation-manager";
import { store } from "./store";
import { db } from "./config/firebase";

const Screen = () => {
  return (
    <Provider store={store}>
      <AppStack />
    </Provider>
  );
};

export default Screen;
