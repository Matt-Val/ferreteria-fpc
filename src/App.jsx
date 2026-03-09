import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Catalogos from "./pages/Catalogos.jsx";

const App = () => (
  <BrowserRouter>
    <Routes>
      {/* La ruta raíz "/" cargará el componente Index que contiene toda la ferretería */}
      <Route path="/" element={<Index />} />
      {/* Ruta para la página de catálogos */}
      <Route path="/catalogos" element={<Catalogos />} />
    </Routes>
  </BrowserRouter>
);

export default App;