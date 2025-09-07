import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import RouteGenerator from "./routes/RouteGenerator";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-50">
        <Header />
        <main className="flex-grow container mx-auto p-4">
          {/* RouteGenerator sudah mengandung <Routes> */}
          <RouteGenerator />
        </main>
      </div>
    </Router>
  );
}

export default App;
