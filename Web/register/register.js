var flag = false;
		//提示信息部分（用户名和密码）
		var inpArr = document.getElementsByClassName("inp");
		var noticeArr = document.getElementsByClassName("notice");

		for(var i = 0;i < inpArr.length;i++){
			inpArr[i].onfocus = function(){
				promptMessage(this.getAttribute("placeholder"));
			}
			inpArr[i].onblur = function(){
				clearMessage(this.getAttribute("placeholder"));
			}
		}

		function promptMessage(placeholder){
			switch (placeholder){
				case "用户名":
					var message = "请输入4-10位用户名";
					noticeArr[0].innerHTML = message;
					break;
				case "密码":
					var message = "请输入6-12位密码";
					noticeArr[1].innerHTML = message;
					break;
				case "确认密码":
					noticeArr[2].innerHTML = null;
					break;
				case "手机号":
					var message = "请输入11位手机号";
					noticeArr[3].innerHTML = message;
					break;
				case "验证码":
					noticeArr[4].innerHTML = null;
					break;
			}
		}

		function clearMessage(placeholder){
			switch (placeholder){
				case "用户名":
					noticeArr[0].innerHTML = null;
				case "密码":
					noticeArr[1].innerHTML = null;
				case "确认密码":
					noticeArr[2].innerHTML = null;
				case "手机号":
					noticeArr[3].innerHTML = null;
				case "验证码":
					noticeArr[4].innerHTML = null;
			}
		}


		//判断输入的内容是否正确
		//不正确提示哪里不正确
		//正确提示登录成功
		var logIn = document.getElementsByClassName("btn")[0];

		logIn.onclick = function(){
			var inpArr = document.getElementsByClassName("inp");
			if(judgeUsername(inpArr[0].value) == false){
				var message = "用户名填写错误，请重新填写";
				noticeArr[0].innerHTML = message;
			}
			if(judgePassword(inpArr[1].value) == false){
				var message = "密码填写错误，请重新填写";
				noticeArr[1].innerHTML = message;
            }
            if(judgeRepassword(inpArr[1].value,inpArr[2].value) == false){
                var message = "密码不一致，请重新填写";
                noticeArr[2].innerHTML = message;
            }
            if(judgeCellNumber(inpArr[3].value) == false){
				var message = "手机号填写有误，请重新填写";
				noticeArr[3].innerHTML = message;
            }
			if(judjeCode(inpArr[4].value) == false){
				var message = "验证码填写错误，请重新填写";
				noticeArr[4].innerHTML = message;
			}
            if(judgeUsername(inpArr[0].value) == true &&
            judgePassword(inpArr[1].value) == true && 
            judgeRepassword(inpArr[1].value,inpArr[2].value) == true &&
            judgeCellNumber(inpArr[3].value) == true &&
            judjeCode(inpArr[4].value) == true){//登录成功
                flag = true;
				alert("注册成功");
				close();
			}
			
		}

		function judgeUsername(name){
			if(name.length>=4 && name.length<=10){
				return true;
			}
			else{
				return false;
			}
		}

		function judgePassword(password){
			if(password.length>=6 && password.length<=12){
				return true;
			}
			else{
				return false;
			}
        }
        
        function judgeRepassword(password,repassword){
            if(password === repassword){
                return true;
            }
            else{
                return false;
            }
        }

        function judgeCellNumber(cellNumber){
			if(cellNumber.length == 11){
				return true;
			}
			else{
				return false;
			}
        }
        

		function judjeCode(verificationCode){

			if(verificationCode == "11111"){
				return true;
			}
			else{
				return false;
			}
        }

var rt = document.getElementById("rt");
rt.onclick = function(){
	for(i = 0;i < inpArr.length;i++){
		inpArr[i].value = null;
	}
}
