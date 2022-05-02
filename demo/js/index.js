const img = document.querySelectorAll(".m-img> img");
const alert = document.querySelector(".m-alert> .m-img> img");
const aa = document.querySelector(".m-alert")

img.forEach((item,i)=>{
  item.addEventListener('click',()=>{
    let src = img[i].src;
    alert.src = src;
    setTimeout("Style()",0);
  })
})

document.onclick = (event)=>{
  event = event || window.event;
  var aaa = event.target;
  if (aaa.id !== "m-alert"){
      aa.style.display = "none";
  }
}

function Style () {
  aa.style.display = "block";
}