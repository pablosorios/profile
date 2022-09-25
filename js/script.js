function changelang() {
    var x = document.getElementById("language-toggle");
    if (x.checked) {
        toggle("es", "en")
    } else {
        toggle("en", "es")
    }
}
function toggle(lang1, lang2) {
    var x = document.getElementsByClassName(lang1);
    var y = document.getElementsByClassName(lang2);
    for (let i = 0; i < x.length; i++) {
        x[i].hidden = false
    }for (let i = 0; i < y.length; i++) {
        y[i].hidden = true
    }
}