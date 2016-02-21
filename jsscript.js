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
}


function show_hidden(index) {
	document.getElementById('ShowHidden').style.visibility="visible";

	switch(index) {
	case 0:
		document.getElementById('ShowHidden').innerHTML = "You are boss";

		rightHiddenWord.innerHTML="You are boss";
		rightHiddenWord.style.display="block";

		break;
	case 1:
		document.getElementById('ShowHidden').innerHTML = "You are VP";

		leftHiddenWord.innerHTML="You are vp";
		leftHiddenWord.style.display="block";

		break;
	case 2:
		document.getElementById('ShowHidden').innerHTML = "You are Director";

		leftHiddenWordMiddle.innerHTML="You are director";
		leftHiddenWordMiddle.style.display="block";

		break;	
	case 3:
		document.getElementById('ShowHidden').innerHTML = "You are PM";

		rightHiddenWord.innerHTML="You are pm";
		rightHiddenWord.style.display="block";

		break;	
	case 4:
		document.getElementById('ShowHidden').innerHTML = "You are one of us";

		rightHiddenWord.innerHTML="You are comrade";
		rightHiddenWord.style.display="block";

		break;			
	default:
		document.getElementById('ShowHidden').innerHTML = "You are One of us";
	}
}


function hide_hidden(index) {
	document.getElementById('ShowHidden').style.visibility="hidden";

	switch(index) {
	case 0:
		rightHiddenWord.style.display="none";
		break;
	case 1:
		leftHiddenWord.style.display="none";
		break;
	case 2:
		leftHiddenWordMiddle.style.display="none";
		break;	
	case 3:
		rightHiddenWord.style.display="none";
		break;	
	case 4:
		rightHiddenWord.style.display="none";
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
