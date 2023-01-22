/**
 * @author Peyman Naderi
 *
 * {@link https://gitgub.com/peymanath GitHub}
 *  
 * @version 0.0.1
 *
 */


// Product API
axios("https://fakestoreapi.com/products")
	.then(res => {
		ProductAPI([...res.data]);
	})
	.catch(err => console.log(err));

    
const ProductAPI = _Products => {
	_Products.map(item => {
		// document.getElementById("root").append(item.title);
	});
};
