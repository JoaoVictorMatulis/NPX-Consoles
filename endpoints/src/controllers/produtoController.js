import multer from 'multer';
import { Router } from 'express'
import { listar, salvar, buscarPorNome, listarMarca, produtosPrincipais, produtosNormais, login, alterar, remover, alterarCapa } from '../repository/produtoRepository.js';

const endpoints = Router();
const upload = multer({ dest: './storage' })

endpoints.post('/login', async (req, resp) => {
  try {
    let pessoa = req.body;
    let r = await login(pessoa);
    if (r[0] == null) {
      resp.send(null)
    } else {
      resp.send(r);
    }
  }
  catch (err) {
    resp.status(400).send({
      erro: err.message
    })
  }
});

endpoints.get('/produtos', async (req, resp) => {
  try {
    let r = await listar();
    resp.send(r);
  }
  catch (err) {
    resp.status(400).send({
      erro: err.message
    })
  }
})

endpoints.get('/produtos/:marca', async (req, resp) => {
  try {
    let marca = req.params.marca
    let r = await listarMarca(marca);
    resp.send(r);
  }
  catch (err) {
    resp.status(400).send({
      erro: err.message
    })
  }
})

endpoints.get('/produto/:nome', async (req, resp) => {
  try {
    let nome = req.params.nome;
    let r = await buscarPorNome(nome);
    resp.send(r);
  }
  catch (err) {
    resp.status(400).send({
      erro: err.message
    })
  }
})

endpoints.get('/principais', async (req, resp) => {
  try {
    let r = await produtosPrincipais();
    resp.send(r);
  }
  catch (err) {
    resp.status(400).send({
      erro: err.message
    })
  }
})

endpoints.get('/normais', async (req, resp) => {
  try {
    let r = await produtosNormais();
    resp.send(r);
  }
  catch (err) {
    resp.status(400).send({
      erro: err.message
    })
  }
})

endpoints.post('/cadastroProd', async (req, resp) => {
  try {
    let produto = req.body
    let r = await salvar(produto)
    resp.send(r)
  } catch (error) {
    resp.status(400).send({
      erro: error.message
    })
  }
})

endpoints.put('/atualizarProd', async (req, resp) => {
  try {
    let produto = req.body
    let r = await alterar(produto)
    resp.send(r)
  } catch (error) {
    resp.status(400).send({
      erro: err.message
    })
  }
})

endpoints.put('/prod/:id/capa', upload.single('capa'), async (req, resp) =>{
  let id = req.params.id;
  let caminho = req.file.path;
  
  let r = await alterarCapa(id, caminho);
  resp.status(202).send();
})

endpoints.delete('/delproduto/:id', async (req, resp) => {
  try {
    let id = req.params.id;
    let linhasAfetadas = await remover(id);

    if (linhasAfetadas == 0)
      throw new Error('Produto não encontrado!');

    resp.send();
  }
  catch (err) {
    resp.status(400).send({
      erro: err.message
    })
  }
})



export default endpoints;