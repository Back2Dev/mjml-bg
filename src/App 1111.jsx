import React from "react";

function App() {
  const htmlContent = "<p>Hello, world!</p>";

  return (
    <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
  );
}

export default App;