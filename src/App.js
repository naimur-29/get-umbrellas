import React, { useState, useEffect } from "react";
import ClockLoader from "react-spinners/ClockLoader";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import HeadlineCards from "./components/HeadlineCards/HeadlineCards";
import Umbrellas from "./components/Umbrellas/Umbrellas";

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
        <div className="max-w-[1640px] h-screen p-4 mx-auto flex items-center justify-center bg-blue-900">
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
