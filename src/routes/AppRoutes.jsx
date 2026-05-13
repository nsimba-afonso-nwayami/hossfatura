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
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import ForgotPassword from "../pages/auth/ForgotPassword";
import ResetPassword from "../pages/auth/ResetPassword";

//Dashboard
import DashboardHossFatura from "../pages/dashboard/DashboardHossFatura";
import DocumentosHossFatura from "../pages/dashboard/DocumentosHossFatura";
import DespesasHossFatura from "../pages/dashboard/DespesasHossFatura";
import ProdutosHossFatura from "../pages/dashboard/ProdutosHossFatura";
import ClientesHossFatura from "../pages/dashboard/ClientesHossFatura";
import FornecedoresHossFatura from "../pages/dashboard/FornecedoresHossFatura";
import NotificacoesHossFatura from "../pages/dashboard/NotificacoesHossFatura";
import EmpresaHossFatura from "../pages/dashboard/EmpresaHossFatura";
import NotFoundHossFatura from "../pages/dashboard/NotFoundHossFatura";

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
      <Route path="/login" element={<Login />} />
      <Route path="/criar-conta" element={<Register />} />
      <Route path="/recuperar" element={<ForgotPassword />} />
      <Route path="/reset-password" element={<ResetPassword />} />

      {/*Dashboard*/}
      <Route path="/hossfatura/dashboard/">
        <Route path="" element={<DashboardHossFatura />} />
        <Route path="documentos" element={<DocumentosHossFatura />} />
        <Route path="despesas" element={<DespesasHossFatura />} />
        <Route path="produtos" element={<ProdutosHossFatura />} />
        <Route path="clientes" element={<ClientesHossFatura />} />
        <Route path="fornecedores" element={<FornecedoresHossFatura />} />
        <Route path="notificacoes" element={<NotificacoesHossFatura />} />
        <Route path="empresa" element={<EmpresaHossFatura />} />
        <Route path="*" element={<NotFoundHossFatura />} />
      </Route>
      
    </Routes>
  );
}
