import { useState} from "react";
import { useNavigate } from "react-router-dom";
import "./AddProduct.css";

const AddProduct = () => {

    const [title,setTitle] = useState('');
    const [price,setPrice] = useState('');
    const navigate = useNavigate();

    const addProduct = async(e) => {
        e.preventDefault();
        const product = {title,price};
        await fetch('http://localhost:8080/products',{
            method: "POST",
            body: JSON.stringify(product),
            headers: {
                'Content-type':'application/json'
            }
        });
        navigate("/");
    }

    return (
        <div>
            <h2>Add Product</h2>
            <form class = "mt-5 ml-3 mr-5" onSubmit={addProduct}>
                <div class="field">
                    <label class="label">Title</label>
                    <div class="control">
                        <input class="input" type="text" placeholder="Enter title" onChange={(e) => setTitle(e.target.value)}></input>
                    </div>
                </div>

                <div class="field">
                    <label class="label">Price</label>
                    <div class="control">
                        <input class="input" type="number" placeholder="Enter price" onChange={(e) => setPrice(e.target.value)}></input>
                    </div>
                </div>

                <div class="field is-grouped">
                    <div class="control">
                        <button class="button is-link">Add product</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default AddProduct