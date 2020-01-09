function prosiriFunc(index) {
    var content = document.getElementsByClassName("box1-bottom");
    var dugme = document.getElementsByClassName("dugme1");
    var i = index;
    //for (var i = 0, l = content.length; i < l; i++) {
        if (content[i].style.display === "none") {
            content[i].style.display = "block";
            dugme[i].innerHTML="-";
        } else {
            content[i].style.display = "none";
            dugme[i].innerHTML = "+" ;
        }
}
function prosiriFunc1() {
    var content = document.getElementsByClassName("box5-bottom");
    var dugme = document.getElementsByClassName("dugme2");
    var i = arguments[0];
    //for (var i = 0, l = content.length; i < l; i++) {
    if (content[i].style.display === "none") {
        content[i].style.display = "block";
        dugme[i].innerHTML="-";
    } else {
        content[i].style.display = "none";
        dugme[i].innerHTML = "+" ;
    }
}


