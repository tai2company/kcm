var   text,  i;
var global = ["上海", "紐約", "東京", "深圳", "洛杉磯", "倫敦", "舊金山", "首爾", "巴黎", "芝加哥",  "京阪神", "華盛頓", "萊因盧爾", "達拉斯", "休士頓", "費城", "波士頓", "墨西哥城", "聖保羅", "孟買", "雪梨", "米蘭"];
var aisa = ["上海",  "東京", "深圳", "首爾", "京阪神",  "孟買"];
var us = [  "紐約",  "洛杉磯",   "舊金山",  "芝加哥",   "華盛頓", "達拉斯", "休士頓", "費城", "波士頓"];
var eu = [  "倫敦",   "巴黎",  "萊因盧爾",   "米蘭"];
yu(global)
function yu(f){
text = "<div>";
for (i = 0; i < f.length; i++) {
  text += " <a class='cit'> " + f[i] + "</a>";
}
text += "</div>";
document.getElementById("demo").innerHTML = text;}