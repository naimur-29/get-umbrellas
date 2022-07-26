import React from "react";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import HeadlineCards from "./components/HeadlineCards/HeadlineCards";
import Umbrellas from "./components/Umbrellas/Umbrellas";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <HeadlineCards />
      <Umbrellas />
    </div>
  );
};

export default App;
