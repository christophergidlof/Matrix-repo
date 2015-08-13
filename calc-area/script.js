var count_inputs = 0;

function res(e) {
    
    count_inputs++;

    var nr = e.value;

    document.getElementById("text_input").innerHTML = 'your nr ' + nr;
    document.getElementById("nr_inputs").innerHTML = 'nr of inputs ' + count_inputs;

    //save vars that use each function and send the value of nr 
    var c = circle(nr);
    var s = Square(nr);
    var t = Triangle(nr);

    //send the result for all functions show it in html element with id result
    document.getElementById("result").innerHTML = c + '  ' + '<br /> ' + s + '<br />' + t;

}


//Function circle to calculate area of a circle
function circle(x) {
    return "Area of Circle = " + x * x * 3.14;
}

//Function square to calculate area of a square
function Square(x) {
    return "Area of Square = " + x * x;
}

//function triangle to calculate area of a triangle
function Triangle(x) {
    return "Area of Triangle = " + x * x / 2;
}
