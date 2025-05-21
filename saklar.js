function saklar(action, lampu) {
let lampu1 = document.getElementById("lampu1");
let lampu2 = document.getElementById("lampu2");

if (action == "on") {
    if (lampu == 1) {
    lampu1.src = "Aseps/image/on.gif";
}
    if (lampu == 2) {
    lampu2.src = "Aseps/image/on.gif";
    }
}

if (action == "off") {
    if (lampu == 1) { 
    lampu1.src = "Aseps/image/off.gif";
}
    if (lampu == 2) {
    lampu2.src = "Aseps/image/off.gif";
}
}
}