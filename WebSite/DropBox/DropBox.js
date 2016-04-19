function Authorize()
{
    return true;
}
var client = new Dropbox.Client({ key: "r4vdwcjpvu6hn1y" });

var promise = new Promise(function(resolve, reject) {
      client.authenticate();
    if (client.isAuthenticated()) {
      resolve("Dział!");
    }
    else {
    reject(Error("Nie działa :v"));
}
});


function Submit()
{
    
    //client.authenticate();
    //if (client.isAuthenticated()) {
    //   console.log(":)");
    //}
    //else {
    //    console.log(":(");
    //}
    promise.then(function (result) {
        console.log(result); // "Działa!"
    }, function (err) {
        console.error(err); // Error: "Nie działa :v"
    });
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