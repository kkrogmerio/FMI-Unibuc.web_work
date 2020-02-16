window.onload = function() {
    var quote = ["Vote for your hero to be in the top-list of the next magazine", "Try the new products which we early released on the shop online", "Come & enjoy our team! You can have early acces to hero's stages!"]
    var numar = Math.floor(Math.random() * (quote.length))
    var qu = document.getElementById("Quote")
    qu.innerHTML = quote[numar]
    let statut = document.getElementById('status')
    let name = document.getElementById('name')
    name.onkeydown = function() {
        var x = event.key;

        if (x == "=" || x == "+" || x == "-") {
            alert("You pressed the " + x + " invalid character!");
            event.preventDefault()
        }
    }
    var submite = document.getElementById("submitt")
    var submiteprop = document.getElementById("submittprop")

    var sub_statut = document.getElementById('sub_status')
    sub_statut.style.display = "none"
    submiteprop.addEventListener("click", function() {
        if (name.value == "tehniciWeb") {
            statut.style.display = "block";
            submite.style.display = "none"
            alert('Correct promotional code')
        } else
            alert("Incorrect promotional code")
    }, true)
    submite.addEventListener("click", function() {
        if (name.value == "tehniciWeb") {
            statut.style.display = "block";
            submite.style.display = "none"
            alert('Good luck!')
        } else
            alert("Rewrite it again correctly!")
    }, true)
    var count = 3;

    let c1 = document.getElementsByClassName("wins")
    for (x of c1)
        x.style.display = "none"
    let prize = document.querySelectorAll(".prize")
    let test = document.getElementsByClassName("test1")
    for (let i = 0; i < test.length; i++) {
        test[i].onclick = function() {
            if (count > 0) {
                if (c1[i].style.display == "none") {
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




    sub_statut.onclick = function() {
        alert("Congratulations!");
    }
    tombola = document.getElementById("tombola");
    consolidation = document.getElementById("consolation");
    let show = document.getElementById('name2')
    show.onkeydown = function() {
            var x = event.key;
            if (x == "Enter" && tombola.checked) {
                alert('An email with the details about how to procure the ' + tombola.value + " was sent to the mail address: " + show.value + "\n If you entered a wrong email adress please contact the support.")
                document.getElementById('name1').style.display = "none";
            } else if (x == "Enter" && consolidation.checked) {
                alert('An email with the details about how to procure the ' + consolidation.value + " was sent to the mail address: " + show.value + "\n If you entered a wrong email adress please contact the support.")
                document.getElementById('name1').style.display = "none";
            } else if (x == "Enter") {
                alert('Please select a radio');
            }
            var voucher = document.getElementById("voucher");
            var getv = document.getElementById("getvoucher")

        }
        //voucher.onclick=setInterval
    let interval = setInterval(function() {
        var numar = Math.floor(Math.random() * (450));
        voucher.innerHTML = numar;
    }, 33)
    getvoucher.onclick = function() {
            clearInterval(interval);
            var z = voucher.innerHTML
            alert("You have received a voucher to spend on our fanpage in value of:  " + z);
        }
        //voucher.onload=function()
        //alert('aa')
        //let submit2 = document.getElementById('submitt2')
        //submit2.onclick = function() {}

}