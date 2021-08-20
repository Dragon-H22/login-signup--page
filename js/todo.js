function validateEmail(email) {
	const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
}

(function () {
	let currUser = localStorage.getItem('todoUser');
	if (!currUser) {
		window.location.href = '/5divs/login.html';
	}
	document.querySelector('.logout').addEventListener('click', function (e) {
		e.preventDefault();
		localStorage.removeItem("todoUser");
        window.location.href =  '/5divs/login.html';
	});
})();
