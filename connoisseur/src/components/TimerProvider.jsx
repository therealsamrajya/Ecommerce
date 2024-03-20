import React, { createContext, useState, useEffect } from "react";

const TimerContext = createContext();

const TimerProvider = ({ children }) => {
  const [flashSale, setFlashSale] = useState(3600); // Initial timer duration in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setFlashSale((prevTime) => prevTime - 1);
    }, 1000);

    // Clear the timer when the component unmounts
    return () => clearInterval(timer);
  }, []);

  return (
    <TimerContext.Provider value={{ flashSale }}>
      {children}
    </TimerContext.Provider>
  );
};

export { TimerContext, TimerProvider };
