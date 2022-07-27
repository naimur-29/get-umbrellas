import React, { useState, useEffect } from "react";
import ClockLoader from "react-spinners/ClockLoader";

import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import HeadlineCards from "./Components/HeadlineCards/HeadlineCards";
import Umbrellas from "./Components/Umbrellas/Umbrellas";

const App = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div>
      {loading ? (
        <div className="h-screen flex items-center justify-center bg-blue-900">
          <ClockLoader color={"#fff"} loading={loading} size={150} />
        </div>
      ) : (
        <>
          <Navbar />
          <Hero />
          <HeadlineCards />
          <Umbrellas />
        </>
      )}
    </div>
  );
};

export default App;
