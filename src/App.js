import "./App.css";

import React, { useState } from "react";
import Parent from "./Assets/Parent";

function App(){
  const [data, setData] = useState();

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);
  console.log("data:",data)

  return(
    <div className="App">
      <p>{!data ? "Loading..." : data}</p>
      <Parent/>
    </div>
  )
}

export default App;
