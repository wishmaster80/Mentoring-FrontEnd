var classname = document.getElementsByClassName("square");
var nextTurn = 'X';
function AddClass(obj, className) {
    obj.className += (" " + className);
    
}
function ContainsClass(obj, className) {
    //console.log(obj.className + "|" + classname + "|" + obj.className.indexOf(className));
    if (obj.className.indexOf(className) >= 0) {
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
                ["square top left", "square top middle", "square top right"],
                ["square left", "square middle", "square right"],
                ["square bottom left", "square bottom middle", "square bottom right"],

                ["square top left", "square middle", "square bottom right"],
                ["square bottom left", "square middle", "square top right"],                

                ["square top left", "square left", "square bottom left"],
                ["square top middle", "square middle", "square bottom middle"],
                ["square top right", "square right", "square bottom right"],
            ];

function ChceckPlayer(clicked) {
    var date1 = new Date().getTime();
    for (var j = 0; j < wining.length; j++) {        
        var hits = 0;
        for (var k = 0; k < wining[j].length; k++) {            
            for (var i = 0; i < clicked.length; i++) {                
                console.log(i + " :" + clicked[i].className + " hits:" + hits + wining[j][k] + ":" + clicked[i].className.indexOf(wining[j][k]));
                if (ContainsClass(clicked[i], wining[j][k])) {                
                    hits = hits +1;                    
                }                
            }
            if (hits == 3) {                
                alert("WIN");
            }
        }
    }    
}
function CheckScore() {
    console.log("CheckScore");
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
    }
    ChceckPlayer(x);
    ChceckPlayer(o);
}


var myFunction = function () {        
    if (IsNotBlank(this) == true)
        return;    
    if (nextTurn == 'X') {
        AddClass(this, "xGreen");
        
    } else {
        AddClass(this, "oGreen");        
    }
    console.log("myFunctiopn");
    ChangeNextTurn();
    CheckScore();
};


window.onload = function () {
    for (var i = 0; i < classname.length; i++) {
        classname[i].addEventListener('click', myFunction, false);
    }
}




