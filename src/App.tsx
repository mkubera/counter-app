import "./App.css";
import { useState } from "react"; // React Hook do stanu (model)

const App = () => {
  // Model
  const INIT_COUNTER = 10;
  const [counter, setCounter] = useState(INIT_COUNTER);
  const [appTitle, setAppTitle] = useState("Counter App");

  // Update
  const incrementCounter = (state) => state + 1;
  const decrementCounter = (state) => state - 1;
  const resetCounter = () => INIT_COUNTER;

  // Events
  const incrementCounterEvent = (e) => setCounter(incrementCounter);
  const decrementCounterEvent = (e) => setCounter(decrementCounter);
  const resetCounterEvent = (e) => setCounter(resetCounter);
  const setAppTitleEvent = (e) => {
    e.preventDefault();
    const { title } = e.currentTarget.elements;
    setAppTitle((state) => title.value);
  };

  // View
  return (
    <div className="App">
      <header className="App-header">
        {/* <p>2 + 2 = {2 + 2}</p> */}
        <h1>{`${appTitle.toUpperCase()}`}</h1>
        <form onSubmit={setAppTitleEvent}>
          <input type="text" name="title" defaultValue={appTitle} />
          <button>Change title</button>
        </form>
        <div id="container">
          <h2>Counter</h2>
          <span id="counter">{counter}</span>
          <div>
            <button id="plus" onClick={incrementCounterEvent}>
              +
            </button>
            <button id="minus" onClick={decrementCounterEvent}>
              -
            </button>
          </div>
          <button id="reset" onClick={resetCounterEvent}>
            Reset
          </button>
        </div>
      </header>
    </div>
  );
};

export default App;
