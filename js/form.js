function byAdress() {
    var x;

    // Get the value of the input field with id="numb"
    x = document.getElementById("numb").value;
if (isURL(x)){
    requeteAPI(x);
}
        }

function isURL(str) {
  var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
  '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|'+ // domain name
  '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
  '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
  '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
  '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
 if(!pattern.test(str)) {alert("Merci d'entrer un URL");}
  return pattern.test(str);
}



function byFile() {
    var x, text, allurl;
    // Get the value of the input field with id="numb"
    x = document.getElementById("fileChain").value;
    text = "https://bitcoin.mubiz.com/";
    allurl = text.concat(x);
    requeteAPI(allurl);
        }

function requeteAPI(monapiURL){
    
        var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myObj = this.responseText;
        var jsonPretty = JSON.stringify(JSON.parse(myObj),null,2);
        document.getElementById("resultat").innerHTML = syntaxHighlight(jsonPretty);
    }
};
xmlhttp.open("GET", monapiURL, true);
xmlhttp.send();
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