import "./App.css";
import BasicTable from "./Components/BasicTable";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import SortableTable from "./Components/SortableTable";
import FilteringTable from "./Components/FilteringTable";
import PaginationTable from "./Components/PaginationTable";
import { GlobalFilter } from "./Components/GlobalFilter";
import ColumnOrder from "./Components/ColumnOrder";
import ColumnHiding from "./Components/ColumnHiding";
import About from "./Components/About";
function App() {
  return (
    <>
      <Navbar />
      <div className="container my-3">
        <PaginationTable />
      </div>
    </>
  );
}

export default App;
