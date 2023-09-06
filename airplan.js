let openclosenavfun = ()=>{
    
    let navR = document.getElementsByClassName("navR")[0];
    if(opennav.classList.contains("closenav")){
        opennav.classList.remove("closenav");
        navR.style.display ="none";
    }
    else{
        opennav.classList.add("closenav");
        navR.style.display ="block";
    }
}
let opennav= document.getElementById("opennav");
opennav.addEventListener("click", ()=>{ openclosenavfun();});

// scroll function
const scrollcontainer = document.querySelectorAll(".scroll");
scrollcontainer.forEach(element => {
  const leftmove = element.querySelector(".leftmove");
  const rightmove = element.querySelector(".rightmove");
  const scrollcontainer = element.querySelector(".scroll-container");
  const scrollpic = element.querySelector(".scroll-pic");
  const movewidth = scrollpic.clientWidth + parseInt(window.getComputedStyle(scrollpic).paddingLeft);
  rightmove.addEventListener("click", () => {
    scrollcontainer.scrollLeft += movewidth;
  });
  leftmove.addEventListener("click", () => {
    scrollcontainer.scrollLeft -= movewidth;
  });

});


// open footer
let openclosefootfn = () => {
    let listsome = document.getElementById("listsome");
    if(listsome.classList.contains("showlistsome")){
        listsome.classList.remove("showlistsome");
      openfooter.style.transform = "translate(-50%, -50%) rotate(0deg)";

    } else {
      listsome.classList.add("showlistsome");
      openfooter.style.transform ="translate(-50%, -50%) rotate(180deg)";
    }
  };
  
  let openfooter = document.getElementById("morefotter");
  openfooter.addEventListener("click", () => { openclosefootfn(); });
  