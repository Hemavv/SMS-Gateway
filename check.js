function send() {
    apiKey = document.getElementById("txtapi").value;
    sender = document.getElementById("txtsend").value;
    numbers = document.getElementById("txtnum").value;
    message = document.getElementById("txtmsg").value;
    var url = "https://api.textlocal.in/send/?" +
        "apikey=" + apiKey +
        "&sender=" + sender +
        "&numbers=" + numbers +
        "&message=" + message
    sendRequest(url);
}

function sendRequest(url) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            var data = JSON.parse(xmlhttp.responseText);
            console.log("data");

        }
    }
    xmlhttp.open("POST", url, true);
    xmlhttp.send();
}