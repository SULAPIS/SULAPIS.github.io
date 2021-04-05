var n = 0;

function cc(bot) {
    bot.value = ++n;
}

var aniframes = new Array(22);
for (var i = 0; i < 22; i++) {
    aniframes[i] = "img/pingu/" + i + ".jpg";
}
var frame = 0;
var timeoutId = null;

function animatee() {
    document.pingu.src = aniframes[frame];
    // alert(document.pingu.src);
    frame = (frame + 1) % 22;
    timeoutId = setTimeout("animatee()", 100);
}

function animatef() {
    document.pingu.src = aniframes[frame];
    // alert(document.pingu.src);
    frame = frame - 1;
    if (frame == -1) frame = 21;
    timeoutId = setTimeout("animatef()", 100);
}

function changeImage() {
    element = document.getElementById("bul");
    if (element.src.match("bulbon")) {
        element.src = "img/bulboff.gif";
    } else {
        element.src = "img/bulbon.gif";
    }
}