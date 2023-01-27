/**
 * @author Peyman Naderi
 *
 * {@link https://gitgub.com/peymanath GitHub}
 *
 * @version 0.0.1
 *
 */

const searchInput = document.getElementById("searchInput");
const productCenter = document.getElementById("product-center");
let AllProduct = [];

const filter = {
	searchItem: "",
};

const requestAPI = () => {
	// Product API
	axios("https://fakestoreapi.com/products")
		.then(res => {
			AllProduct = [...res.data];

			renderProduct(AllProduct, filter);
		})
		.catch(err => console.log(err));
};

function renderProduct(_product, _filters) {
	const filterProducts = _product.filter(p => {
		return p.title.toLowerCase().includes(_filters.searchItem.toLowerCase());
	});
	ProductAPI(filterProducts);
}

const ProductAPI = _Products => {
	productCenter.innerHTML = "";
	_Products.map(item => {
		const Element = document.createElement("div");
		Element.classList.add("product-item");
		Element.innerHTML = `
			<div>
				<img src="${item.image}" />
			</div>
			<h2>${item.title}</h2>
		`;
		productCenter.append(Element);
	});
};

document.addEventListener("DOMContentLoaded", requestAPI);

searchInput.addEventListener("input", e => {
	filter.searchItem = e.target.value;

	renderProduct(AllProduct, filter);
});
