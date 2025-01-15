document.getElementById('submit').addEventListener('click', function () {
	let name=document.getElementById('username').value;
	let pass=document.getElementById('password').value;
	let checked=document.getElementById('checkbox').checked;

	if(checked){
		localStorage.setItem("username",name);
		localStorage.setItem("password",pass);
		document.getElementById('existing').style.display="block";
	}
	else{
		localStorage.removeItem('username');
		localStorage.removeItem('password');
		document.getElementById('existing').style.display="none"
	}
	
	alert(`Logged in as ${username}`);
})