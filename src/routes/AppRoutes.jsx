import { Routes, Route } from "react-router-dom";

// Layout do site
import SiteLayout from "../layouts/SiteLayout";

// 
//import PrivateRoute from "../routes/PrivateRoute";

//Site
import Home from "../pages/site/Home";
import Funcionalidades from "../pages/site/Funcionalidades";
import Planos from "../pages/site/Planos";
import Demonstracao from "../pages/site/Demonstracao";
import Faq from "../pages/site/Faq";
import Contatos from "../pages/site/Contatos";
import Termos from "../pages/site/Termos";
import Privacidade from "../pages/site/Privacidade";
import NotFound from "../pages/site/NotFound";

//Autenticação

export default function AppRoutes() {
  return (
    <Routes>
      {/*Rotas do site */}
      <Route element={<SiteLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/funcionalidades" element={<Funcionalidades />} />
        <Route path="/planos" element={<Planos />} />
        <Route path="/demonstracao" element={<Demonstracao />} />
        <Route path="/perguntas-frequentes" element={<Faq />} />
        <Route path="/contatos" element={<Contatos />} />
        <Route path="/termos" element={<Termos />} />
        <Route path="/privacidade" element={<Privacidade />} />
        <Route path="*" element={<NotFound />} />
      </Route>

      {/*Rotas de autenticação*/}
      
    </Routes>
  );
}
