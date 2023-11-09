import { con } from "./connection.js"

export async function login(pessoa) {
    const comando = `
       SELECT pessoa_id as id,
              email        as email,
              senha        as senha
         FROM pessoa where email = ? and senha = ?
    `
    const [linhas] = await con.query(comando, [pessoa.email, pessoa.senha]);
    if(linhas == null){
        return null
    }else{
        return linhas;
    }
}

export async function listar() {
    const comando = `
       SELECT produto_id        as id,
              marca             as marca,
              nome              as nome,
              preco             as preco,
              descricao         as descricao,
              principal         as principal,
              img               as imagem,
              dia               as dias
         FROM produto
    `

    const [linhas] = await con.query(comando);
    return linhas;
}

export async function produtosPrincipais() {
    const comando = `
       SELECT produto_id        as id,
              marca             as marca,
              nome              as nome,
              preco             as preco,
              descricao         as descricao,
              principal         as principal,
              img               as imagem,
              dia               as dias
         FROM produto where principal = true
    `

    const [linhas] = await con.query(comando);
    return linhas;
}

export async function produtosNormais() {
    const comando = `
       SELECT produto_id        as id,
              marca             as marca,
              nome              as nome,
              preco             as preco,
              descricao         as descricao,
              principal         as principal,
              img               as imagem,
              dia               as dias
         FROM produto where principal = false
    `

    const [linhas] = await con.query(comando);
    return linhas;
}

export async function listarMarca(marca) {
    const comando = `
       SELECT produto_id        as id,
              marca             as marca,
              nome              as nome,
              preco             as preco,
              descricao         as descricao,
              principal         as principal,
              img               as imagem,
              dia               as dias
         FROM produto where marca = ?
    `

    const [linhas] = await con.query(comando, marca);
    return linhas;
}

export async function buscarPorNome(nome) {
    const comando = `
       SELECT produto_id        as id,
              marca             as marca,
              nome              as nome,
              preco             as preco,
              descricao         as descricao,
              principal         as principal,
              img               as imagem,
              dia               as dias
         FROM produto where nome = ?
    `

    const [linhas] = await con.query(comando, [nome]);
    return linhas;
}

export async function salvar(produto){
    const comando = `
    INSERT INTO 
    produto(marca, nome, preco, descricao, principal, img, dia)
    VALUES
    (?, ?, ?, ?, ?, ?, now())
    `
    const [linha] = await con.query(comando,[produto.marca, produto.nome, produto.preco, produto.descricao, produto.principal, produto.img])
    produto.id = linha.insertId;
    console.log(produto.id)
    return produto
}


export async function alterar(produto) {
    const comando = `
    UPDATE produto
    SET marca = ?, nome = ?, preco = ?, descricao = ?, principal = ?, img = ?
    WHERE produto_id = ?;
    `

    const [info] = await con.query(comando,[produto.marca, produto.nome, produto.preco, produto.descricao, produto.principal, produto.img, produto.id])
    return info
}

export async function remover(id) {
    const comando = 'DELETE FROM produto WHERE produto_id = ?'

    const [info] = await con.query(comando, [id])
    return info.affectedRows;
}