//your JS code here. If required.
function input(e){
	e.preventDefault();
	let fontcolor = document.getElementById('fontcolor');
	let fontSize = document.getElementById('fontsize');
	if(document.cookie){
		let cookies = document.cookie.split('; ');
		for(let i=0; i<cookies.length; i++){
			if(cookies[i].startsWith('color=')){
				fontcolor.value = cookies[i].split('=')[1];
			}else if(cookies[i].startsWith('size=')){
				fontSize.value = cookies[i].split('=')[1];
			}
		}

	}
    document.cookie = `color = ${fontcolor.value}`; 
	document.cookie = `size = ${fontSize.value}`;
	
}


const btn = document.querySelector('input[type="submit"]');
	btn.addEventListener('click', input)