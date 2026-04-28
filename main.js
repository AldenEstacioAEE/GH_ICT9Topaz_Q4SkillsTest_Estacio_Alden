//the three strike system being implemented
let attempts = 3; 

function log_in() {
    let user = document.getElementById("user").value.trim();
    let pass = document.getElementById("pass").value.trim();
    let btn = document.getElementById("loginBtn");
    let msg = document.getElementById("message");

if (user === "usern" && pass === "passw") {
    alert("Access granted");
    attempts = 3; 
    msg.innerHTML = "";
    window.location.href = "notebook.html"; // Redirect to notebook page
} else {
    attempts--; 

    if (attempts > 0) {
        alert("Access denied. Attempts left: " + attempts);
 msg.innerHTML = "Attempts left: " + attempts;
} else {
 alert("Too many attempts. Access permanently denied.");
msg.innerHTML = "ACCOUNT LOCKED";
btn.disabled = true; 
btn.innerHTML = "Locked";
 }
 }
}