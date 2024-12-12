'use strict'

// калькулятор
// стоимость за м^2
const price1 = 2400
const price2 = 800
const price3 = 2000

function updateValue(e) {
	const mat = parseFloat(document.getElementById(e.id).value) || 0 // поле ввода c защитой от ввода букв
	const itog = document.getElementById(`itog${e.id[e.id.length - 1]}`) // блок вывода
	const price = e.id === 'mat1' ? price1 : e.id === 'mat2' ? price2 : price3 // выбор цены по id
	const calc = price * mat // вычисление итоговой стоимости
	itog.innerHTML = 'Итого: ' + calc + ' ₽' // вывод результата
}
