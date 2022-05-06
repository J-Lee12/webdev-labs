const makeBigger = () => {
   temp = window.getComputedStyle(document.querySelector(".content")).getPropertyValue("font-size");
   temp = parseFloat(temp)/10;
   temp2 = window.getComputedStyle(document.querySelector("h1")).getPropertyValue("font-size");
   temp2 = parseFloat(temp2)/10;
   
   document.querySelector(".content").style.fontSize = temp + 1 + "em";
   document.querySelector("h1").style.fontSize = temp2 + 1 + "em";
};

const makeSmaller = () => {
   temp3 = window.getComputedStyle(document.querySelector(".content")).getPropertyValue("font-size");
   temp3 = parseFloat(temp3)/10;
   temp4 = window.getComputedStyle(document.querySelector("h1")).getPropertyValue("font-size");
   temp4 = parseFloat(temp4)/10;
   
   document.querySelector(".content").style.fontSize = temp3 / 2 + "em";
   document.querySelector("h1").style.fontSize = temp4 / 2 + "em";
};

document.querySelector("#a1").addEventListener('click', makeBigger);
document.querySelector("#a2").addEventListener('click', makeSmaller);

