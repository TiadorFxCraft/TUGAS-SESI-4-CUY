function saklar(action, lampuhas) {
let lampuhas1 = document.getElementById("lampuhas1");
let lampuhas2 = document.getElementById("lampuhas2");

if (action == "on") {
    if (lampuhas == 1) {
    lampuhas1.src = "Aseps/image/on.gif";
}
    if (lampuhas == 2) {
    lampuhas2.src = "Aseps/image/on.gif";
    }
}


if (action == "off") {
    if (lampuhas == 1) { 
    lampuhas1.src = "Aseps/image/off.gif";
}
    if (lampuhas == 2) {
    lampuhas2.src = "Aseps/image/off.gif";
}
}
}