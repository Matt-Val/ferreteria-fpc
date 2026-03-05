import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index.jsx";

const App = () => (
  <BrowserRouter>
    <Routes>
      {/* La ruta raíz "/" cargará el componente Index que contiene toda la ferretería */}
      <Route path="/" element={<Index />} />
    </Routes>
  </BrowserRouter>
);

export default App;