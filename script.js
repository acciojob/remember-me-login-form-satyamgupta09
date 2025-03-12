// document.getElementById('submit').addEventListener('click', function () {
// 	let name=document.getElementById('username').value;
// 	let pass=document.getElementById('password').value;
// 	let checked=document.getElementById('checkbox').checked;

// 	if(checked){
// 		localStorage.setItem("username",name);
// 		localStorage.setItem("password",pass);
// 		document.getElementById('existing').style.display="block";
// 	}
// 	else{
// 		localStorage.removeItem('username');
// 		localStorage.removeItem('password');
// 		document.getElementById('existing').style.display="none"
// 	}
	
// 	alert(`Logged in as ${name}`);
// })
document.getElementById("submit").addEventListener('click', function(event){
    event.preventDefault(); // Prevent form submission

    let isCheck = document.getElementById("checkbox").checked;
    let text = document.getElementById("username").value.trim();
    let pass = document.getElementById("password").value.trim();

    if (!text || !pass) {
        alert("Please enter a username and password.");
        return;
    }

    alert(`Logged in as ${text}`);

    if(isCheck){
        localStorage.setItem("username", text);
        localStorage.setItem("password", pass);
    } else {
        localStorage.removeItem("username");
        localStorage.removeItem("password");
    }

    let t = localStorage.getItem("username");
    let p = localStorage.getItem("password");

    if(t && p){
        document.getElementById("existing").style.display = "block";
        alert(`Logged in as ${t}`);
    }
});
