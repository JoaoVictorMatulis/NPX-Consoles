import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import './global.css';
import './normalize.css';

import {BrowserRouter, Routes, Route} from 'react-router-dom' 

import Cad from "./pages/cadastro-produt/index.js";
import CadNintendo from "./pages/cadastro-produt/nintendo.js";
import CadPs4 from "./pages/cadastro-produt/ps4.js";
import CadXbox from "./pages/cadastro-produt/xbox.js";
import Edit from "./pages/edit-produt/index.js";
import EditNintendo from "./pages/edit-produt/nintendo.js";
import EditPs4 from "./pages/edit-produt/ps4.js";
import EditXbox from "./pages/edit-produt/xbox.js";
import Home from "./pages/home/index.js";
import HomeAdmin from "./pages/home-admin/index.js";
import Login from "./pages/login/index.js";
import ProdutoEspcXbox from "./pages/produto-espc/xbox.js";
import ProdutoEspcNintendo from "./pages/produto-espc/nintendo.js";
import ProdutoEspcPs4 from "./pages/produto-espc/ps4.js";
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
        <Route path='/EditarProduto' element={<Edit />} />
        <Route path='/EditarProdutoNintendo' element={<EditNintendo />} />
        <Route path='/EditarProdutoPs4' element={<EditPs4 />} />
        <Route path='/EditarProdutoXbox' element={<EditXbox />} />
        <Route path='/HomeAdmin' element={<HomeAdmin />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Produtos' element={<Produtos />} />
        <Route path='/ProdutosNintendo' element={<ProdutosNintendo />} />
        <Route path='/ProdutosPs4' element={<ProdutosPs4 />} />
        <Route path='/ProdutosXbox' element={<ProdutosXbox />} />
        <Route path='/ProdutoEspcXbox' element={<ProdutoEspcXbox />} />
        <Route path='/ProdutoEspcNintendo' element={<ProdutoEspcNintendo />} />
        <Route path='/ProdutoEspcPs4' element={<ProdutoEspcPs4 />} />

      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);