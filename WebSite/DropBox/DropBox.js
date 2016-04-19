var client = new Dropbox.Client({ key: "r4vdwcjpvu6hn1y" });
var fileContent;
var fileName;
function Authorize() {
    return new Promise(function (resolve, reject) {
        client.authenticate();
        if (client.isAuthenticated()) {
            resolve("isAuthenticated");
        }
        else {
            reject(Error("Authenticated  error"));
        }
    }
    )
}

function Upload() {
    return new Promise(function (resolve, reject) {        
        client.writeFile(fileName, fileContent, function () {
            console.log('File written!');
            resolve();
        });        
    }
    )
}

function displayContents(contents) {
    //var element = document.getElementById('file-content');
    //element.innerHTML = contents;

    var arrayBufferView = new Uint8Array(contents);
    var blob = new Blob([arrayBufferView], { type: "image/jpeg" });
    var urlCreator = window.URL || window.webkitURL;
    var imageUrl = urlCreator.createObjectURL(blob);
    var img = document.querySelector("#photo");
    img.src = imageUrl;

}

function readSingleFile(e) {    
    var file = e.target.files[0];
    
    if (!file) {
        return;
    }
    fileName = file.name;
    var reader = new FileReader();
    reader.onload = function (e) {
        var contents = e.target.result;        
        fileContent = contents;        
    };
    reader.readAsArrayBuffer(file);
}

document.getElementById('file-input')
  .addEventListener('change', readSingleFile, false);

function Download() {
    return new Promise(function (resolve, reject) {

        client.readFile(fileName, { arrayBuffer: true }, function (error, contents) {
            console.log((contents));
            displayContents(contents);
        });
    }
    )
}


function Submit()
{
    Authorize().then(Upload)
    .then(function (result) {
        console.log('Działa!');
    }, function (err) {
        console.log('Nie działa :v');
    });
    console.log('End!');
}

function DownloadFile(){
    Authorize().then(Download)
    .then(function (result) {
        console.log('Działa!');
    }, function (err) {
        console.log('Nie działa :v' + err);
    });
    console.log('End!');
}


//App key

//r4vdwcjpvu6hn1y
//App secret

//t9t0ujo6p0d3b5s

