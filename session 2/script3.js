document.getElementById("heading").style.color = "blue";

console.log(document.getElementById("heading"));
console.log(document.getElementByClassName("second"));

document.getElementClassName("second")[0].style.color = "red";
document.getElementClassName("second")[1].style.color = "red";
document.getElementClassName("second")[2].style.color = "red";

//let headings = document.getElementsByClassName("second");

for (let i=0; i < headings.length; i++) {
    headings[i].style.color = "red";
}

for (let h2 of headings) {
    h2.style.color = "red";
}

let headings = document.getElementsByClassName("second");

console.log(document.getElementsByClassName("second"));
console.log(document.querySelectorAll(".second"));

let ul = document.getElementById("fruits");
let addBtn = document.getElementById("addFruit");

addBtn.addEventListener('click', function() {
    let li = document.createElement("LI");
    li.innerText = "kiwi";
    li.setAttribute('class', 'second');
    ul.appendChild(li);

    console.log(headings);
});


let orig = document.getElementById("orig");
let para = document.getElementById("para");
let textChange = document.getElementById("textChange");
let hidePara = document.getElementById("hidePara");

textChange.addEventListener("click", function () {
    orig.innerText = "Heading text has now been updated";
});

para.addEventListener("mouseover", function () {
    para.style.color = "orange";
});

hidePara.addEventListener("click", function () {
    para.style.display = "none";
});