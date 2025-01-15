//your JS code here. If required.
let pass=document.getElementById("password");
let name=document.getElementById("username");
let flag=document.getElementById("checkbox");
let sub=document.getElementById("submit");
let whereToShow=document.getElementById("showHere");


sub.addEventListener('click', function () {
	if (flag.checked) {
        localStorage.setItem("pass", pass.value);
        localStorage.setItem("name", name.value);
    } else {
        localStorage.removeItem("pass");
        localStorage.removeItem("name");
    }
	
	alert(`Logged in as ${name.value}.`);

	if(localStorage.getItem("pass") && localStorage.getItem("name")){
		whereToShow.innerHTML=`
	   <div>
	     <button id="existing">Logged in as ${localStorage.getItem("name")}.</button>
	   </div>
	   `
	}

	 document.getElementById("existing").addEventListener("click", function () { // Corrected typo here too
            alert(`Logged in as ${localStorage.getItem("name")}.`);
     });
});
