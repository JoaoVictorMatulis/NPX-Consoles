import { Router } from 'express'
import { listar, salvar, buscarPorNome, listarMarca, produtosPrincipais, produtosNormais, login, alterar, remover } from '../repository/produtoRepository.js';

const endpoints = Router();

endpoints.get('/login', async (req, resp) => {
  try {
    let pessoa = req.body;
    let r = await login(pessoa);
    resp.send(r);
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

endpoints.post('/cadastroProd', async(req, resp) =>{
  try {
    let produto = req.body
    let r = await salvar(produto)
    resp.send(r)
  } catch (error) {
    resp.status(400).send({
      erro: err.message
    })
  }
})

endpoints.put('/atualizarProd', async(req, resp) =>{
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