import React from "react";
import CohortDetails from "./CohortDetails";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Cohort Dashboard</h1>
      <CohortDetails
        name="Full Stack Development"
        status="ongoing"
        startDate="2025-07-01"
        endDate="2025-10-01"
      />
      <CohortDetails
        name="Cloud Computing"
        status="completed"
        startDate="2025-01-15"
        endDate="2025-04-15"
      />
    </div>
  );
}

export default App;
