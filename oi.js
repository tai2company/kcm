<script>

var x = document.getElementsByClassName("data");
var i;
for(i=0; i<x.length; i++){
var y = x[i].getElementsByTagName("td");
var v =y[4].innerHTML.replace("B", "").replace("$", "")/y[5].innerHTML.replace("B", "").replace("$", "").replace("M", "");
document.getElementById("demo").innerHTML += y[2].innerHTML+"<br>"+
 100/v+"<br>"
;
}
</script>
