var classname = document.getElementsByClassName("square");
var nextTurn = 'X';
function AddClass(obj, className) {
    obj.className += (" " + className);
    
}
function ContainsClass(obj, className) {
    if (obj.className.indexOf(className) > 0) {
        return true;
    }
    return false;
}

function IsNotBlank(obj) {
    if (ContainsClass(obj, "xGreen")  ||
    ContainsClass(obj,"oGreen"))
        return true;

    return false;
}

function ChangeNextTurn() {
    if (nextTurn == 'O') {
        nextTurn = 'X';
    }
    else {
        nextTurn = 'O';
    }
}
var wining = [
["top left", "top middle", "top right"]

];

function ChceckPlayer(clicked) {    
    for (var j = 0; j < wining.length; j++) {        
        for (var k = 0; k < wining[j].length; k++) {            
            for (var i = 0; i < clicked.length; i++) {
                if (!ContainsClass(clicked[i], wining[j][k])) {
                    
                    break;
                }
                //alert("WIN");
            }
        }
    }
}
function CheckScore() {
    var x = [];
    var o = [];
    for (var i = 0; i < classname.length; i++) {
        var square = classname[i];
        if(ContainsClass(square, "oGreen")){
            o.push(square);
        }
        if (ContainsClass(square, "xGreen")) {
            x.push(square);
        }
        ChceckPlayer(x);
        ChceckPlayer(o);
    }    
}


var myFunction = function () {        
    if (IsNotBlank(this) == true)
        return;

    if (nextTurn == 'X') {
        AddClass(this, "xGreen");
        
    } else {
        AddClass(this, "oGreen");        
    }
    CheckScore();
    ChangeNextTurn();
};


window.onload = function () {
    for (var i = 0; i < classname.length; i++) {
        classname[i].addEventListener('click', myFunction, false);
    }
}




