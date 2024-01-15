import axios from 'axios'
import React, { useEffect, useState } from 'react'

const AddProduct = () => {
const [form, setForm] = useState({
    brand:'',
    title:'',
    description:'',
    price:''
})
const handleChange= (e)=>{
setForm({...form, [e.target.name]: e.target.value})
}
const fetchAddProduct=async(form) => {
    const response=await axios.post('https://dummyjson.com/products/add',form)
    console.log(response.data);
}
// useEffect(() => {
//     console.log(form);
// }, [form])

  return (
    <div className='row justify-content-center'>
        <form className='d-flex flex-column col-8'>
            <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Brand</label>
            <input name='brand' value={form.brand} onChange={handleChange} type="text" className="form-control"/>
            </div>
            <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Title</label>
            <input name='title' value={form.title} onChange={handleChange} type="text" className="form-control" />
            </div>
            <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Description</label>
            <input name='description' value={form.description} onChange={handleChange} type="text" className="form-control" />
            </div>
            <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Price</label>
            <input name='price' value={form.price} onChange={handleChange} type="text" className="form-control" />
            <button onClick={()=> fetchAddProduct(form)} className='btn btn-primary my-5' type="button">Ekle</button>
            </div>
        </form>
  </div>
  )
}

export default AddProduct