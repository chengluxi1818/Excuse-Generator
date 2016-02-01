function init() {
	document.getElementById('ShowHidden').style.visibility="hidden";
}

function show_hidden(index) {
	document.getElementById('ShowHidden').style.visibility="visible";

	switch(index) {
	case 0:
		document.getElementById('ShowHidden').innerHTML = "You are boss";
		document.getElementById('boss').style.backgroundColor = "black";
		document.getElementById('boss').style.color = "white";
		break;
	case 1:
		document.getElementById('ShowHidden').innerHTML = "You are VP";
		document.getElementById('vp').style.backgroundColor = "black";
		document.getElementById('vp').style.color = "white";
		break;
	case 2:
		document.getElementById('ShowHidden').innerHTML = "You are Director";
		document.getElementById('director').style.backgroundColor = "black";
		document.getElementById('director').style.color = "white";
		break;	
	case 3:
		document.getElementById('ShowHidden').innerHTML = "You are PM";
		document.getElementById('pm').style.backgroundColor = "black";
		document.getElementById('pm').style.color = "white";
		break;	
	case 4:
		document.getElementById('ShowHidden').innerHTML = "You are one of us";
		document.getElementById('commerad').style.backgroundColor = "black";
		document.getElementById('commerad').style.color = "white";		
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
		break;
	case 1:
		document.getElementById('vp').style.color="";
		document.getElementById('vp').style.backgroundColor="";
		break;
	case 2:
		document.getElementById('director').style.color="";
		document.getElementById('director').style.backgroundColor="";
		break;	
	case 3:
		document.getElementById('pm').style.color="";
		document.getElementById('pm').style.backgroundColor="";
		break;	
	case 4:
		document.getElementById('commerad').style.color="";
		document.getElementById('commerad').style.backgroundColor="";
		break;			
	default:
		document.getElementById('ShowHidden').innerHTML = "You are One of us";
	}


}

onload = init;