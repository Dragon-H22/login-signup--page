function validateEmail(email) {
	const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
}

(function () {
	let currUser = localStorage.getItem('todoUser');
	if (currUser) {
		window.location.href = '/5divs/todo.html';
	}
	document.querySelector('.login').addEventListener('click', function (e) {
		e.preventDefault();
		let email = document.querySelector('.email').value,
			pass = document.querySelector('.pass').value;

		if (!email || !pass) {
			alert('Please fill all fields!');
		} else if (!validateEmail(email)) {
			alert('Please enter a valid email!');
		} else {
			let users = localStorage.getItem('todoUsers');
			if (users) {
				try {
					users = JSON.parse(users);
				} catch (error) {
					users = [];
				}
			} else users = [];
			let loggedUser = users.find((user) => user.email == email.toLowerCase() && pass == user.password);
			if (!loggedUser) {
				alert('Invalid email or password!');
			} else {
				localStorage.setItem('todoUser', JSON.stringify(loggedUser));
				document.querySelector('.email').value = '';
				document.querySelector('.pass').value = '';
				alert('You have successfully logged-in!');
				window.location.href = '/5divs/todo.html';
			}
		}
	});
})();
