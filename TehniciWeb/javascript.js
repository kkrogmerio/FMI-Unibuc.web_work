window.onload = function() {

    var quote = ["Vote for your hero to be in the top-list of the next magazine", "Try the new products which we early released on the shop online", "Come & enjoy our team! You can have early acces to hero's stages!"]
    var numar = Math.floor(Math.random() * (quote.length))
    var qu = document.getElementById("Quote")
    qu.innerHTML = quote[numar]
    alert("aaaaa");
    var y = document.getElementById("clock")
    var x = document.getElementById("viz")
    x.style.display = "none";

    y.onclick = function() {
        if (x.style.display === "none") {
            x.style.display = "block";
            y.innerHTML = "Inchide-mi cuprinsul";

        } else {
            x.style.display = "none";
            y.innerHTML = "Afiseaza-mi cuprinsul";

        }
    }

    var z = document.getElementById("promotion")
    z.onclick = function() {

        z.style.display = "none";
    }
    var v = document.getElementById("changer");


    var w = document.getElementsByClassName("changed");


    //var change = window.getComputedStyle(v, null);
    //alert('a')

    //w[0].style.fontSize = change.getPropertyValue("fontSize");
    var change = window.getComputedStyle(v, null);
    var i
    for (i = 0; i < 4; i++) {
        //alert('a')

        w[i].style.fontSize = change.getPropertyValue("font-size");



    }







}