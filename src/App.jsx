import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import Navbar from "./components/Navbar";
import Intro from "./components/Intro"
import Pricing from "./components/Pricing";

function App() {
  return (
    <div className="container">
      <header>
        <Navbar />
      </header>
      <main>
          <section id="intro">
            <Intro />
          </section>
          <Pricing />
      </main>
    </div>
  );
}

export default App;
