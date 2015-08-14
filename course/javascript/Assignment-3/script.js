function textfunc(s){
  var strbox =     document.getElementById("textbox");
  var s = strbox.value;
  
  s = reverse(s);
  //print out in a P
  document.getElementById("text").innerHTML = s;

}

//funtion to reverse
function reverse(s) {
  return s.split('').reverse().join('');
}
