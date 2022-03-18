let display = document.getElementById('input_value');
let mybtn = document.querySelectorAll("button");
let currentdisplay="";

for(let item of mybtn)
{
    item.addEventListener('click',function get(){
        mybtntext= item.innerText;
        
        
        if(mybtntext=="AC")
     {
        currentdisplay="";
        console.log('everything is cleared');
        display.value=currentdisplay;
     }
       else if(mybtntext== '=') {
        
        display.value= eval(currentdisplay);
       }
       else if(mybtntext=="CL")
       {
         currentdisplay="";
         console.log('everything is cleared');
         display.value=currentdisplay;
       }
       else{
        currentdisplay=currentdisplay+mybtntext;
        display.value= currentdisplay;
       }


    })
    
    
}

