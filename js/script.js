/*
Milestone 1
Partendo dalla seguente struttura dati , mostriamo in pagina tutte le icone disponibili come da layout.

Milestone 2
Coloriamo le icone per 

Milestone 3
Creiamo una select con i tipi di icone e usiamola per filtrare le icone
*/

// FUNCTIONZ

//cicliamo nell'array e costriamo il nostro icon-template

const printIcons = (icons, targetElement) => {
	let iconsTemplate = "";
	icons.forEach((icon, index) => {
		let hasOffset = "";

		if (index == 0 || index % 5 == 0) {
			hasOffset = "offset-md-1";
		}

		iconsTemplate += `
        <div class="col-sm-4 col-md-2 ${hasOffset}">
            <div class="card">
                <div class="card-body">
                    <i class="${icon.family} ${icon.prefix}${icon.name} ${
			icon.type
		}"></i>
                    <p>${icon.name.toUpperCase()}</p>
                </div>
            </div>
        </div>
        `;
	});

	targetElement.innerHTML = iconsTemplate;
};

//stampiamo
const cards = document.querySelector("#icons .row");
printIcons(icons, cards);

//FILTER

const selectFilter = document.getElementById("select-filter");

selectFilter.addEventListener("change", () => {
	const filterValue = selectFilter.value;

	if (filterValue === "all") {
		printIcons(icons, cards);
		return;
	}

	const filteredIcons = icons.filter((icon) => filterValue === icon.type);
	printIcons(filteredIcons, cards);
});
