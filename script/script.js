const texts = ['Pythonista','Developer.','Coder.','Data scientist.'];
let count=0;
let index = 0;
let currenttext = "";
let letter ="";
(function type() {
    if(count === texts.length) {
        count=0;
    }
    currenttext = texts[count];
    letter = currenttext.slice(0,++index);
    document.querySelector("#change").textContent = letter;
    if (letter.length=== currenttext.length) {
        count++;
        index = 0;
    }
    setTimeout(type, 400);
})();
