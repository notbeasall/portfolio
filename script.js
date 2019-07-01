window.addEventListener('load', function OnWindowLoaded() {
    // набор кнопок
    var elements = [
	"+", "-", "*", "/",
	"7", "8", "9", "backSpace",
	"4", "5", "6", "CE",
	"1", "2", "3", ".",
	"0", "="
    ];
 
    // форма калькулятора
    var calc = document.getElementById('calc');
 
    // Поле ввода
    var resultMonitor = document.getElementById('inputVal');
 
    // Создание кнопок на форме
    elements.forEach(function (sign) {
        var signElement = document.createElement('div');
        signElement.className = 'btn';
        signElement.innerHTML = sign;
        calc.appendChild(signElement);
    });
 
    // Создание обработчика на нажатие
    document.querySelectorAll('#calc-area .btn').forEach(function (button) {
    // Добавляет действие для кнопки
        button.addEventListener('click', onButtonClick);
    });
 
    // Описание функции клика по кнопке калькулятора
    function onButtonClick(memory) {
    // memory - MouseEvent (содержит информацию о клике)
        if (memory.target.innerHTML === "backSpace"){
      // Удаление последнего символа
            resultMonitor.innerHTML = resultMonitor.innerHTML.slice(0, -1);
        }
        else if (memory.target.innerHTML === 'CE') {
    // Очистить поле
            resultMonitor.innerHTML = '0';
        } else if (memory.target.innerHTML === '=') {
    // Вычисление значения
            resultMonitor.innerHTML = eval(resultMonitor.innerHTML);
        } else if (resultMonitor.innerHTML === '0') {
    // Если resultMonitor содержит только "0", то
    // стереть "0" и записать
    // значения кнопки в текстовое поле
            resultMonitor.innerHTML = memory.target.innerHTML;
        } else  {
    // Добавление значения кнопки в текстовое поле
            resultMonitor.innerHTML += memory.target.innerHTML;
        } 
        

    }
});