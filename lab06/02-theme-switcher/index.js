const og = document.querySelector("body").className;

const ocean = () => {
   document.querySelector("body").className = "ocean";
};

const desert = () => {
   document.querySelector("body").className = "desert";
};

const highconstrast = () => {
   document.querySelector("body").className = "high-contrast";
};

const home = () => {
   document.querySelector("body").className = og;
};


document.querySelector("#default").addEventListener('click', home);
document.querySelector("#ocean").addEventListener('click', ocean);
document.querySelector("#desert").addEventListener('click', desert);
document.querySelector("#high-contrast").addEventListener('click', highconstrast);