var calcarr = [];

var calcfunc = function () {
    var c = new Calculator('eq');

   


        var nr1 = document.getElementById("textbox1").value;
        var nr2 = document.getElementById("textbox2").value;

       var a = c.add(nr1, nr2);
       var s = c.subtract(nr1, nr2);
       var m = c.multiply(nr1,nr2);
       var d = c.divide(nr1, nr2);
        
        var output = document.getElementById("result").innerHTML = 'Add function ' + a + '<br />' +
           'Substract function ' + s + '<br />' +
            'Multiply function ' + m + '<br />' +
            'Divide function ' + d + '<br /><br /><br />';
        //send output into function ar
        ar(output);
    };

var ar = function (output) {
    //Check if array calcarr is max 10 element 
    if (calcarr.length <= 9) {
        //if true add new element to array calcarr
        calcarr.push(output);

        for (i = 0; i < calcarr.length; i++) {
            //save all array element to var arr
           var arr = calcarr[i];
        }

        //print out array result into div
        document.getElementById("resultarr").innerHTML += arr;

    //if array calcarr is already 10 element run else 
    } else {
        //remove last element from array
        calcarr.shift();
        //add new element into array
        calcarr.push(output);
        //empty the div from all content
        document.getElementById("resultarr").innerHTML = "";

        //loop the array
        for (i = 0; i < calcarr.length; i++) {
            //save elements as arr
            var arr = calcarr[i];
            //show all elements from array into the div
            document.getElementById("resultarr").innerHTML += arr;

        }
        

    //end of else
    }
    

};


    var Calculator = function (eq) {
        this.eqCtl = document.getElementById("eq");

    };

    Calculator.prototype = {
        add: function (x, y) {
            var val = parseInt(x) + parseInt(y);
            return val;
        },
        subtract: function (x, y) {
            var val = x - y;
            return val;
        },
        multiply: function (x, y) {
            var val = x * y;
            return val;

        },
        divide: function (x, y) {
            var val = x / y;
            return val;
        }

    };


