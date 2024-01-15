import axios from "axios";
import React from "react";
import {Link} from "react-router-dom";

export default function ProductCard(props) {
	const fetchDeleteProduct= async(id) => {
		const response = await axios.delete(`https://dummyjson.com/products/${id}`)
		console.log(response.data)
	}
	return (
		<div className="card">
			<img src={props.product.thumbnail} className="card-img-top" alt="..." />
			<div className="card-body">
				<h5 className="card-title">{props.product.title}</h5>
				<p className="card-text">{props.product.description}</p>
				<Link
					to={"/product-detail/" + props.product.id}
					className="btn btn-primary"
				>
					Details
				</Link>
				<button onClick={()=> fetchDeleteProduct(props.product.id)} className="btn btn-danger">Sil</button>
			</div>
		</div>
	);
}
