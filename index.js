var setadireita = window.document.getElementById("setadireita")
var horizonte = window.document.getElementById("horizonte")
var sigma = window.document.getElementById("sigma")
var solaris = window.document.getElementById("solaris")
var setaesquerda = window.document.getElementById("setaesquerda")

function Rolarparadireita() {
    horizonte.style ="display:none"
    solaris.style ="display:flex"
    setadireita.style ="display:none"
    setaesquerda.style ="display:flex"
}

function RolarParaEsquerda() {
    horizonte.style ="display:flex"
    solaris.style ="display:none"
    setadireita.style ="display:flex"
    setaesquerda.style ="display:none"
}
