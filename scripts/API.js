let counter = 1;
const catalog = document.querySelector(".main__catalog");

export function getData() {
	fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${counter}`)
		.then((response) => response.json())
		.then((data) => {
			counter++;
			document.querySelector(".loader").style.display = "none";
			document.querySelector(".main__catalog").style.display = "flex";
			console.log(data);
			data.forEach((item) => {
				const catalog_item = document.createElement("li");
				const image = document.createElement("img");
				const title = document.createElement("h3");
				const price = document.createElement("p");
				const button = document.createElement("button");

				catalog_item.classList.add("main__catalog_item");
				image.classList.add("item__image");
				title.classList.add("item__title");
				price.classList.add("item__price");
				button.classList.add("item__button");
				// Атрибуты для работы с модальным окном Bootstrap
				// data-bs-toggle - атрибут для открытия модального окна
				// data-bs-target - атрибут для указания идентификатора модального окна
				button.setAttribute("data-bs-toggle", "modal");
				button.setAttribute("data-bs-target", "#modal");

				image.src = item.url;
				title.textContent = item.title.slice(0, 20);
				price.textContent = "100 ₽";
				button.textContent = "Добавить";

				catalog_item.append(image, title, price, button);
				catalog.append(catalog_item);
			});
		})
		.catch(() => {
			document.querySelector(".loader").style.display = "none";
			document.querySelector(".main__catalog").style.display = "flex";
			document.querySelector("#more").style.display = "none";
			const title = document.createElement("h2");
			title.textContent = "Произошла ошибка";
			document.querySelector(".main__catalog").style.display = "flex";
			const catalog_item = document.createElement("li");
			const image = document.createElement("img");
			const titleCard = document.createElement("h3");
			const price = document.createElement("p");
			const button = document.createElement("button");

			catalog_item.classList.add("main__catalog_item");
			image.classList.add("item__image");
			title.classList.add("item__title");
			price.classList.add("item__price");
			button.classList.add("item__button");
			// Атрибуты для работы с модальным окном Bootstrap
			// data-bs-toggle - атрибут для открытия модального окна
			// data-bs-target - атрибут для указания идентификатора модального окна
			button.setAttribute("data-bs-toggle", "modal");
			button.setAttribute("data-bs-target", "#modal");

			image.src = "./images/test.jpg";
			titleCard.textContent = "Test";
			price.textContent = "100 ₽";
			button.textContent = "Добавить";

			catalog_item.append(image, titleCard, price, button);
			catalog.append(catalog_item);
			catalog.append(title);
		});
}
