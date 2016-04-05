var classname = document.getElementsByClassName("square");
var nextTurn = 'x';
var xScore = 0;
var oScore = 0;

function hasClass(ele,cls) {
    return ele.className.match(new RegExp('(\\s|^)'+cls+'(\\s|$)'));
}
function addClass(ele,cls) {
    if (!this.hasClass(ele,cls)) ele.className += " "+cls;
}
function removeClass(ele,cls) {
    if (hasClass(ele,cls)) {
        var reg = new RegExp('(\\s|^)'+cls+'(\\s|$)');
        ele.className=ele.className.replace(reg,' ');
    }
}
function switchClass(ele, oldCls, newCls) {    
    removeClass(ele, oldCls);
    addClass(ele, newCls);
}

function IsNotBlank(obj) {
    if (hasClass(obj, "xGreen") ||
    hasClass(obj, "oGreen"))
        return true;

    return false;
}

function ChangeNextTurn() {
    if (nextTurn == 'o') {
        nextTurn = 'x';
    }
    else {
        nextTurn = 'o';
    }
}
var wining = [
                ["square top left", "square top middle", "square top right"],
                ["square middleH left", "square middleH middle", "square middleH right"],
                ["square bottom left", "square bottom middle", "square bottom right"],

                ["square top left", "square middleH middle", "square bottom right"],
                ["square bottom left", "square middleH middle", "square top right"],

                ["square top left", "square middleH left", "square bottom left"],
                ["square top middle", "square middleH middle", "square bottom middle"],
                ["square top right", "square middleH right", "square bottom right"],
            ];

function ChceckPlayer(clicked) {
    var date1 = new Date().getTime();
    for (var j = 0; j < wining.length; j++) {        
        var hits = 0;
        for (var k = 0; k < wining[j].length; k++) {            
            for (var i = 0; i < clicked.length; i++) {                                
                if (hasClass(clicked[i], wining[j][k])) {                
                    hits = hits +1;                    
                }
                if (hits == 3) {
                    Won(clicked[i], wining[j]);
                }
            }
            
        }
    }    
}
function Won(won, winingRow) {
    DisableClick();    
    for (var i = 0; i < winingRow.length; i++) {        
        var element = document.getElementsByClassName(winingRow[i])[0];            
        switchClass(element, nextTurn + 'Green', nextTurn + 'Red');
    }
    if (nextTurn == 'x') {
        xScore = xScore +1;
        document.getElementById("scoreX").innerHTML = xScore;
        
    } else {
        oScore = oScore +1;
        document.getElementById("scoreO").innerHTML = oScore;
    }

}

function CheckScore() {    
    var x = [];
    var o = [];
    for (var i = 0; i < classname.length; i++) {        
        var square = classname[i];        
        if(hasClass(square, "oGreen")){
            o.push(square);
        }
        if (hasClass(square, "xGreen")) {
            x.push(square);
        }
    }
    ChceckPlayer(x);
    ChceckPlayer(o);
}


var myFunction = function () {        
    if (IsNotBlank(this) == true)
        return;    
    if (nextTurn == 'x') {
        addClass(this, "xGreen");
        
    } else {
        addClass(this, "oGreen");        
    }        
    CheckScore();
    ChangeNextTurn();
};

function EnableClick(){
    for (var i = 0; i < classname.length; i++) {
        classname[i].addEventListener('click', myFunction, false);
    }
}
function DisableClick() {
    for (var i = 0; i < classname.length; i++) {
        classname[i].removeEventListener('click', myFunction, false);
    }
}
function nextGame() {    
    EnableClick();
    ResetStyle();
}
function ResetStyle() {
    for (var i = 0; i < classname.length; i++) {
        console.log(classname[i]);
        removeClass(classname[i], 'xRed');
        removeClass(classname[i], 'oRed');
        removeClass(classname[i], 'xGreen');
        removeClass(classname[i], 'oGreen');
    }
}
function resetGame() {
    document.getElementById("scoreO").innerHTML = 0;
    document.getElementById("scoreX").innerHTML = 0;
    EnableClick();
}

window.onload = function () {
    EnableClick();
}




