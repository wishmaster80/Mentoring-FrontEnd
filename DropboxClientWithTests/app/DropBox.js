var Dropbox = require('./dropbox-datastores-1.2.0.js');
var client = new Dropbox.Client({ key: "r4vdwcjpvu6hn1y" });
var fileContent;
var fileName;
module.exports = {
    testFunction: function(a, b){
        return a+b;
    },
    Authorize: function() {
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
    },

    Upload: function() {
        return new Promise(function (resolve, reject) {
            client.writeFile(fileName, fileContent, function () {
                console.log('File written!');
                resolve();
            });
        }
        )
    },

    displayContents: function(contents) {
        var arrayBufferView = new Uint8Array(contents);
        var blob = new Blob([arrayBufferView], { type: "image/jpeg" });
        var urlCreator = window.URL || window.webkitURL;
        var imageUrl = urlCreator.createObjectURL(blob);
        var img = document.querySelector("#photo");
        img.src = imageUrl;

    },

    readSingleFile: function(e) {
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
    },

    Download: function(fileName) {
        return new Promise(function (resolve, reject) {

            client.readFile(fileName, { arrayBuffer: true }, function (error, contents) {
                if (!error) {
                    console.log((contents));
                    displayContents(contents);
                }
                else {
                    throw new Error(error);
                }
            });
        }
        )
    },


    Submit: function()
    {
        Authorize().then(Upload)
        .then(function (result) {
            console.log('Działa!');
        }, function (err) {
            console.log('Nie działa :v');
        });
        console.log('End!');
    },

    DownloadFile: function() {
        console.log(this.innerHTML);
        Authorize().then(Download(this.innerHTML))
        .then(function (result) {
            console.log('Działa!');
        }, function (err) {
            console.log('Nie działa :v' + err);
        });
        console.log('End!');
    },

    ReadFileList: function() {
        Authorize().then(GetFileList)
    .then(function (result) {
        console.log('Działa!');
    }, function (err) {
        console.log('Nie działa :v' + err);
    });
        console.log('End!');
    },

    GetFileList: function() {
        return new Promise(function (resolve, reject) {

            client.readdir('/', { list: true }, function (status, reply) {
                ClearFielList();
                for (var i = 0; i <= reply.length; i++) {
                    if (reply[i] !== undefined) {
                        client.metadata(reply[i], function (status, reply) {
                            AddFileToList(reply.path,  reply.isFile);
                        }
                        );
                    }
                }

            });
            });
    },

    ClearFielList: function() {
        var ul = document.getElementById('files-list');
        if (ul) {
            while (ul.firstChild) {
                ul.removeChild(ul.firstChild);
            }
        }
    },

    AddFileToList: function(filePath, isFile) {
        var ul = document.getElementById('files-list');
        var li = document.createElement("li");
        var a;
        if (isFile) {
            a = document.createElement('a');
            a.innerHTML = filePath;
            a.href = '#';
            a.onclick = DownloadFile;
        }
        else {
            a = document.createTextNode(filePath);
        }
        li.appendChild(a);
        ul.appendChild(li);

    }
}
// document.getElementById('file-input')
//   .addEventListener('change', readSingleFile, false);
