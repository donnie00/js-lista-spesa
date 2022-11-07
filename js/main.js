const listaSpesa = ['Mele', 'Pere', 'Pane', 'Uova', 'Pasta', 'Latte'];
const listEl = document.getElementById('lista');

let i = 0;

while (i < listaSpesa.length) {
	const listItem = document.createElement('li');

	listItem.innerHTML = listaSpesa[i];
	listEl.append(listItem);
	i++;
}
