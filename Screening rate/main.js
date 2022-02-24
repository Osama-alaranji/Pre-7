let form = document.querySelector("#rateCal");
  let physics = document.querySelector("#physics");
    let chemistry = document.querySelector("#chemistry");
    let english = document.querySelector("#english");
    let history = document.querySelector("#history");
    let biology = document.querySelector("#bio");
    let bacrate = document.querySelector("#bacrate");
    let result = document.querySelector("#result");

form.onsubmit = function() {
//    or each one * 1
    let rate =  ( parseInt(physics.value) + parseInt(chemistry.value) + parseInt(english.value) + parseInt(history.value) + parseInt(biology.value)) / 5 * 60 / 100 ;
    let bacratef = bacrate.value * 40 / 2400 ;
    let scrate = Math.round(bacratef + rate);
    
    if (scrate > 90 ){
        message = "You are super nerd &#x1F913;, your rate is " + scrate + "%";
        result.style.height = "42px";
    }
   else if (scrate > 85 ){
    message = "You are nerd &#x1F913;, your rate is " + scrate + "%";
    result.style.height = "42px";

   }
   else if (scrate > 80){
       message = " " + scrate + "%" + " Good, hope you do well in term 2 " ;
   }
   else if (scrate > 70){
       message = " " + scrate + "%  WTF is this &#x1F620;,you have to pull your socks up in term 2"
       result.style.height = "42px";
   }
   else if (scrate > 40){
       message = scrate + "%" + " Are U serious &#128530;,Go and start studying right now , idiot ";
       result.style.height = "42px";


   }
   else {
       message = "Don't worry &#128533;, engineering is good, your rate is " + scrate + "%";
       result.style.height = "42px";

    }

   



    result.style.display = "block";
    result.innerHTML = message ;
   
    
     return false ;

}