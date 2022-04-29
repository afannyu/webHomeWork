$(document).ready(function(){

    $("#p1").click(function(){
        document.querySelector("#p1").style.color = "red";
    });

    $("#p2").click(function(){
        var pp2 = document.querySelector("h1");
        var myDate = new Date();
        var time = myDate.toLocaleDateString().split('/').join('-');
        pp2.textContent = time;
    });

    $("#p3").click(function(){
        var num = document.querySelectorAll("ul > li");
        var i = 0;
        for (i = 0; i < num.length; i++) {
            num[i].classList.add("fn-active");
        }
    });

    $("#p4").click(function(){
        var pp8 = document.querySelector("ul li:nth-child(8)");
        pp8.remove();
    });

    $("#p5").click(function(){
        window.location.href = "https://www.taobao.com/";
    });

    $("#p6").click(function(){
        var ele = document.createElement("li");
        var main = document.querySelector("ul");
        ele.innerHTML = "p9";
        main.appendChild(ele);
    });

    $("li").click(function(){
        var index = $(this).index();
        alert(index);
    });

    $("#p7").click(function(){
        var widthh = document.querySelector(".m-box");
        var s = window.screen.width;
        widthh.style.width = s + 'px';
    });

});