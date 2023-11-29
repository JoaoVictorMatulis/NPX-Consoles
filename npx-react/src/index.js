import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import './global.css';
import './normalize.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Cad from "./pages/cadastro-produt/index.js";
import CadNintendo from "./pages/cadastro-produt/nintendo.js";
import CadPs4 from "./pages/cadastro-produt/ps4.js";
import CadXbox from "./pages/cadastro-produt/xbox.js";
import Edit from "./pages/edit-produt/index.js";
import Home from "./pages/home/index.js";
import HomeAdmin from "./pages/home-admin/index.js";
import Login from "./pages/login/index.js";
import ProdutoEspc from './pages/produto-espc/index.js';
import Produtos from "./pages/produtos/index.js";
import ProdutosNintendo from "./pages/produtos/nintendo.js";
import ProdutosPs4 from "./pages/produtos/ps4.js";
import ProdutosXbox from "./pages/produtos/xbox.js";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='/CadastroProduto' element={<Cad />} />
          <Route path='/CadastroProdutoXbox' element={<CadXbox />} />
          <Route path='/CadastroProdutoPs4' element={<CadPs4 />} />
          <Route path='/CadastroProdutoNintendo' element={<CadNintendo />} />
          <Route path='/EditarProduto/:id' element={<Edit />} />
          <Route path='/HomeAdmin' element={<HomeAdmin />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/Produtos' element={<Produtos />} />
          <Route path='/ProdutosNintendo' element={<ProdutosNintendo />} />
          <Route path='/ProdutosPs4' element={<ProdutosPs4 />} />
          <Route path='/ProdutosXbox' element={<ProdutosXbox />} />
          <Route path='/ProdutoEspc/:id' element={<ProdutoEspc />} />

        </Routes>
      </BrowserRouter>
  </React.StrictMode>
);