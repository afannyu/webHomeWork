// 实验一实验二实验三的跳转
var list = document.querySelectorAll(".m-menu>li")
var content = document.querySelectorAll(".m-bd>div")
list.forEach((item, i) => {
    item.addEventListener('click', () => {
        content.forEach((item, j) => {
            content[j].classList.remove("sel")
        })
        document.querySelectorAll(".m-bd>div")[i].classList.add('sel');
    })
})
$(function () {
    $(".g-index_1> .m-menu> li").click(function () {
        $(this).addClass("flag").siblings().removeClass("flag");
    })
})

// jQuery实验一
$(function () {
    $(".imglistwrap li").click(function () {
        // 获取当前图片的src
        var src = $(this).find(".imgbox img").attr('src');
        //添加到弹窗img
        $(".bigimg").attr("src", src);
        // 显示弹窗
        $(".maskweap").fadeIn();
    });
    // 点击盒子以外的地方弹窗关闭
    $(document).mousedown(function (e) {
        if ($(e.target).parent(".imgshow").length == 0) {
            $(".maskweap").fadeOut(); //弹窗关闭
        }
    });
})


// js实验一
var im = document.querySelectorAll(".m-imglist> li")
var img = document.querySelector(".m-img> img")
var flag = 0;
im.forEach((item, i) => {
    item.addEventListener('click', (e) => {
        var src = img.getAttribute("src")
        document.querySelector(".big_img").src = src
        var aler = document.querySelector(".m-img_alert")
        aler.style.display = "block"
        flag = 1;
    });

})
document.addEventListener("mousedown", function (e) {
    if (flag == 1) {
        var img = document.querySelector(".m-img_alert");
        var div = document.querySelector(".m-img_alert>.m-img>.big_img");
        var x = e.clientX;
        var y = e.clientY;
        var divx1 = div.offsetLeft;
        var divy1 = div.offsetTop;
        var divx2 = div.offsetLeft + div.offsetWidth;
        var divy2 = div.offsetTop + div.offsetHeight;
        if (x < divx1 || x > divx2 || y < divy1 || y > divy2) {
            img.style.display = "none";
            flag = 0;
        }
    }
});

// jQuery实验二
$(function () {
    $(".m-work_2> .m-hd> li").click(function () {
        var i = $(this).index()
        var j = 0
        $(this).addClass("current").siblings().removeClass("current");
        $(".m-work_2> .m-bd").each(function () {
            $(this).removeClass("sel")
            if (i == j) {
                $(this).addClass("sel")
            }
            j++
        })
    })
})

// js实验二
var js_22 = document.querySelectorAll(".m-work_2> .m-bdd")
document.querySelectorAll(".m-work_2> .m-hd").forEach((item,i)=>{
    item.addEventListener('click',()=>{
        js_22.forEach((item,j)=>{
            js_22[j].classList.remove("sel")
        })
        js_22[i].classList.add("sel")
    })
})

// jQuery实验三
var num = 0; //总数

$('body').on('click', '.m-ft', (e) => {
  doAdd(e);
})

$('body').on('click', '.u-del', (e) => {
  doDel(e);
})

function doAdd(e) {
  let t = e.currentTarget;
  let item = `<div class="u-content"><div class="u-no">${++num}</div><div class="u-info"></div><div class="u-del">Delete</div></div>`
  $(t).prev().append(item);
}

function doDel(e) {
  let t = e.currentTarget;
  $(t).parent().remove();
  num --;
  upload();
}

//修正序号
function upload() {
  let contentList = $('.m-data').children();
  let i = num;
  contentList.map((index,item)=>{
  	$(item).find('.u-no').text(num - (--i));
  })
}

