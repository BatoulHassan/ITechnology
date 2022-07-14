let nums = document.querySelectorAll(".nums .num");

let section = document.querySelector(".project-work");

let started = false; //funtion started ? No

let offerSection = document.querySelector(".serviceoffers");

let divs = document.querySelectorAll(".progress-bar");

window.onscroll = function () {
    console.log(section.offsetTop);

    if (document.documentElement.scrollTop > 20 || document.body.scrollTop > 20) {
     
       myBtn.style.display = "block";
      
     }
    if (window.scrollY >= section.offsetTop - 200) {
       if (!started) {
        nums.forEach((num) => startCount(num) )
       }
       started = true;
    }
    if (window.scrollY >= offerSection.offsetTop) {
        divs.forEach((div) => {
            div.style.width = div.dataset.width;
        })
    }
}
 
function startCount(el) {
   let goal = el.dataset.goal;
  
   let count = setInterval(() => {

       el.textContent++;

       if (el.textContent === goal) {

           clearInterval(count);
       }
   }, 100 / goal)
      
}

// Scroll To Top
let myBtn = document.getElementById("myBtn");

myBtn.onclick = function() {
    
    document.documentElement.scrollTop = 0; //for chrome/firefox/IE/opera
 //   document.body.scrollTop = 0; //for safari
}

 //window.onscroll = function () {

 //   if (document.documentElement.scrollTop > 20 || document.body.scrollTop > 20) {
     
  //       myBtn.style.display = "block";

  //  }
// }




