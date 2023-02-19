import "./ProductList.css";

const ProductList = ({products,onProductDelete}) => {

    return (
        <div>
            <ul>
                {
                    products.map(
                        (product) => (
                        <li key = {product.id}> {product.title} - {product.price}
                        <button onClick={ () => onProductDelete(product.id) }>Delete</button>
                        </li>                                             
                        )
                    )
                }
            </ul>
        </div>
    )
}

export default ProductList