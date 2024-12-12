// кнопка регистрации
document.getElementById('registerButton').addEventListener('click', event => {
	event.preventDefault() // остановка отправки формы

	// получаем данные
	const phone = document.getElementById('phoneUser').value.trim()
	const login = document.getElementById('loginUser').value.trim()
	const password = document.getElementById('passwordUser').value.trim()

	// проверяем заполнение
	if (!phone || !login || !password) {
		alert('Заполните все поля!')
		return
	}

	// проверяем логин
	if (localStorage.getItem(login)) {
		alert('Логин уже занят!')
		return
	}

	// сохраняем данные
	const userData = { phone, login, password }
	localStorage.setItem(login, JSON.stringify(userData))

	alert('Регистрация успешна!')

	// очищаем форму
	document.getElementById('phoneUser').value = ''
	document.getElementById('loginUser').value = ''
	document.getElementById('passwordUser').value = ''

	// перенаправление
	window.location.href = 'login.html'
})
