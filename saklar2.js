function saklar(action, lampubrek) {
let lampubrek1 = document.getElementById("lampubrek1");
let lampubrek2 = document.getElementById("lampubrek2");
let lampubrek3 = document.getElementById("lampubrek3");

if (action == "on") {
    if (lampubrek == 1) {
    lampubrek1.src = "Aseps/image/on.gif";
}
    if (lampubrek == 2) {
    lampubrek2.src = "Aseps/image/on.gif";
    }
    if (lampubrek == 3) {
    lampubrek3.src = "Aseps/image/on.gif";
    }
}



if (action == "off") {
    if (lampubrek == 1) { 
    lampubrek1.src = "Aseps/image/off.gif";
}
    if (lampubrek == 2) {
    lampubrek2.src = "Aseps/image/off.gif";
}
    if (lampubrek == 3) {
    lampubrek3.src = "Aseps/image/off.gif";
}
}
}
