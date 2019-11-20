window.onload = function() {

    var quote = ["Vote for your hero to be in the top-list of the next magazine", "Try the new products which we early released on the shop online", "Come & enjoy our team! You can have early acces to hero's stages!"]
    var numar = Math.floor(Math.random() * (quote.length))
    var qu = document.getElementById("Quote")
    qu.innerHTML = quote[numar]

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





}