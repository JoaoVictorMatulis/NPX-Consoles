var logo = document.getElementById("logo");
var nintendo = document.getElementById("nintendo");
var ps4 = document.getElementById("ps4");
var xbox = document.getElementById("xbox");
var marcas = document.getElementById("marcas");

var iframe = document.getElementById("produtosIframe")
iframe.addEventListener("load", function(){
    var iframeDocument = iframe.contentDocument || iframe.contentWindow.document
    var iframeBody = iframeDocument.body
    // alert(iframeBody.offsetHeight)
    iframe.style.height = (iframeBody.offsetHeight + 100) + "px"
})

window.addEventListener('resize', function(event) {
    var iframeDocument = iframe.contentDocument || iframe.contentWindow.document
    var iframeBody = iframeDocument.body
    // alert(iframeBody.offsetHeight)
    iframe.style.height = (iframeBody.offsetHeight + 100) + "px"
}, true);

document.getElementById('ativar').addEventListener('click', function(){
    document.getElementById('opcoesAdmin').classList.toggle('expandir');
})

document.getElementById('opcoesAdmin').addEventListener('click', function(){
    document.getElementById('opcoesAdmin').classList.toggle('expandir');
})

document.getElementById('cadastrarProd').addEventListener('click', function(){
    marcas.style.backgroundColor = "black"
})

logo.addEventListener("click", function () {
    marcas.style.backgroundColor = "black"
})

nintendo.addEventListener("click", function () {
    marcas.style.backgroundColor = "#E60012"
    if(iframe.contentDocument.title == "Cadastro Produtos"){
        document.getElementById('nintendo').href="/src/pages/cadastro-produt/nintendo.html"        
    }else{
        document.getElementById('nintendo').href="/src/pages/produtos/nintendo.html"
    }
})

ps4.addEventListener("click", function () {
    marcas.style.backgroundColor = "#2F7DBF"
    if(iframe.contentDocument.title == "Cadastro Produtos"){
        document.getElementById('ps4').href="/src/pages/cadastro-produt/ps4.html"        
    }else{
        document.getElementById('ps4').href="/src/pages/produtos/ps4.html"
    }
})

xbox.addEventListener("click", function () {
    marcas.style.backgroundColor = "#5DB34A"
    if(iframe.contentDocument.title == "Cadastro Produtos"){
        document.getElementById('xbox').href="/src/pages/cadastro-produt/xbox.html"        
    }else{
        document.getElementById('xbox').href="/src/pages/produtos/xbox.html"
    }
})

