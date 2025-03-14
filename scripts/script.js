import "./header.js";
import "./table.js";
import { page_load_time } from "./loadtime.js";
import { getData } from "./API.js";

window.onload = () => {
	setTimeout(() => {
		getData();
		page_load_time();
	}, 2000);
};

document.querySelector("#more").addEventListener("click", () => {
	getData();
});

const toggle_code = document.querySelector("#code");
const toggle_table = document.querySelector("#table");
const toggle_ascci = document.querySelector("#ascii");

const code = document.querySelector(".main__code");
code.style.display = "none";

const table = document.querySelector(".main__table");
table.style.display = "none";

const ascci = document.querySelector(".main__ascii");
ascci.style.display = "none";

let isCodeOpen = false;
let isTableOpen = false;
let isAscciOpen = false;

toggle_code.addEventListener("click", () => {
	if (isCodeOpen) {
		code.style.display = "none";
		toggle_code.textContent = "Показать код";
		isCodeOpen = false;
	} else {
		code.style.display = "block";
		toggle_code.textContent = "Скрыть код";
		isCodeOpen = true;
	}
});

toggle_table.addEventListener("click", () => {
	if (isTableOpen) {
		table.style.display = "none";
		toggle_table.textContent = "Показать таблицу";
		isTableOpen = false;
	} else {
		table.style.display = "grid";
		toggle_table.textContent = "Скрыть таблицу";
		isTableOpen = true;
	}
});

toggle_ascci.addEventListener("click", () => {
	if (isAscciOpen) {
		ascci.style.display = "none";
		toggle_ascci.textContent = "Показать ASCII";
		isAscciOpen = false;
	} else {
		ascci.style.display = "block";
		toggle_ascci.textContent = "Скрыть ASCII";
		isAscciOpen = true;
	}
});
