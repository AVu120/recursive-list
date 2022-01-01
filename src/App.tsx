import "./App.css";
import List from "./components/List";
import { IFile, IFolder } from "./types/global";

const mockItems: (IFile | IFolder)[] = [
  {
    title: "Folder 1",
    type: "folder",
    children: [{ title: "File 1.A", type: "file" }],
  },
  {
    title: "Folder 2",
    type: "folder",
    children: [
      {
        title: "Folder 2.1",
        type: "folder",
        children: [{ title: "File 2.1.A", type: "file" }],
      },
    ],
  },
  {
    title: "Folder 3",
    type: "folder",
    children: [
      { title: "Folder 3.1", type: "folder", children: [] },
      {
        title: "Folder 3.2",
        type: "folder",
        children: [{ title: "Folder 3.2.1", type: "folder", children: [] }],
      },
      { title: "File 3.A", type: "file" },
      { title: "File 3.B", type: "file" },
      { title: "File 3.C", type: "file" },
      {
        title: "Folder 3.3",
        type: "folder",
        children: [
          {
            title: "Folder 3.3.1",
            type: "folder",
            children: [
              { title: "File 3.3.1.A", type: "file" },
              { title: "File 3.3.1.B", type: "file" },
              { title: "File 3.3.1.C", type: "file" },
              { title: "File 3.3.1.D", type: "file" },
              { title: "File 3.3.1.E", type: "file" },
            ],
          },
          {
            title: "Folder 3.3.2",
            type: "folder",
            children: [
              {
                title: "Folder 3.3.2.1",
                type: "folder",
                children: [{ title: "File 3.3.2.A", type: "file" }],
              },
            ],
          },
        ],
      },
    ],
  },
];

function App() {
  return (
    <main className="App">
      <List items={mockItems} />
    </main>
  );
}

export default App;
