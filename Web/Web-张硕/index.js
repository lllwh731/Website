
function getStyle(obj, attr){
	if(obj.currentStyle){
		return obj.currentStyle[attr];
	} else {
		return getComputedStyle(obj, null)[attr];
	}
}
function animate(obj,json,callback){
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		var isStop = true;
		for(var attr in json){
			var now = 0;
			if(attr == 'opacity'){
				now = parseInt(getStyle(obj,attr)*100);
			}else{
				now = parseInt(getStyle(obj,attr));
			}
			var speed = (json[attr] - now) / 8;
			speed = speed>0?Math.ceil(speed):Math.floor(speed);
			var cur = now + speed;
			if(attr == 'opacity'){
				obj.style[attr] = cur / 100;
			}else{
				obj.style[attr] = cur + 'px';
			}
			if(json[attr] !== cur){
				isStop = false;
			}
		}
		if(isStop){
			clearInterval(obj.timer);
			callback&&callback();
		}
	}, 30)
}

//-------------------------------------------------------------------------------
var navList = document.getElementById("nav").children;
var slider  = document.getElementById("slider");
var box = document.getElementById("box");
var list = document.getElementById("list").children;
var img1 = document.getElementById("img1");
var img2 = document.getElementById("img2");
var img3 = document.getElementById("img3");
var img4 = document.getElementById("img4");
var img5 = document.getElementById("img5");
var img6 = document.getElementById("img6");
var img7 = document.getElementById("img7");
var img8 = document.getElementById("img8");
var img9 = document.getElementById("img9");
var img10 = document.getElementById("img10");
var img11 = document.getElementById("img11");
var img12 = document.getElementById("img12");
var img13 = document.getElementById("img13");
var img14 = document.getElementById("img14");
var img15 = document.getElementById("img15");
var img16 = document.getElementById("img16");
var index1 = 0;
var index = 1;
var isMoving = false;
function next(){
	if(isMoving){
		return;
	}
	isMoving = true;
	index++;
	changelist();
	animate(slider,{left:-1000*index},function(){
		if(index === 6){
			slider.style.left = "-1000px";
			index = 1;
		}
		isMoving = false;
	});
}
box.onmousemove = function(){
	clearInterval(timer);
}
box.onmouseout = function(){
	timer = setInterval(next,3000);

}
var timer = setInterval(next,3000);
function changelist(){
	for(var i=0;i<list.length;i++){
		list[i].className = "";
	}
	if(index===6){
		list[0].className = "listac";
	}else if(index === 0){
		list[4].className = "listac";
	}else{
		list[index-1].className = "listac";
	}
} 
for(var i=0;i<list.length;i++){
	list[i].idx = i;
	list[i].onclick = function(){
		index = this.idx+1;
		changelist();
		animate(slider,{left:-1000*index});
	}

}

for(var i =0;i<navList.length;i++){
    navList[i].idx = i;
    navList[i].onclick = function(){
        index1 = this.idx;
        for(var i=0;i<navList.length;i++){
            navList[i].className = "";
        }
		navList[index1].className = "active";
		if(index1 == 0){
			show();
		}else if(index1 == 1){
			unshow();
			img8.style.display = "block";
			img6.style.display = "block";
			img7.style.display = "block";
		}else if(index1 == 2){
			unshow();
			img12.style.display = "block";
			img13.style.display = "block";
			img14.style.display = "block";
		}else if(index1 == 3){
			unshow();
			img1.style.display = "block";
			img2.style.display = "block";
			img3.style.display = "block";
			img4.style.display = "block";
			img5.style.display = "block";
		}else if(index1 == 4){
			unshow();
			img16.style.display = "block";
			img15.style.display = "block";
		}else if(index1 == 5){
			unshow();
			img9.style.display = "block";
			img10.style.display = "block";
			img11.style.display = "block";
		}
    } 
}
function show(){
	img1.style.display = "block";
	img2.style.display = "block";
	img3.style.display = "block";
	img4.style.display = "block";
	img5.style.display = "block";
	img6.style.display = "block";
	img7.style.display = "block";
	img8.style.display = "block";
	img9.style.display = "block";
	img10.style.display = "block";
	img11.style.display = "block";
	img12.style.display = "block";
	img13.style.display = "block";
	img14.style.display = "block";
	img15.style.display = "block";
	img16.style.display = "block";
}
function unshow(){
	img1.style.display = "none";
	img2.style.display = "none";
	img3.style.display = "none";
	img4.style.display = "none";
	img5.style.display = "none";
	img6.style.display = "none";
	img7.style.display = "none";
	img8.style.display = "none";
	img9.style.display = "none";
	img10.style.display = "none";
	img11.style.display = "none";
	img12.style.display = "none";
	img13.style.display = "none";
	img14.style.display = "none";
	img15.style.display = "none";
	img16.style.display = "none";
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

