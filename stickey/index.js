let modal = document.querySelector("#modal");
let all_notes =document.querySelector("#all_notes");
let btn = document.querySelector("#add_note");
let hide = document.querySelector("#hide_note");
let user_input =document.querySelector("#user_input")


btn.addEventListener("click",()=>{
   
    modal.style.display ="block"
    
    
});


hide.addEventListener("click",()=>{
    modal.style.display ="none"
    console.log("ujwal")
})

     
user_input.addEventListener("keypress", (event)=>{
    if(event.key ==="Enter"){
        let div = document.createElement("div");
        div.classList.add("note");

        all_notes.appendChild(div)
       
      div.innerHTML = user_input.value
    } 

    })
    


    


 


    

 







