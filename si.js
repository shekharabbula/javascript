function simple_interest(){
    var p=eval(document.getElementById('id1').value)
    var t=eval(document.getElementById('id2').value)
    var r=eval(document.getElementById('id3').value)
    var results=(p*t*r)/100;
    document.write(results);
}
function earaseDate(){
    document.getElementById('id1').value=""
    document.getElementById('id2').value=""
    document.getElementById('id3').value=""
}