function addition(){
    var n1=eval(document.getElementById('id1').value)
    var n2=eval(document.getElementById('id2').value)
    var result=n1+n2;
    document.write(result);
}
function earaseDate(){
    document.getElementById('id1').value=""
    document.getElementById('id2').value=""
}