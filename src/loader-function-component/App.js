import Loader from "./Loader";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Loader spinnerSize={60} isVisible={false} />
    </div>
  );
}

export default App;
