//your JS code here. If required.
window.onload = function(){
let fontcolor = document.getElementById('fontcolor');
let fontSize = document.getElementById('fontsize');
	if(document.cookie){
		let cookies = document.cookie.split('; ');
		for(let i=0; i<cookies.length; i++){
			if(cookies[i].startsWith('fontcolor=')){
				fontcolor.value = cookies[i].split('=')[1];
			}else if(cookies[i].startsWith('fontSize=')){
				fontSize.value = cookies[i].split('=')[1];
			}
		}
	}
}


function input(e){
	e.preventDefault();
	let fontcolor = document.getElementById('fontcolor');
	let fontSize = document.getElementById('fontsize');

    document.cookie = `fontcolor = ${fontcolor.value}`; 
	document.cookie = `fontSize = ${fontSize.value}`;
	
}


const btn = document.querySelector('input[type="submit"]');
btn.addEventListener('click', input)
