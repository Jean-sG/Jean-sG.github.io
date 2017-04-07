function requeteApiWS(monapiURL, elementiD){
    var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myObj = this.responseText;
        var jsonPretty = JSON.stringify(JSON.parse(myObj),null,2);
        document.getElementById(elementiD).innerHTML = jsonPretty;
    }
};
xmlhttp.open("GET", monapiURL, true);
xmlhttp.send();
}

document.getElementById("boutonAdress").onclick = function() {byAdress()};


function byAdress() {
     var inpObj = document.getElementById("InputAdress");
    if (inpObj.checkValidity() == false) {
        document.getElementById("resultat").innerHTML = inpObj.validationMessage;
    } else {
       requeteApiWS(inpObj, resultat);
    } 
}