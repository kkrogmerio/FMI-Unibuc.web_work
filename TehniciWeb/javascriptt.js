window.onload = function() {
    var x = document.getElementById("click")
    var y = document.getElementById("press")
    var text = '{"admine_only":"332.556.89.22","user_acces":"Default date:01.01.1999"}';
    var obj = JSON.parse(text);
    var z = document.getElementById("local")
    var show = document.getElementById("show")
    z.onmouseover = function() {
        obj.user_acces = localStorage.getItem(show);
        if (obj.user_acces != null)
            show.innerHTML = "The last time this page was visited: " + obj.user_acces;
        else
            z.innerHTML = "This site wasn't visited";
    }
    z.onclick = function(e) {
        localStorage.setItem(show, Date())
    }
    var choice = ["first", "second"];
    var modify = document.getElementById("change");
    //alert(Math.floor(Math.random() * (choice.length)));
    modify.className = choice[Math.floor(Math.random() * (choice.length))];
    var dom = document.getElementById("dom")
        //alert('a')
    dom.onclick = function() {
        alert('aa')
    }
    dom.innerHTML = "Note* This page was created with the font family " + dom.parentElement.style.fontFamily + " which is not supported on Internet Explorer Version 8.0 or earlier"

}