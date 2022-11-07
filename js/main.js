const listaSpesa = ['Mele', 'Pere', 'Pane', 'Uova', 'Pasta', 'Latte'];
const listEl = document.getElementById('lista');
const addBtnEl = document.getElementById('addBtn');
const newItemEl = document.getElementById('newItem');

let i = 0;

//racchiudere in una funzione
function whileLoop() {
	while (i < listaSpesa.length) {
		const tableRow = document.createElement('tr');
		const tableItem = document.createElement('td');

		tableItem.innerHTML = listaSpesa[i];

		tableRow.append(tableItem);
		listEl.append(tableRow);
		i++;
	}
}

addBtnEl.addEventListener('click', function () {
	const itemToAdd = newItemEl.value;

	if (itemToAdd !== '') {
		listaSpesa.push(itemToAdd);
		whileLoop();
	}

	newItemEl.value = '';
});

whileLoop();
