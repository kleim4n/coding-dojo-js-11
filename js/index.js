function addTask() {
	const reminderList = document.getElementById('reminder-list');
	const hour = prompt('Digite a hora escolhida!');
	const message = prompt('Digite sua mensagem: ');
	reminderList.appendChild(createLi(hour, message));
}
function createLi(hour, message) {
	const createItem = document.createElement('li');
	createItem.classList.add('reminder-item');
	createItem.innerHTML = `
  <div>${message}</div>
  <div>${hour}</div>
 `;
	createItem.classList;
	return createItem;
}
