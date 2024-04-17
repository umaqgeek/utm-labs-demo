exercise11();

function exercise11() {
    var textInput = document.querySelector("#textInput1");
    textInput.addEventListener("keyup", function(evt) {
        var value = evt.target.value;
        var lastP = document.querySelector("p:last-of-type");
        lastP.innerHTML = value;
        var lastLi = document.querySelector("li:last-of-type");
        lastLi.innerHTML = value;
    });
}

function exercise10() {
    var textInput = document.querySelector("#textInput1");
    var button1 = document.querySelector("#button1");
    button1.addEventListener("click", function() {
        var newP = document.createElement("p");
        newP.innerHTML = textInput.value;
        var contentDiv = document.querySelector("div.content");
        contentDiv.append(newP);
    });
    var button2 = document.querySelector("#button2");
    button2.addEventListener("click", function() {
        var newLi = document.createElement("li");
        newLi.innerHTML = textInput.value;
        var ul = document.querySelector("ul");
        ul.append(newLi);
    });
}

function exercise9() {
    var buttons = document.querySelectorAll("button");
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", callbackButton);
    }
}

function callbackButton(evt) {
    console.log(evt.target.id);
}

function exercise8() {
    var navbarSiblings = document.querySelector(".navbar").parentElement.children;
    console.log(navbarSiblings);
    var arrSiblings = Array.prototype.slice.call(navbarSiblings);
    var siblings = arrSiblings.filter(function(current) {
        return current.className != 'navbar';
    });
    console.log(siblings); // filter all siblings without the navbar

    var contentDiv = document.querySelector("div.content");
    var firstLi = contentDiv.querySelector("li:first-of-type");
    var parentLi = firstLi.parentElement;
    console.log(parentLi.children);

    var divTarget = document.querySelector("div#target");
    console.log(divTarget.parentElement.children);
}

function exercise7() {
    var contentDiv = document.querySelector("div.content");
    var childDiv = contentDiv.children;
    console.log(childDiv);
    var ul = contentDiv.querySelector("ul");
    console.log(ul.children);
}

function exercise6() {
    var parentTarget = document.querySelector("#target").parentElement;
    console.log(parentTarget);
    var contentDiv = document.querySelector("div.content");
    var firstLi = contentDiv.querySelector("li:first-of-type");
    console.log(firstLi.parentElement);
    var ul = contentDiv.querySelector("ul");
    console.log(ul.parentElement);
}

function exercise5() {
    var contentDiv = document.querySelector("div.content");
    contentDiv.removeChild(contentDiv.firstElementChild);
    var ul = document.querySelector("ul");
    ul.removeChild(ul.lastElementChild);
}

function exercise4() {
    var newEl = document.createElement("div");
    newEl.innerHTML = "New Element";
    var contentDiv = document.querySelector("div.content");
    contentDiv.append(newEl);

    var newP = document.createElement("p");
    newP.innerHTML = "New Paragraph";
    var lastDiv = contentDiv.querySelector("div:last-of-type");
    contentDiv.insertBefore(newP, lastDiv);
}

function exercise3() {
    var parentP = document.querySelector("p").parentElement;
    console.log(parentP);
}

function exercise2() {
    var containerAll = document.getElementsByClassName('container');
    console.log(containerAll);
    var allDiv = document.getElementsByTagName("div");
    console.log(allDiv);
    console.log(allDiv[allDiv.length - 1]);
    var lastDiv = document.querySelector('div:last-of-type');;
    console.log(lastDiv);
}

function exercise1() {
    var allP = document.getElementsByTagName("p");
    var firstP = allP[0];
    console.log(firstP);
    console.log(allP);
    var navbarAll = document.getElementsByClassName("navbar");
    console.log(navbarAll);
    var footer = document.getElementById("footer");
    console.log(footer);
}