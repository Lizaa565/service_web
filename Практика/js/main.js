// script.js

// To access the stars
let stars =
    document.getElementsByClassName("star");
let output =
    document.getElementById("output");

// Funtion to update rating
function gfg(n) {
    remove();
    
    for (let i = 0; i < n; i++) {
        if (n == 1 ) cls = "one";
        else if (n == 2) cls = "two";
        else if (n == 3) cls = "three";
        else if (n == 4) cls = "four";
        else if (n == 5) cls = "five";
        stars[i].className = "star " + cls;
    }
    output.innerText = " " + n + "/5";
}

// To remove the pre-applied styling
function remove() {
    let i = 0;
    while (i < 5) {
        stars[i].className = "star";
        i++;
    }
}

function changeImage() {
    if (document.getElementById("imgClickAndChange").src == "images/Star 4.svg"){
        document.getElementById("imgClickAndChange").src = "images/Star 4.svg";
    } else {
        document.getElementById("imgClickAndChange").src = "images/Star 1.svg";
    }
}

function changeImage2() {
    if (document.getElementById("imgClickAndChange2").src == "images/Star 1.svg"){
        document.getElementById("imgClickAndChange2").src = "images/Star 1.svg";
    } else {
        document.getElementById("imgClickAndChange2").src = "images/Star 1.svg";
    }
}

function changeImage3() {
    if (document.getElementById("imgClickAndChange3").src == "images/Star 1.svg"){
        document.getElementById("imgClickAndChange3").src = "images/Star 1.svg";
    } else {
        document.getElementById("imgClickAndChange3").src = "images/Star 1.svg";
    }
}

function changeImage4() {
    if (document.getElementById("imgClickAndChange4").src == "images/Star 1.svg"){
        document.getElementById("imgClickAndChange4").src = "images/Star 1.svg";
    } else {
        document.getElementById("imgClickAndChange4").src = "images/Star 1.svg";
    }
}

function changeImage5() {
    if (document.getElementById("imgClickAndChange5").src == "images/Star 1.svg"){
        document.getElementById("imgClickAndChange5").src = "images/Star 1.svg";
    } else {
        document.getElementById("imgClickAndChange5").src = "images/Star 1.svg";
    }
}