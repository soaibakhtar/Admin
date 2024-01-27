import { Route, Routes } from "react-router-dom";
import Add from "./components/Add";
import Dashboard from "./components/Dashboard";


function App() {
  return (
<>
<Routes>
  <Route path="/" element={<Dashboard />} />
  <Route path="/add" element={<Add />} />
</Routes>
</>
  );
}

export default App;
