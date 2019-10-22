var   text,  i;
var global = aisa+ us + eu;
var aisa = ["Shanghai", "Tokyo", "Shenzhen", "Seoul", "Keihan God", "Mumbai"];
var us = ["New York", "Los Angeles", "San Francisco", "Chicago", "Washington", "Dallas", "Houston", "Philadelphia", "Boston"];
var eu = ["London", "Paris", "Linluur", "Milan"];
 var de=document.getElementById("demo"); 
var de=document.getElementById("demo"); 

function yu(f){
text = "<div>";
for (i = 0; i < f.length; i++) {
  text += " <a class='cit'> " + f[i] + "</a>";
}
text += "</div>";
de.innerHTML = text;
de.style.display="block";}
de.style.display="none";

function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("demo").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "llo.txt", true);
  xhttp.send();
}
 function ck() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("demo").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "dc.html", true);
  xhttp.send();
}
