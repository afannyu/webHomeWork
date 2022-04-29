const pc = document.querySelector(".pc");
const phone = document.querySelector(".phone");

pc.addEventListener('click',()=>{
  window.location.href = "./src/pc.html"
})

phone.addEventListener('click',()=>{
  window.location.href = "./src/phone.html"
})