const regex = /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/g;

function addTask() {
	const reminderList = document.getElementById('reminder-list');
	let hour;
	while (!regex.test(hour)) {
		hour = prompt('Digite a hora escolhida! (hh:mm)');
	}
	const message = prompt('Digite sua mensagem: ');
	document.getElementById('hidden').style.display = 'none'
	reminderList.appendChild(createLi(hour, message));
}

function createLi(hour, message) {
	const createItem = document.createElement('li');
	createItem.classList.add('reminder-item');
	createItem.classList.add(`date-${date.getFullYear()}${date.getMonth()}`);
	createItem.innerHTML = `
  <div>${message}</div>
  <div>${hour}</div>
 `;
	createItem.classList;
	return createItem;
}

const date = new Date();

function updateDate() {
	document.getElementById("display-date").innerHTML = date.toLocaleDateString('pt-BR', { month: 'short', year: 'numeric' });

	tasksUl = document.querySelectorAll("#reminder-list li");
	let showNoTasks = true;
	for (let t = 0; t < tasksUl.length; t++) {
		if (tasksUl[t].classList.contains(`date-${date.getFullYear()}${date.getMonth()}`)) {
			tasksUl[t].style.display = "flex";
			showNoTasks = false;
		} else {
			tasksUl[t].style.display = "none";
		}
	}
	document.getElementById('hidden').style.display = (showNoTasks) ? ('flex') : ('none');

}

function addMonthInDate() {
	date.setMonth(date.getMonth() + 1);
	updateDate();
}

function minusMonthInDate() {
	date.setMonth(date.getMonth() - 1);
	updateDate();
}

function ordenaPorHora(arr) {
	let tasksOrdenadas = arr.sort((a, b) => a - b);
	return tasksOrdenadas;
}

function generateRandomTasks(n = 24) {
	const reminderList = document.getElementById('reminder-list');
	for (let i = 0; i < n; i++) {
		date.setMonth(Math.floor(Math.random() * 12));

		let hour = `${Math.floor(Math.random() * 24)}:${Math.floor(Math.random() * 60)}`;
		let message = `Mensagem nº${i} | ${date.toLocaleDateString('pt-BR', { month: 'short', year: 'numeric' })}`;
		reminderList.appendChild(createLi(hour, message));
	}
}

generateRandomTasks(24);
updateDate();