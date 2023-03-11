import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./EditProduct.css";

const EditProduct = () => {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        getProductById();
    }, []);

    const getProductById = async () => {
        const response = await fetch(`http://localhost:8080/products/${id}`);
        const data = await response.json();
        setTitle(data.title);
        setPrice(data.price);
    }

    const editProduct = async (e) => {
        e.preventDefault();
        const product = { title, price };
        await fetch(`http://localhost:8080/products/${id}`, {
            method: "PUT",
            body: JSON.stringify(product),
            headers: {
                'Content-type': 'application/json'
            }
        });
        navigate("/");
    }

    return (
        <div>
            <h2>Edit Product</h2>
            <form class="mt-5 ml-3 mr-5" onSubmit={editProduct}>
                <div class="field">
                    <label class="label">Title</label>
                    <div class="control">
                        <input class="input" type="text" placeholder="Enter title" value={title} onChange={(e) => setTitle(e.target.value)}></input>
                    </div>
                </div>

                <div class="field">
                    <label class="label">Price</label>
                    <div class="control">
                        <input class="input" type="number" placeholder="Enter price" value={price} onChange={(e) => setPrice(e.target.value)}></input>
                    </div>
                </div>

                <div class="field is-grouped">
                    <div class="control">
                        <button class="button is-link">Edit product</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default EditProduct