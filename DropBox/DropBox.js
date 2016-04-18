function Authorize()
{
    return true;
}


function Submit()
{
    var client = new Dropbox.Client({ key: "beZcac5_WFAAAAAAAAAAF4F2o8-Q1RqU6ZiFKYnrEpgeETTTbFhpdqBuyWjf_aNV" });
    if (client.isAuthenticated()) { console.log(":)"); }
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