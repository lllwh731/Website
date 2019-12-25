var colorCircle = document.getElementsByClassName("colorCircle")[0];
var liList = colorCircle.children;

var color = ['red','orange','yellow','green','blue','purple','black'];

function changeColor(){
    setInterval(function(){
        for(var i = 0;i < liList.length;i++){
            var number =  parseInt(Math.random()*7);
            (liList[i].children)[0].style.background = color[number];
            (liList[i].children)[1].innerHTML = color[number];
            (liList[i].children)[1].style.color = color[number];
        }
    },400);
}
changeColor();

var homePage = document.getElementsByClassName("homePage")[0];
var potList = homePage.children;
var number = 0;

function appearCircle(){
    setInterval(function(){
        number++;
        if(number == 7){
            number = 0;
        }
        for(var i = 1;i < potList.length;i++){
            potList[i].style.background = "white";
        }
        for(var i = 1;i <= number-1;i++){
            potList[i].style.background = "#181b17";
        }
    },500);
}
appearCircle();



    var box = document.getElementById('box');
    var oNavlist = document.getElementById("nav").children;
    var slider = document.getElementById('slider');
    var left = document.getElementById('left');
    var right = document.getElementById('right');
    var index = 1;
    var timer;
    var isMoving = false;
    function next(){
        if(!isMoving){
            isMoving = true;
            index++;
            navChange();
            animate(slider,{left:-1200*index},function(){
                if(index === 6){
                    slider.style.left = "-1200px";
                    index = 1;
                }
                isMoving = false;
            });
        }
    }
    function prev(){
        if(!isMoving){
            isMoving = true;
            index--;
            navChange();
            animate(slider,{left:-1200*index},function(){
                if(index === 0){
                    slider.style.left = "-6000px";
                    index = 5;
                }
                isMoving = false;
            });
        }
    }
    var timer = setInterval(next,2000);       
    box.onmouseover = function(){
        animate(left,{opacity:50});
        animate(right,{opacity:50});
        clearInterval(timer);
    }
    box.onmouseout = function(){
        animate(left,{opacity:0});
        animate(right,{opacity:0});
        timer = setInterval(next,2000);
    }
    right.onclick = next;
    left.onclick = prev;
    for(var i=0;i<oNavlist.length;i++){
        oNavlist[i].idx = i;
        oNavlist[i].onclick = function(){
            index = this.idx+1;
            navChange();
            animate(slider,{left:-1200*index})
        }
    }
    function navChange(){
        for(var i=0;i<oNavlist.length;i++){
            oNavlist[i].className = '';
        }
        if(index === 6){
            oNavlist[0].className = 'active';
        }else if(index === 0){
            oNavlist[4].className = 'active';
        }else{
            oNavlist[index-1].className = 'active';
        }
    }





var num2 = document.getElementsByClassName("num2")[0];
var login = num2.children[0];

login.onclick = function(){
    open("../login/login.html");
}

var num1 = document.getElementsByClassName("num1")[0];
var login2 = num1.children[0];

login2.onclick = function(){
    open("../register/register.html");
}



var hrefItaly = document.getElementById("hrefItaly");

hrefItaly.onclick = function(){
    open("../web-张杰/index.html");
} 
var first = document.getElementById("first");

first.onclick = function(){
    open("../Web-帅绍康/demo.html");
}

var second = document.getElementById("second");

second.onclick = function(){
    open("../web-王慧/山东.html");
}

var third = document.getElementById("third");

third.onclick = function(){
    open("../Web-张硕/demo.html");
}