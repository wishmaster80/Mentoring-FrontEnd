var client = new Dropbox.Client({ key: "r4vdwcjpvu6hn1y" });

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
        
        client.writeFile('hello.txt', 'Hello, World!', function () {
            console.log('File written!');
            resolve();
        });        
    }
    )
}


function Download() {
    return new Promise(function (resolve, reject) {

        client.readFile('hello.txt', { arrayBuffer: true }, function (error, contents) {            
            console.log((contents));
            saveAs(contents, 'encode_file');
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

