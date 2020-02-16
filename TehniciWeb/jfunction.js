window.onload = function() {
    var x = document.getElementsByClassName("mar");
    x[0].style.backgroundColor = "red";
    for (y of x) {
        alert(y.innerHTML);
        y.style.backgroundColor = "red"
    }
}