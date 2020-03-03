import React from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

const Welcome = () => {
  const history = useHistory();
  const handleLogout = () => {
    localStorage.clear();
    history.push("/");
  };
  return (
    <>
      <div>Welcome!</div>
      <button onClick={handleLogout}>Logout</button>
    </>
  );
};

export default Welcome;
