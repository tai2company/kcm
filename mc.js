var   text,  i;
var global = ["�W��", "�ì�", "�F��", "�`�`", "�����F", "�۴�", "�ª��s", "����", "�ھ�", "�ۥ[��",  "�ʨ���", "�ز��y", "�ܦ]�c��", "�F�Դ�", "��h�y", "�O��", "�i�h�y", "�������", "�t�Où", "�s�R", "����", "����"];
var aisa = ["�W��",  "�F��", "�`�`", "����", "�ʨ���",  "�s�R"];
var us = [  "�ì�",  "�����F",   "�ª��s",  "�ۥ[��",   "�ز��y", "�F�Դ�", "��h�y", "�O��", "�i�h�y"];
var eu = [  "�۴�",   "�ھ�",  "�ܦ]�c��",   "����"];
yu(global)
function yu(f){
text = "<div>";
for (i = 0; i < f.length; i++) {
  text += " <a class='cit'> " + f[i] + "</a>";
}
text += "</div>";
document.getElementById("demo").innerHTML = text;}