import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ProductDetails = () => {

    const{id}=useParams();
    const[product, setProduct]=useState();
    const fetchProduct=async(id) => {
        const response=await axios.get(`https://dummyjson.com/products/${id}`)
        setProduct(response.data)
        console.log(response.data);
    };
useEffect(() => {
fetchProduct(id)
}, [])

  return (<div>
    {product &&(<div className='row justify-content-center mt-5'>
        <div className="card col-12 col-md-8">
            <img style={{height:"400px",width:"100%"}} src={product.thumbnail} className="card-img-top" alt="..."/>
            <div className="card-body">
            <h5 className="card-title">{product.title}</h5>
            <p className="card-text">{product.description}</p>
            <p className="card-text">{product.price}</p>
            </div>
        </div>
        {/* <div style={{backgroundColor:"blue", padding:"20px", margin:"20px"}}>kklllls</div> */}
  </div>)}
  </div>
  )
}

export default ProductDetails