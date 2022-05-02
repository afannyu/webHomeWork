const btn = document.querySelector(".g-index> input");
const bd = document.querySelector(".m-bd");
let num = 0;

btn.addEventListener('click',()=>{
  num++;
  bd.innerHTML+= '<div class="m-div"><li>'+num+'</li><i></i><li>删除</li></div>'
  let li = document.querySelectorAll(".m-div> li:nth-child(3)")
  let div = document.querySelectorAll(".m-div")
  console.log(li)
  //echo的写法！！！明白箭头函数参数e的含义
  // li.forEach((item,i)=>{
  //   item.addEventListener('click',(e)=>{
  //     console.log("11");
  //     console.log(e.target.parentNode);
  //     bd.removeChild(e.target.parentNode)
  //   })
  // })
  li.forEach((item,i)=>{
    item.addEventListener('click',()=>{
      div[i].remove()
      num--
    })
  })
})

