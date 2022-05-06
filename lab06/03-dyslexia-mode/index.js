/* 
  See Smashing Magazine Tutorial:
  https://www.smashingmagazine.com/2021/11/dyslexia-friendly-mode-website/
*/

const og = document.querySelector("body").className;
on = false;

const mode = () => {
  if (on == true){
    document.querySelector("body").className = og;
    on = false;
  } else{
    document.querySelector("body").className = "dsylexia-mode";
    on = true;
  }
};

document.querySelector("#dyslexia-toggle").addEventListener('click', mode);