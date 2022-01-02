import "./App.css";
import List from "./components/List";
import { useState } from "react";
import { mockItems } from "./mockData";

function App() {
  const [openFolderRecord, setOpenFolderRecord] = useState<
    Record<string, boolean>
  >({});

  const handleFolderClick = (id: string) => {
    setOpenFolderRecord({ ...openFolderRecord, [id]: !openFolderRecord[id] });
  };
  return (
    <main className="App">
      <List
        items={mockItems}
        openFolderRecord={openFolderRecord}
        handleFolderClick={handleFolderClick}
      />
    </main>
  );
}

export default App;
