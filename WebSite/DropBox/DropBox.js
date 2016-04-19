function Authorize()
{
    return true;
}


function Submit()
{
    var client = new Dropbox.Client({ key: "r4vdwcjpvu6hn1y" });
    client.authenticate();
    if (client.isAuthenticated()) {
       // console.log(":)");
        //client.writeFile('hello.txt', 'Hello, World!', function () {
        //    alert('File written!');
        //});
        
        var datastoreManager = client.getDatastoreManager();
        var datastore = null;
        var selectedDsid = null;

        var previousList = [];
        datastoreManager.datastoreListChanged.addListener(function (e) {
            var infos = e.getDatastoreInfos();
            console.log(infos);
        });


    }
    else {
        console.log(":(");
    }
    
    //Authorize().then(function (ret) {
    //    alert(ret);
    //});
}

function readFile(filename, enc) {
    return new Promise(function (fulfill, reject) {
        fs.readFile(filename, enc, function (err, res) {
            if (err) reject(err);
            else fulfill(res);
        });
    });
}

//App key

//r4vdwcjpvu6hn1y
//App secret

//t9t0ujo6p0d3b5s

//beZcac5_WFAAAAAAAAAAF4F2o8-Q1RqU6ZiFKYnrEpgeETTTbFhpdqBuyWjf_aNV