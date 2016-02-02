/*var showHidden = document.getElementById('ShowHidden');

var boss = document.getElementById('boss');
var vp = document.getElementById('vp');
var director = document.getElementById('director');
var pm = document.getElementById('pm');
var comrade = document.getElementById('comrade');

var bossPath = document.getElementsByClassName('bossPath')[0];
var vpPath = document.getElementsByClassName('vpPath')[0];
var directorPath = document.getElementsByClassName('directorPath')[0];
var pmPath = document.getElementsByClassName('pmPath')[0];
var comradePath = document.getElementsByClassName('comradePath')[0];*/


function init() {

	document.getElementById('ShowHidden').style.visibility="hidden";

	document.getElementsByClassName('bossPath')[0].style.visibility="hidden";
	document.getElementsByClassName('vpPath')[0].style.visibility="hidden";
	document.getElementsByClassName('directorPath')[0].style.visibility="hidden";
	document.getElementsByClassName('pmPath')[0].style.visibility="hidden";
	document.getElementsByClassName('comradePath')[0].style.visibility="hidden";

	document.getElementsByClassName('leftHiddenWord')[0].style.visibility="hidden";
	document.getElementsByClassName('rightHiddenWord')[0].style.visibility="hidden";
}

function show_hidden(index) {
	document.getElementById('ShowHidden').style.visibility="visible";

	switch(index) {
	case 0:
		document.getElementById('ShowHidden').innerHTML = "You are boss";

		document.getElementById('boss').style.backgroundColor = "black";
		document.getElementById('boss').style.color = "white";

		document.getElementsByClassName('bossPath')[0].style.visibility="visible";

		document.getElementsByClassName('rightHiddenWord')[0].innerHTML="You are boss";
		document.getElementsByClassName('rightHiddenWord')[0].style.visibility="visible";

		break;
	case 1:
		document.getElementById('ShowHidden').innerHTML = "You are VP";
		document.getElementById('vp').style.backgroundColor = "black";
		document.getElementById('vp').style.color = "white";

		document.getElementsByClassName('vpPath')[0].style.visibility="visible";

		document.getElementsByClassName('leftHiddenWord')[0].innerHTML="You are vp";
		document.getElementsByClassName('leftHiddenWord')[0].style.visibility="visible";

		break;
	case 2:
		document.getElementById('ShowHidden').innerHTML = "You are Director";
		document.getElementById('director').style.backgroundColor = "black";
		document.getElementById('director').style.color = "white";

		document.getElementsByClassName('directorPath')[0].style.visibility="visible";

		document.getElementsByClassName('leftHiddenWord')[0].innerHTML="You are director";
		document.getElementsByClassName('leftHiddenWord')[0].style.visibility="visible";

		break;	
	case 3:
		document.getElementById('ShowHidden').innerHTML = "You are PM";
		document.getElementById('pm').style.backgroundColor = "black";
		document.getElementById('pm').style.color = "white";

		document.getElementsByClassName('pmPath')[0].style.visibility="visible";

		document.getElementsByClassName('rightHiddenWord')[0].innerHTML="You are pm";
		document.getElementsByClassName('rightHiddenWord')[0].style.visibility="visible";

		break;	
	case 4:
		document.getElementById('ShowHidden').innerHTML = "You are one of us";
		document.getElementById('comrade').style.backgroundColor = "black";
		document.getElementById('comrade').style.color = "white";

		document.getElementsByClassName('comradePath')[0].style.visibility="visible";

		document.getElementsByClassName('rightHiddenWord')[0].innerHTML="You are comrade";
		document.getElementsByClassName('rightHiddenWord')[0].style.visibility="visible";

		break;			
	default:
		document.getElementById('ShowHidden').innerHTML = "You are One of us";
	}
}

function hide_hidden(index) {
	document.getElementById('ShowHidden').style.visibility="hidden";

	switch(index) {
	case 0:
		document.getElementById('boss').style.color="";
		document.getElementById('boss').style.backgroundColor="";

		document.getElementsByClassName('bossPath')[0].style.visibility="hidden";
		document.getElementsByClassName('rightHiddenWord')[0].style.visibility="hidden";

		break;
	case 1:
		document.getElementById('vp').style.color="";
		document.getElementById('vp').style.backgroundColor="";

		document.getElementsByClassName('vpPath')[0].style.visibility="hidden";
		document.getElementsByClassName('leftHiddenWord')[0].style.visibility="hidden";

		break;
	case 2:
		document.getElementById('director').style.color="";
		document.getElementById('director').style.backgroundColor="";

		document.getElementsByClassName('directorPath')[0].style.visibility="hidden";
		document.getElementsByClassName('leftHiddenWord')[0].style.visibility="hidden";
		break;	
	case 3:
		document.getElementById('pm').style.color="";
		document.getElementById('pm').style.backgroundColor="";

		document.getElementsByClassName('pmPath')[0].style.visibility="hidden";
		document.getElementsByClassName('rightHiddenWord')[0].style.visibility="hidden";
		break;	
	case 4:
		document.getElementById('comrade').style.color="";
		document.getElementById('comrade').style.backgroundColor="";

		document.getElementsByClassName('comradePath')[0].style.visibility="hidden";
		document.getElementsByClassName('rightHiddenWord')[0].style.visibility="hidden";
		break;			
	default:
		showHidden.innerHTML = "You are One of us";
	}


}

onload = init;