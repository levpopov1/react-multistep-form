import React from "react";
import "./App.css";
import MultiStepForm from "./components/MultiStepForm";
import PeopleList from "./components/PeopleList";

function App() {
  return (
    <div className="App container mx-auto">
      <PeopleList />
      <MultiStepForm />
    </div>
  );
}

export default App;
