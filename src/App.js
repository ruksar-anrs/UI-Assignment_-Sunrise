import logo from "./logo.svg";
import "./App.css";
import Table from "./components/Table";
import { Routes, Route } from "react-router-dom";

function App() {
  const tableData = [
    {
      Name: "airi satou",
      Position: "accountant",
      Office: "tokyo",
    },
    {
      Name: "angelica ramos",
      Position: "chief executive officer (ceo)",
      Office: "london",
    },
    {
      Name: "ashton jordan",
      Position: "junior technical author",
      Office: "san francisco",
    },
    {
      Name: "bradley greer",
      Position: "software engineer",
      Office: "london",
    },
    {
      Name: "brenden wagner",
      Position: "software engineer",
      Office: "san francisco",
    },
    {
      Name: "brielle williamson",
      Position: "integration specialist",
      Office: "new york",
    },
    {
      Name: "bruno nash",
      Position: "software engineer",
      Office: "london",
    },
    {
      Name: "caesar vance",
      Position: "pre-sales support",
      Office: "new york",
    },
    {
      Name: "cara stevens",
      Position: "sales assistant",
      Office: "new york",
    },
    {
      Name: "cedric kelly",
      Position: "senior javascript developer",
      Office: "edinburgh",
    },
    {
      Name: "charde marshall",
      Position: "regional director",
      Office: "san francisco",
    },
    {
      Name: "france joseph",
      Position: "regional director",
      Office: "san francisco",
    },
  ];
  return (
    <div>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Table
              data={tableData}
              columns={Object.keys(tableData[0])}
              itemsPerPage={5}
            />
          }
        />

        <Route
          path=":pgNum"
          element={
            <Table
              data={tableData}
              columns={Object.keys(tableData[0])}
              itemsPerPage={5}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
