// получаем логин авторизованного пользователя
const currentUser = localStorage.getItem('currentUser')

if (currentUser) {
	// отображаем логин пользователя
	document.getElementById('userLogin').textContent = currentUser
} else {
	// если пользователь не авторизован, перенаправляем его на страницу входа
	alert('Вы не авторизованы!')
	window.location.href = 'login.html'
}

// кнопка выхода с аккаунта
// обработчик для кнопки выхода
document.getElementById('logoutButton').addEventListener('click', () => {
	// удаляем данные авторизации
	localStorage.removeItem('currentUser')

	// перенаправляем на страницу входа
	window.location.href = 'login.html'
})
