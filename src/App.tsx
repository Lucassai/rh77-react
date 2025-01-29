import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ListarCargos from "./components/cargos/listacargos/ListarCargos";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="min-h-[80vh]">
          <Routes>
            <Route path="/cargo" element={<ListarCargos />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
