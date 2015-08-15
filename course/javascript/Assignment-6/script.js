
function nr (){
  var n = document.getElementById("nr");
  var n1 = document.getElementById("n1");
  var n2 = document.getElementById("n2");
  
   var cn = n.value;
   var nr1 = n1.value;
   var nr2 = n2.value;
  
  nr_func(cn,nr1,nr2);
}



function nr_func(nr,nr1,nr2){

  var cnr = nr;
  var nu1 = nr1;
  var nu2 = nr2;
  
  

for( i = 1; i <= cnr; i++){
  
  if(i % nu1 === 0 ){
    
    if(i % nu2 === 0){
      document.getElementById("result").innerHTML += "Fizz Buzz" + '<br />';
      
    }else{
      
       document.getElementById("result").innerHTML += "Fizz"+'<br />';
    }
    
  }
  
    else if(i % nu2 === 0){
       document.getElementById("result").innerHTML += "Buzz"+ '<br />';
    }
  
    else {
      document.getElementById("result").innerHTML += i +'<br />';
    
    
    }

  }

}
