// import React, { useState } from "react";
import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import Timeline from "./components/timeline/Timeline";
import Widgets from "./components/widget/Widgets";

function App() {
  return (
    <div className="app">
      {/* Sidebar */}
      <Sidebar />
      {/* Timeline */}
      <Timeline />
      <h1></h1>
      {/* Widget */}
      <Widgets />
    </div>
  );
}

export default App;
