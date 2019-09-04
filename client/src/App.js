import React from "react";
import "normalize.css";
import { Provider } from "react-redux";

import store from "./store";
import Wrapper from "./components/Wrapper";
import Footer from "./components/Footer";
import ThemeSwitcher from "./components/ThemeSwitcher";
import QuoteDisplay from "./components/QuoteDisplay";

console.log(store.getState().theme);
const App = () => {
  return (
    <Provider store={store}>
      <Wrapper>
        <ThemeSwitcher />
        <QuoteDisplay />
      </Wrapper>
      <Footer />
    </Provider>
  );
};

export default App;
