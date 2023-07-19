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

// open footer
let openclosefootfn = () => {
    let listsome = document.getElementById("listsome");
    let openfooter = document.querySelector(".ft img");
    if(listsome.classList.contains("showlistsome")){
        listsome.classList.remove("showlistsome");
      openfooter.style.transform = "rotate(0deg)";

    } else {
      listsome.classList.add("showlistsome");
      openfooter.style.transform = "rotate(180deg)";
    }
  };
  
  let openfooter = document.querySelector(".ft img");
  openfooter.addEventListener("click", () => { openclosefootfn(); });
  