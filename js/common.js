/*获取滚动高度*/

function getscrolltop(){
	return document.documentElement.scrollTop||document.body.scrollTop;
}


/*获取元素在浏览器中的位置*/

function geteleposition(ele){
	var distance = 0
	while(ele){
		distance += ele.offsetTop;
		ele = ele.offsetParent
	}
	return distance
}

/*获取窗口的高度*/

function getwindowheight(){
	return document.documentElement.clientHeight;
}
