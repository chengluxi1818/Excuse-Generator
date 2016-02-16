var parent = document.getElementsByClassName('parent')[0];

var showHidden = document.getElementById('ShowHidden');

var boss = document.getElementById('boss');
var vp = document.getElementById('vp');
var director = document.getElementById('director');
var pm = document.getElementById('pm');
var comrade = document.getElementById('comrade');

var bossPath = document.getElementsByClassName('bossPath')[0];
var vpPath = document.getElementsByClassName('vpPath')[0];
var directorPath = document.getElementsByClassName('directorPath')[0];
var pmPath = document.getElementsByClassName('pmPath')[0];
var comradePath = document.getElementsByClassName('comradePath')[0];

var leftHiddenWord = document.getElementsByClassName('leftHiddenWord')[0];
var leftHiddenWordMiddle = document.getElementsByClassName('leftHiddenWordMiddle')[0];
var rightHiddenWord = document.getElementsByClassName('rightHiddenWord')[0];

/*--------------------------------------------------------------------------*/
var bossPage = document.getElementsByClassName('bossPage')[0];

function init() {
	parent.style.display="block";
	bossPage.style.display="none";
	document.getElementById('ShowHidden').style.visibility="hidden";

	bossPath.style.visibility="hidden";
	vpPath.style.visibility="hidden";
	directorPath.style.visibility="hidden";
	pmPath.style.visibility="hidden";
	comradePath.style.visibility="hidden";

	leftHiddenWord.style.visibility="hidden";
	leftHiddenWordMiddle.style.visibility="hidden";
	rightHiddenWord.style.visibility="hidden";
}


function show_hidden(index) {
	document.getElementById('ShowHidden').style.visibility="visible";

	switch(index) {
	case 0:
		document.getElementById('ShowHidden').innerHTML = "You are boss";

		boss.style.backgroundColor = "black";
		boss.style.color = "white";

		document.getElementsByClassName('bossPath')[0].style.visibility="visible";

		rightHiddenWord.innerHTML="You are boss";
		rightHiddenWord.style.visibility="visible";

		break;
	case 1:
		document.getElementById('ShowHidden').innerHTML = "You are VP";
		vp.style.backgroundColor = "black";
		vp.style.color = "white";

		vpPath.style.visibility="visible";

		leftHiddenWord.innerHTML="You are vp";
		leftHiddenWord.style.visibility="visible";

		break;
	case 2:
		document.getElementById('ShowHidden').innerHTML = "You are Director";
		director.style.backgroundColor = "black";
		director.style.color = "white";

		directorPath.style.visibility="visible";

		leftHiddenWordMiddle.innerHTML="You are director";
		leftHiddenWordMiddle.style.visibility="visible";

		break;	
	case 3:
		document.getElementById('ShowHidden').innerHTML = "You are PM";
		pm.style.backgroundColor = "black";
		pm.style.color = "white";

		pmPath.style.visibility="visible";

		rightHiddenWord.innerHTML="You are pm";
		rightHiddenWord.style.visibility="visible";

		break;	
	case 4:
		document.getElementById('ShowHidden').innerHTML = "You are one of us";
		comrade.style.backgroundColor = "black";
		comrade.style.color = "white";

		comradePath.style.visibility="visible";

		rightHiddenWord.innerHTML="You are comrade";
		rightHiddenWord.style.visibility="visible";

		break;			
	default:
		document.getElementById('ShowHidden').innerHTML = "You are One of us";
	}
}


function hide_hidden(index) {
	document.getElementById('ShowHidden').style.visibility="hidden";

	switch(index) {
	case 0:
		boss.style.color="";
		boss.style.backgroundColor="";

		document.getElementsByClassName('bossPath')[0].style.visibility="hidden";
		rightHiddenWord.style.visibility="hidden";

		break;
	case 1:
		vp.style.color="";
		vp.style.backgroundColor="";

		vpPath.style.visibility="hidden";
		leftHiddenWord.style.visibility="hidden";

		break;
	case 2:
		director.style.color="";
		director.style.backgroundColor="";

		directorPath.style.visibility="hidden";
		leftHiddenWordMiddle.style.visibility="hidden";
		break;	
	case 3:
		pm.style.color="";
		pm.style.backgroundColor="";

		pmPath.style.visibility="hidden";
		rightHiddenWord.style.visibility="hidden";
		break;	
	case 4:
		comrade.style.color="";
		comrade.style.backgroundColor="";

		comradePath.style.visibility="hidden";
		rightHiddenWord.style.visibility="hidden";
		break;			
	default:
		showHidden.innerHTML = "You are One of us";
	}
}

function goto_bossPage() {
	parent.style.display="none";
	bossPage.style.display="block";
}
onload = init;
