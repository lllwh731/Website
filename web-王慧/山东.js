var change = document.getElementById("change");

var lengthFlag = 1
setInterval(function(){
    if(parseInt(getStyle(change,'width')) == 45){
        lengthFlag = -1;
    }
    if(parseInt(getStyle(change,'width')) == 15){
        lengthFlag = 1;
    }
    change.style.width = parseInt(getStyle(change,'width')) + lengthFlag + "px";
},50);


var ul1 = document.getElementById("ul1");
var index = 0;
var flag = true;
// animate(ul1,{left:0+(-260*index)});

function roll(){
    if(flag == false){
        return;
    }
    flag = false;
    if(index == 4){
        ul1.style["left"] = "0px";
        index = -4;
    }
    index += 1;
    animate(ul1,{left:-1048 - index*260},
        function(){
            if(index == 4){
                ul1.style["left"] = "0px";
                index = -4;
            }
            flag = true;
        }
    )
}

var interval = setInterval(roll,3000)


var changeColor = document.getElementsByClassName("changeColor")[0];
var liList = changeColor.children;
for(var i = 0;i < liList.length;i++){
    liList[i].number = i;
    liList[i].onmouseover = function(){
        liList[this.number].setAttribute("id","changeColor");
    }
    liList[i].onmouseout = function(){
        liList[this.number].setAttribute("id","");
    }
}

var ul1 = document.getElementById("ul1");
var pictureLiList = ul1.children;
for(var i = 0;i < pictureLiList.length;i++){
    pictureLiList[i].onmouseover = function(){
        (pictureLiList[parseInt(this.children[1].getAttribute("number"))].children)[1].style.color = "#8a8484";
    }
    pictureLiList[i].onmouseout = function(){
        (pictureLiList[parseInt(this.children[1].getAttribute("number"))].children)[1].style.color = "white";
    }
}

var poem = document.getElementById("poem");

poem.onmousemove = function(){
    poem.style["color"] = "rgb(75, 71, 71)";
}
poem.onmouseout = function(){
    poem.style["color"] = "white";
}

var it = document.getElementById("it");

it.onmousemove = function(){
    it.style["color"] = "black";
}
it.onmouseout = function(){
    it.style["color"] = "white";
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




