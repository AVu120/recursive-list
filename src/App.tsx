import React from "react";
import "./App.css";

const mockItems = [
  { title: "Folder 1" },
  { title: "Folder 2", children: [{ title: "Folder 2.1" }] },
  {
    title: "Folder 3",
    children: [
      { title: "Folder 3.1" },
      { title: "Folder 3.2", children: [{ title: "Folder 3.2.1" }] },
      {
        title: "Folder 3.3",
        children: [
          { title: "Folder 3.3.1" },
          { title: "Folder 3.3.2", children: [{ title: "Folder 3.3.2.1" }] },
        ],
      },
    ],
  },
];

function App() {
  return <div className="App">Hello World</div>;
}

export default App;
