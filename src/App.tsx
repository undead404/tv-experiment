import { Provider as ReduxProvider } from "react-redux";

import "./App.css";
import HomePage from "./pages/Home";
import store from "./store";

function App() {
  return (
    <ReduxProvider store={store}>
      <div className="App">
        <HomePage />
      </div>
    </ReduxProvider>
  );
}

export default App;
