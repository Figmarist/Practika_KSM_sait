// // обработчик для кнопки входа
// document.getElementById('loginButton').addEventListener('click', event => {
// 	event.preventDefault() // остановка отправки формы

// 	// получаем данные из полей ввода
// 	const login = document.getElementById('loginInput').value.trim()
// 	const password = document.getElementById('passwordInput').value.trim()

// 	// проверяем заполнение
// 	if (!login || !password) {
// 		alert('Заполните все поля!')
// 		return
// 	}

// 	// проверяем наличие пользователя
// 	const userData = localStorage.getItem(login)
// 	if (!userData) {
// 		alert('Пользователь не найден!')
// 		return
// 	}

// 	// проверяем пароль
// 	const parsedData = JSON.parse(userData)
// 	if (parsedData.password !== password) {
// 		alert('Неверный пароль!')
// 		return
// 	}

// 	// успешная авторизация
// 	alert('Успешный вход!')
// 	// перенаправляем пользователя, если нужно
// 	window.location.href = 'trackOrder.html' // пример перенаправления
// })
// обработчик для кнопки входа
document.getElementById('loginButton').addEventListener('click', event => {
	event.preventDefault() // остановка отправки формы

	// получаем данные из полей ввода
	const login = document.getElementById('loginInput').value.trim()
	const password = document.getElementById('passwordInput').value.trim()

	// проверяем заполнение
	if (!login || !password) {
		alert('Заполните все поля!')
		return
	}

	// проверяем наличие пользователя
	const userData = localStorage.getItem(login)
	if (!userData) {
		alert('Пользователь не найден!')
		return
	}

	// проверяем пароль
	const parsedData = JSON.parse(userData)
	if (parsedData.password !== password) {
		alert('Неверный пароль!')
		return
	}

	// успешная авторизация
	alert('Успешный вход!')

	// сохраняем логин авторизованного пользователя
	localStorage.setItem('currentUser', login)

	// перенаправляем пользователя
	window.location.href = 'trackOrder.html' // пример перенаправления
})
