window.onload = function() {
    var quote = ["Vote for your hero to be in the top-list of the next magazine", "Try the new products which we early released on the shop online", "Come & enjoy our team! You can have early acces to hero's stages!"]
    var numar = Math.floor(Math.random() * (quote.length))
    var qu = document.getElementById("Quote")
    qu.innerHTML = quote[numar]
    let statut = document.getElementById('status')
    let name = document.getElementById('name')
    var submite = document.getElementById("submitt")
    var sub_statut = document.getElementById('sub_status')
    sub_statut.style.display = "none"
    submite.addEventListener("click", function() {
        if (name.value == "tehniciWeb") {
            statut.style.display = "block";
            submite.style.display = "none"
        } else
            alert("Wrong promotional code")
    })
    var count = 3;

    let c1 = document.getElementsByClassName("wins")
    for (x of c1)
        x.style.display = "none"
    let prize = document.querySelectorAll(".prize")
    let test = document.getElementsByClassName("test1")
    for (let i = 0; i < test.length; i++) {
        test[i].onclick = function() {
            if (count > 0) {
                if (c1[0].style.display == "none") {
                    count -= 1;
                    alert("Congratulations , you have " + count + " more prizes to collect");
                    test[i].style.backgroundColor = "red";
                    c1[i].style.display = "block"
                    prize[3 - count - 1].innerHTML = c1[i].innerHTML;
                    if (count == 0) {
                        sub_statut.style.display = "block";
                    }
                }
            }
        }
    }






    let show = document.getElementById('name2')
    let submit2 = document.getElementById('submitt2')
    submit2.onclick = function() { alert('An email with the details about how to procure the rewards was sent to the mail address: ' + show.value) }

}