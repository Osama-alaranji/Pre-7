let form = document.querySelector("#rateCal");
let result = document.querySelector("#result");
//  therotical 
    let physics = document.querySelector("#physics");
    let chemistry = document.querySelector("#chemistry");
    let english = document.querySelector("#english");
    let history = document.querySelector("#history");
    let biology = document.querySelector("#bio");

    
//  end therotical


let message2 = "" ;

// practical 
    let pphysics = document.querySelector("#pphysics");
    let pchemistry = document.querySelector("#pchemistry");
    let pbiology = document.querySelector("#pbio");

//  end practical 
form.onsubmit = function() {
// Rate 
let rate =  ( parseInt(physics.value) + parseInt(chemistry.value) + parseInt(english.value) +  parseInt(history.value) + parseInt(biology.value) ) / 5 ;
if(rate > 90){
   message = "Super nerd &#x1F913;";  
}
else if(rate > 85){
     message = "Nerd &#x1F913;" ;  
}
else if(rate > 80){
    message = "Good" ;  
}
else if(rate > 70){
     message = "Really ? &#x1F620;," ;  
}
else if(rate > 40){
     message = "Really? , WTF is this &#x1F620;" ;  
}
else {
     message = "You will be a successful engineer" ;
}
// end Rate
// GPA (final)
let fphysics =  parseInt(physics.value) * 70 / 100 + parseInt(pphysics.value) ;
let fchemistry = parseInt(chemistry.value) * 70 / 100 + parseInt(pchemistry.value) ;
let fbiology = parseInt(biology.value) * 70 / 100 + parseInt(pbiology.value) ;
if(fphysics >= 60){
    message2 += "" ;
}
else {
    message2 += "Sorry , you failed in physics " + fphysics  + "<br>";
}
// end GPA 
if(fchemistry >= 60){
      message2 += "" ;
 }
 else {
    message2 = "Sorry , you failed in chemistry " + fchemistry + "<br>"  ;
 }
 if(fbiology >= 60){
     message2 += "" ;
 }
 else {
     message2 += "Sorry , you failed in bio " + fbiology + "<br>"  ;


     
 }
 let gpa = ( parseInt(fbiology) + parseInt(fchemistry) + parseInt(fphysics) + parseInt(english.value) + parseInt(history.value)) / 5 ;

 result.innerHTML = message + "<br> Rate : " + rate + "<br> GPA : " + gpa  + "<br>  "  + message2    ;
 result.style.display = "block" ;
 message2 = "" ;
 
 return false ;
}