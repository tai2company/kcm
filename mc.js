var   text,  i;
var global = ["Shanghai", "New York", "Tokyo", "Shenzhen", "Los Angeles", "London", "San Francisco", "Seoul", "Paris", "Chicago", "Keihan God", "Washington", "Linluur", "Dallas", "Houston", "Philadelphia", "Boston", "Mexico City", "Sao Paulo", "Mumbai", "Sydney", "Milan"];
var aisa = ["Shanghai", "Tokyo", "Shenzhen", "Seoul", "Keihan God", "Mumbai"];
var us = ["New York", "Los Angeles", "San Francisco", "Chicago", "Washington", "Dallas", "Houston", "Philadelphia", "Boston"];
var eu = ["London", "Paris", "Linluur", "Milan"];
yu(global)
function yu(f){
text = "<div>";
for (i = 0; i < f.length; i++) {
  text += " <a class='cit'> " + f[i] + "</a>";
}
text += "</div>";
document.getElementById("demo").innerHTML = text;}
