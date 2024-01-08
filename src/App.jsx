import "./App.css";
import Comp1 from "./components/Comp1";
import { createContext } from "react";

export const NameContext = createContext("");

function App() {
  const name = "mali Mate";

  return (
    <div>
      <NameContext.Provider value={name}>
        <Comp1 />
      </NameContext.Provider>
    </div>
  );
}

export default App;
