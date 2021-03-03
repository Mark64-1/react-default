import style from "./App.css";
import Router from "./store/Router";
// import { Provider } from "react-redux";
// import configureStore from "./store/configureStore";

// const store = configureStore();

function App() {
  return (
    // <Provider store={store}>
    <div className="App">
      <Router />
    </div>
    // </Provider>
  );
}

export default App;
