import React, { useEffect, useState } from "react";
import './App.css'
import Loader from "./pages/Loader/Loader";

const App = () => {
  const [isloading, setisloader] = useState(true);
  useEffect(() => {
    const fakedatafetched = () => {
      setTimeout(() => {
        setisloader(false);
      }, 2000);
    };
    fakedatafetched();
  }, []);
  return isloading ? (
    <Loader />
    ) : (
      <div className="text">
      <h1 className="welcome-text">welcome to preloader...</h1>
      
    </div>
  );
};

export default App;
