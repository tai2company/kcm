var   text,  i;
var global = aisa+ us + eu;
var aisa = ["Shanghai", "Tokyo", "Shenzhen", "Seoul", "Keihan God", "Mumbai"];
var us = ["New York", "Los Angeles", "San Francisco", "Chicago", "Washington", "Dallas", "Houston", "Philadelphia", "Boston"];
var eu = ["London", "Paris", "Linluur", "Milan"];
 
function yu(f){
text = "<div>";
for (i = 0; i < f.length; i++) {
  text += " <a class='cit'> " + f[i] + "</a>";
}
text += "</div>";
document.getElementById("demo").innerHTML = text;
document.getElementById("demo").style.display="block";}
document.getElementById("demo").style.display="none";
