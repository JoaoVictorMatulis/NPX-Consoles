var iframe = document.getElementById("produtosIframe")
iframe.addEventListener("load", function(){
    var iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
    var iframeBody = iframeDocument.body;
    // alert(iframeBody.offsetHeight)
    iframe.style.height = (iframeBody.offsetHeight + 100) + "px"
})



var logo = document.getElementById("logo");
var nintendo = document.getElementById("nintendo");
var ps4 = document.getElementById("ps4");
var xbox = document.getElementById("xbox");
var marcas = document.getElementById("marcas");

logo.addEventListener("click", function () {
    marcas.style.backgroundColor = "black"
})

nintendo.addEventListener("click", function () {
    marcas.style.backgroundColor = "#E60012"
})

ps4.addEventListener("click", function () {
    marcas.style.backgroundColor = "#2F7DBF"
})

xbox.addEventListener("click", function () {
    marcas.style.backgroundColor = "#5DB34A"
})

