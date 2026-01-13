import { Routes, Route } from "react-router-dom"
import Layout from "./Layout"
import Sobre from "./pages/sobre/Sobre"
import Home from "./pages/home/Home"
import PaginaPalestrantes from "./pages/palestrantes/PaginaPalestrantes"
import Local from "./pages/local/Local"
import Carregamento from "./components/Carregamento"
import Ingressos from "./pages/ingressos/Ingressos"
import { useEffect, useState } from "react"

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (<>
      {loading && <Carregamento />}
      
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          {/* <Route path="paginapalestrantes" element={<PaginaPalestrantes />} /> */}
          <Route path="local" element={<Local />} />
          <Route path="sobre" element={<Sobre />} />
          <Route path="ingressos" element={<Ingressos />} />
        </Route>
      </Routes>
  </>);
}

export default App
