let addButton = document.querySelector(".addButton")
let addSection = document.querySelector(".addSection")
let con = document.querySelector(".con")
let completeSectionCon = document.createElement("div");
completeSectionCon.classList.add("completeSectionCon");
completeSectionCon.innerHTML = ` <span>Conpleted</span>
<div class="completeSection"> 

</div>`

addButton.addEventListener("click", () => {
   let ul = document.createElement("ul");
   ul.classList.add("oneTask")
   ul.innerHTML = `

   <div class="checkboxCon">
   <input type="checkbox" name="cd" id="cd" class="checkbox" >
   <label for="cd" > </label>
   </div>
   
   <div class="taskCon ">
   <input type="text" class="task "></input>
   </div>
   
   <div class="deleteCon">
   <button class="delete">X</button>
   </div>`

   addSection.prepend(ul)


   let deleteBtn = ul.querySelector(".delete")
   deleteBtn.addEventListener("click", () => {
      if (document.querySelector(".cdcc")) {
         document.querySelector(".cdcc").classList.remove("remove")
         return
      }
      let cdcc = document.createElement("div"); 
      cdcc.classList.add("cdcc")
      cdcc.innerHTML = `
      
        <div class="cdc"> 
            Confarm <br>
            <button id="cdelete">cancel</button>
            <button id="ddelete">delete</button> 
        </div>
      `
      document.body.append(cdcc) 
      
      let cdelete = cdcc.querySelector("#cdelete")
      cdelete.addEventListener("click", () => {
         let cdcc = document.querySelector(".cdcc").classList.add("remove") 
      })

      let ddelete = cdcc.querySelector("#ddelete")
      ddelete.addEventListener("click", () => {
         ul.remove()
          document.querySelector(".cdcc").remove()
      })
   })  
   

       



   let task = ul.querySelector(".task")
   let checkboxc = ul.querySelector(".checkbox")
   checkboxc.addEventListener("click", () => {
      task.classList.add("complete")

      if (checkboxc.checked) {
         task.disabled = true;
         con.append(completeSectionCon)
         completeSectionCon.querySelector(".completeSection").prepend(ul)


      } else {
         task.disabled = false;
         addSection.append(ul)
         task.classList.remove("complete")
      }

   })

})
