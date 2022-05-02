const bd = document.querySelectorAll(".m-bd> li");
const cont = document.querySelectorAll(".m-cont> li");
bd.forEach((item,i)=>{
  item.addEventListener('click',()=>{
    cont.forEach((item,j)=>{
      cont[j].classList.remove("sel");
      bd[j].classList.remove("sel");
    })
    cont[i].classList.add("sel");
    bd[i].classList.add("sel");
  })
})