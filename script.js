const num = document.querySelector("#num");
let count = 0;

setInterval(() => {
  
   if(count == 65){
    clearInterval();
}else{
    count += 1;
   num.innerHTML = count + "%";
}     
    }, 30); 

