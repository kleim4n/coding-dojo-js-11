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
	updateDate()
}

function createLi(hour, message) {
	var message2 = message.replace(/ /g, "_");
	const createItem = document.createElement('li');
	const hour2 = hour.replace(':', '');
	createItem.classList.add(hour2);
	createItem.classList.add(`date-${date.getFullYear()}${date.getMonth()}`);
	createItem.classList.add(hour);
	createItem.classList.add(message2);
	createItem.classList.add('reminder-item');
	
	createItem.innerHTML = `
  <div>${message}</div>
  <div>${hour}</div>
 `;
	createItem.classList;
	return createItem;
}

const date = new Date();

function updateDate() {
	
	tasksUl = document.querySelectorAll("#reminder-list li");

	var sorted = Array.from(tasksUl);

	var removeList = document.getElementById('reminder-list');



	while (removeList.firstChild) {
		removeList.removeChild(removeList.firstChild);
	  }
	
	for (let t = 0; t < sorted.length; t++) {
		for (let j = 0; j < sorted.length - t - 1; j++) {
		  if (parseInt(sorted[j].classList[0]) > parseInt(sorted[j + 1].classList[0])) {
			let temp = sorted[j];
			sorted[j] = sorted[j + 1];
			sorted[j + 1] = temp;
		  }/*  else {
			reminderList.appendChild();
		  } */
		}
	  }

	  const reminderList = document.getElementById('reminder-list');
	  for (let t = 0; t < sorted.length; t++) {
		console.log(parseInt(sorted[t].classList[0])>= 1)
		console.log(sorted[t].classList)
		if (parseInt(sorted[t].classList[0])>= 1) {
			var message = sorted[t].classList[1]
			reminderList.appendChild(createLi2(sorted[t].classList[2],(sorted[t].classList[3]), message));;
		  }	else 
		  reminderList.appendChild(createLi3());;
	  }

	  function createLi3() {
		const createItem = document.createElement('li');
		createItem.setAttribute("id", "hidden");
		createItem.classList.add('reminder-item');
		
		
		
		createItem.innerHTML = `
	  <div>Nenhum lembrete cadastrado ainda</div>
	 `;
		createItem.classList;
		return createItem;
	}

	  function createLi2(hour, message, date) {
		message2 = message.replace(/_/g, " ");
		const createItem = document.createElement('li');
		const hour2 = hour.replace(':', '');
		createItem.classList.add(hour2);
		createItem.classList.add(date);
		createItem.classList.add(hour);
		createItem.classList.add(message);
		createItem.classList.add('reminder-item');
		
		
		
		createItem.innerHTML = `
	  <div>${message2}</div>
	  <div>${hour}</div>
	 `;
		createItem.classList;
		return createItem;
	}
 
	  document.getElementById("display-date").innerHTML = date.toLocaleDateString('pt-BR', { month: 'short', year: 'numeric' });

	  tasksUl = document.querySelectorAll("#reminder-list li");
	  let showNoTasks = true;
	  for (let t = 0; t < tasksUl.length; t++) {
		  if (tasksUl[t].classList.contains(`date-${date.getFullYear()}${date.getMonth()}`)) {
			  tasksUl[t].style.display = "flex";
			  showNoTasks = false;
			  console.log(tasksUl[t])
		  } else {
			console.log(tasksUl[t])
			  tasksUl[t].style.display = "none";
		  }
	  }

	document.getElementById('hidden').style.display = (showNoTasks) ? ('flex') : ('none');

	
	

	/* console.log(tasksUl) */
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
		let intMinuto = Math.floor(Math.random() * 60);
		let strMinuto = `${(intMinuto < 10) ? ("0" + intMinuto) : intMinuto}`;

		let intHora = Math.floor(Math.random() * 24);
		let strHora = `${(intHora < 10) ? ("0" + intHora) : intHora}`;

		let hour = `${intHora}:${intMinuto}`;
		let message = `Mensagem nº${i} | ${date.toLocaleDateString('pt-BR', { month: 'short', year: 'numeric' })}`;
		reminderList.appendChild(createLi(hour, message));
	}
}

//generateRandomTasks(24);
updateDate();