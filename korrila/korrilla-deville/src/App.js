// import { useState } from "react";
import "./App.css";
import allReceipts from "./models/receipt";
import Receipt from "./components/Receipt";
import "./korilla.css";

function App() {
  const state = {
    receipt1: allReceipts[0],
    receipt2: allReceipts[1],
    receipt3: allReceipts[2],
  };
  return (
    <div className="App">
      <h1>Korrilla Deville Korean BBQ</h1>
      <hr />

      <div className="parent">
        <Receipt receipt={state.receipt1} />
        <Receipt receipt={state.receipt2} />
        <Receipt receipt={state.receipt3} />
      </div>
    </div>
  );
}

export default App;
