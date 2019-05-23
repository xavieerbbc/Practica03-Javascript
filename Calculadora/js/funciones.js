
function escribir(n){
    var res=document.getElementById("valores").value
    document.getElementById("valores").value=res+""+n

}
function calculando(){
    var res=document.getElementById("valores").value
    document.getElementById("valores").value=eval(res)
    
}
function porcen() {
    var res=document.getElementById("valores").value
    document.getElementById("valores").value=document.getElementById("valores").value/100
}
function inve() {
    var res=document.getElementById("valores").value
    document.getElementById("valores").value=(1/document.getElementById("valores").value)
}
function raiz() {
    var res=document.getElementById("valores").value
    document.getElementById("valores").value=Math.sqrt(document.getElementById("valores").value)
}