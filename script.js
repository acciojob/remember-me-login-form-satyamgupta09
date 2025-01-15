// //your JS code here. If required.
// let pass=document.getElementById("password");
// let name=document.getElementById("username");
// let flag=document.getElementById("checkbox");
// let sub=document.getElementById("submit");
// let whereToShow=document.getElementById("showHere");


// sub.addEventListener('click', function () {
// 	if (flag.checked) {
//         localStorage.setItem("pass", pass.value);
//         localStorage.setItem("name", name.value);
//     } else {
//         localStorage.removeItem("pass");
//         localStorage.removeItem("name");
//     }
	
// 	alert(`Logged in as ${name.value}.`);

// 	if(localStorage.getItem("pass") && localStorage.getItem("name")){
// 		whereToShow.innerHTML=`
// 	   <div>
// 	     <button id="existing">Logged in as ${localStorage.getItem("name")}.</button>
// 	   </div>
// 	   `
// 	}

// 	 document.getElementById("existing").addEventListener("click", function () { // Corrected typo here too
//             alert(`Logged in as ${localStorage.getItem("name")}.`);
//      });
// });
let pass = document.getElementById("password");
let name = document.getElementById("username");
let flag = document.getElementById("checkbox");
let sub = document.getElementById("submit");
let whereToShow = document.getElementById("showHere");

sub.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent form submission

    if (flag.checked) {
        localStorage.setItem("username", name.value); // Corrected key name
        localStorage.setItem("password", pass.value); // Corrected key name
    } else {
        localStorage.removeItem("username"); // Corrected key name
        localStorage.removeItem("password"); // Corrected key name
    }

    alert(`Logged in as ${name.value}.`);

    if (localStorage.getItem("username") && localStorage.getItem("password")) {
        whereToShow.innerHTML = `
        <div>
            <button id="existing">Login as existing user</button>
        </div>
        `;

        // Add event listener after the button is added to the DOM
        document.getElementById("existing").addEventListener("click", function () {
            alert(`Logged in as ${localStorage.getItem("username")}.`);
        });
    }
});
