import React from "react";

function App ({config}) {
  return (
    <div style={{
      backgroundColor: "#ccc",
      color: "#fff"
    }}>Hello {config.name}!</div>
  )
}

export default App