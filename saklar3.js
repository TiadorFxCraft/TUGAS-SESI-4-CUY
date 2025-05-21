function saklar(action, lampudir) {
let lampudir1 = document.getElementById("lampudir1");
let lampudir2 = document.getElementById("lampudir2");
let lampudir3 = document.getElementById("lampudir3");

if (action == "on") {
    if (lampudir == 1) {
    lampudir1.src = "Aseps/image/on.gif";
}
    if (lampudir == 2) {
    lampudir2.src = "Aseps/image/on.gif";
    }
    if (lampudir == 3) {
    lampudir3.src = "Aseps/image/on.gif";
    }
}



if (action == "off") {
    if (lampudir == 1) { 
    lampudir1.src = "Aseps/image/off.gif";
}
    if (lampudir == 2) {
    lampudir2.src = "Aseps/image/off.gif";
}
    if (lampudir == 3) {
    lampudir3.src = "Aseps/image/off.gif";
}
}
}
