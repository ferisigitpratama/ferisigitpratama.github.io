function checkLogin() {
	var username = document.getElementById("username").value;
	var password = document.getElementById("password").value;

	if (username === "admin" && password === "12345") {
		document.getElementById("message").innerHTML = "Username atau password benaarrr!";
	} else {
		document.getElementById("message").innerHTML = "Username atau password salah!";
	}
}
