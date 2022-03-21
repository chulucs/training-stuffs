import { Fragment } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/header/Header";
import Cadastro from './pages/Cadastro'
import Home from "./pages/Home";
// import classes from "./App.module.scss";

function App() {
  return (
    <Fragment>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cadastro" element={<Cadastro />} />
      </Routes>
    </Fragment>
  );
}

export default App;
