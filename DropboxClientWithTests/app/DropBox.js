Class DropBoxClient{
    constructor(){
        super();
        this.client = new Dropbox.Client({ key: "r4vdwcjpvu6hn1y" });
        this.fileContent;
        this.fileName;
    }
    Authorize() {
        return new Promise(function (resolve, reject) {
            this.client.authenticate();
            if (this.client.isAuthenticated()) {
                resolve("isAuthenticated");
            } else {
                reject(Error("Authenticated  error"));
            }
        })
    }

    Upload() {
        return new Promise(function (resolve, reject) {
            this.client.writeFile(this.fileName, this.fileContent, function () {
                console.log('File written!');
                resolve();
            });
        })
    }

    displayContents(contents) {
        var arrayBufferView = new Uint8Array(contents);
        var blob = new Blob([arrayBufferView], { type: "image/jpeg" });
        var urlCreator = window.URL || window.webkitURL;
        var imageUrl = urlCreator.createObjectURL(blob);
        var img = document.querySelector("#photo");
        img.src = imageUrl;

    }

    readSingleFile(e) {
        var file = e.target.files[0];

        if (!file) {
            return;
        }
        this.fileName = file.name;
        var reader = new FileReader();
        reader.onload = function (e) {
            var contents = e.target.result;
            this.fileContent = contents;
        };
        reader.readAsArrayBuffer(file);
    }

    // document.getElementById('file-input')
    // .addEventListener('change', readSingleFile, false);

    Download(this.fileName) {
        return new Promise(function (resolve, reject) {

            this.client.readFile(this.fileName, { arrayBuffer: true }, function (error, contents) {
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
    }


    Submit() {
        Authorize().then(Upload)
        .then(function (result) {
            console.log('Działa!');
        }, function (err) {
            console.log('Nie działa :v');
        });
        console.log('End!');
    }

    DownloadFile() {
        console.log(this.innerHTML);
        Authorize().then(Download(this.innerHTML))
        .then(function (result) {
            console.log('Działa!');
        }, function (err) {
            console.log('Nie działa :v' + err);
        });
        console.log('End!');
    }

    ReadFileList() {
        Authorize().then(GetFileList)
        .then(function (result) {
            console.log('Działa!');
        }, function (err) {
            console.log('Nie działa :v' + err);
        });
        console.log('End!');
    }

    GetFileList() {
        return new Promise(function (resolve, reject) {

            this.client.readdir('/', { list: true }, function (status, reply) {
                ClearFielList();
                for (var i = 0; i <= reply.length; i++) {
                    if (reply[i] !== undefined) {
                        this.client.metadata(reply[i], function (status, reply) {
                            AddFileToList(reply.path,  reply.isFile);
                        }
                    );
                }
            }

        });
    });
    }

    ClearFielList() {
        var ul = document.getElementById('files-list');
        if (ul) {
            while (ul.firstChild) {
                ul.removeChild(ul.firstChild);
            }
        }
    }

    AddFileToList(filePath, isFile) {
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

module.exports = DropBoxClient;
