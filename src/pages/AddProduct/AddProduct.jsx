import React, { useState } from 'react'
import './AddProduct.css'
import data from '../../Data/Data'
import ViewMainImage from '../../components/ViewImage/ViewMainImage'
import ViewAllImages from '../../components/ViewImage/ViewAllImages'
import category from '../../Data/Category'

function AddProduct() {
    const [input, setInput] = useState({ title: "", description: "", price: "", discount: "", quantity: "", gender: "", category: "data.Category" })
    let handleChange = (e) => {
        const { name, value } = e.target;
        setInput(prev => ({ ...prev, [name]: value }))
    }
  return (
    <div id="addProductContainer">
            <div id="addProductBox">
                <form action="">
                    <ViewMainImage data={data}/>
                    <ViewAllImages data={data}/>
                    <div className="inputBox">
                        <label htmlFor="title">Title</label>
                        <input type="text" className='inputs' name='title' onChange={(e) => { handleChange(e) }} value={input.title} />
                    </div>
                    <div className="inputBox">
                        <label htmlFor="description">Description</label>
                        <input type="text" className='inputs' name='description' onChange={(e) => { handleChange(e) }} value={input.description} />
                    </div>
                    <div className="inputBox">
                        <label htmlFor="price">Price</label>
                        <input type="number" className='inputs' name='price' onChange={(e) => { handleChange(e) }} value={input.price} />
                    </div>
                    <div className="inputBox">
                        <label htmlFor="discount">Discount</label>
                        <input type="number" className='inputs' name='discount' onChange={(e) => { handleChange(e) }} value={input.discount} />
                    </div>
                    <div className="inputBox">
                        <label htmlFor="quantity">Quantity</label>
                        <input type="number" className='inputs' name='quantity' onChange={(e) => { handleChange(e) }} value={input.quantity} />
                    </div>
                    <div className="inputBox">
                        <label htmlFor="gender">Gender</label>
                        <select name="gender" id="gender" className='inputs' value={input.gender} onChange={(e) => { handleChange(e) }}>
                            <option value="man">Man</option>
                            <option value="woman">Woman</option>
                            <option value="kids">Kids</option>
                        </select>
                    </div>
                    <div className="inputBox">
                        <label htmlFor="category">Category</label>
                        <select name="category" id="category" className='inputs' value={input.category} onChange={(e) => { handleChange(e) }}>
                            {
                                category.map((v, i) => {
                                    return (
                                        <option value={v} key={i}>{v}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                    <button className='addBtn'>Add</button>
                </form>
            </div>
        </div>
  )
}

export default AddProduct