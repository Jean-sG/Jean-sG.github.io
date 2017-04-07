function requeteApiWS(monapiURL, elementiD){
    var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myObj = this.responseText;
        var jsonPretty = JSON.stringify(JSON.parse(myObj),null,2);
        document.getElementById(elementiD).innerHTML = syntaxHighlight(jsonPretty);
    }
};
xmlhttp.open("GET", monapiURL, true);
xmlhttp.send();
}


function homePageLoading() {
    
    url = 'https://bitcoin.mubiz.com/info';
    element = 'info';
    requeteApiWS(url, element);
    
    url = 'https://bitcoin.mubiz.com/blockchaininfo';
    element = 'blockchaininfo';
    requeteApiWS(url, element);
    
        url = 'https://bitcoin.mubiz.com/mininginfo';
    element = 'mininginfo';
    requeteApiWS(url, element);
    
        url = 'https://bitcoin.mubiz.com/peerinfo';
    element = 'peerinfo';
    requeteApiWS(url, element);
}


function syntaxHighlight(json) {
    json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function (match) {
        var cls = 'number';
        if (/^"/.test(match)) {
            if (/:$/.test(match)) {
                cls = 'key';
            } else {
                cls = 'string';
            }
        } else if (/true|false/.test(match)) {
            cls = 'boolean';
        } else if (/null/.test(match)) {
            cls = 'null';
        }
        return '<span class="' + cls + '">' + match + '</span>';
    });
}