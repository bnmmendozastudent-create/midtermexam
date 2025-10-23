import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [message, setMessage] = useState("10 Things That Require Zero Talent");

 
  const fullName = "BRIAN NOEL M. MENDOZA";
  const section = "IT3B";
  const subjectCode = "C-PCIT9";


  useEffect(() => {
    const handleKeyPress = (event) => {
      switch (event.key) {
        case "1":
          setMessage("Being On Time");
          break;
        case "2":
          setMessage("Making An Effort");
          break;
        case "3":
          setMessage("Being High Energy");
          break;
        case "4":
          setMessage("Having A Positive Attitude");
          break;
        case "5":
          setMessage("Being Passionate");
          break;
        case "6":
          setMessage("Using Good Body Language");
          break;
        case "7":
          setMessage("Being Coachable");
          break;
        case "8":
          setMessage("Doing A Little Extra");
          break;
        case "9":
          setMessage("Being Prepared");
          break;
        case "0":
          setMessage("Having A Strong Work Ethic");
          break;
        case "N":
        case "n":
          setMessage(fullName.toUpperCase());
          break;
        case "S":
        case "s":
          setMessage(subjectCode.toUpperCase());
          break;
        default:
          setMessage("10 Things That Require Zero Talent");
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, []);

  return (
    <div className="App">
      <h2>{fullName} - {section}</h2>
      <h1>{message}</h1>
      <p>Press keys 1–0, N - Name, or S - Subject Code .</p>
    </div>
  );
}

export default App;
