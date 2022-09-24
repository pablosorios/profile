function toggle(lang1, lang2) {
    document.getElementById("toggle_" + lang1).hidden = false;
    document.getElementById("toggle_" + lang2).hidden = true;
    var x = document.getElementsByClassName(lang1);
    var y = document.getElementsByClassName(lang2);
    for (let i = 0; i < x.length; i++) {
        x[i].hidden = false
    }for (let i = 0; i < y.length; i++) {
        y[i].hidden = true
    }
}