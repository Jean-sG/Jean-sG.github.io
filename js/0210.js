function requeteApiWS(monapiURL , elementiD) 
{var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myObj = this.responseText;
        var jsonPretty = JSON.stringify(JSON.parse(myObj),null,2);
        document.getElementById("elementID").innerHTML = jsonPretty;
    }
};
xmlhttp.open("GET", "monapiURL", true);
xmlhttp.send();
}


function homePageLoading() {
    url = 'http://bitcoin.mubiz.com/blockchaininfo';
    elementID = 'blockchaininfo';
    requeteApiWS(url, elementID);
    
        url = 'http://bitcoin.mubiz.com/mininginfo ';
    elementID = 'mininginfo';
    requeteApiWS(url, elementID);
    
        url = 'http://bitcoin.mubiz.com/peerinfo';
    elementID = 'peerinfo';
    requeteApiWS(url, elementID);
}