import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { MonthStatistics } from "./pages/MonthStatistics/MonthStatistics";
import { Header } from "./shared/Header/Header";

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/month-statistics" Component={MonthStatistics} />
      </Routes>
    </div>
  );
}

export default App;
