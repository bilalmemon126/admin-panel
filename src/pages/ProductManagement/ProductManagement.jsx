import { GoPlus } from 'react-icons/go'
import './ProductManagement.css'
import ProductCard from '../../components/ProductCard/ProductCard'
import Data from '../../Data/Data'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'

function ProductManagement() {
  const base = "/public/stock/"
  let [data, setData] = useState(Data)

  let handelDelete = (id) => {
    setData(data.filter((v, i) => v.id !== id))
  }
  return (
    <div id="productManagementContainer">
      <div id="productAddBtnBox">
        <NavLink to={"/add"} className={"navLinks"}><button className='productAddBtn'><GoPlus /> Add</button></NavLink>
      </div>
      <div id="productManagementBox">
        {
          data.map((product, index) => {
            return (
              <ProductCard
                productId={product.id}
                mainImage={base + product.MainImage}
                title={product.Title.slice(0, 100) + "..."}
                price={product.Price} key={index}
                editAndDeleteBtn={
                  <>
                    <NavLink to={`/edit/${product.id}`} className="navLinks">
                      <button className='productEditBtn'>Edit</button>
                    </NavLink>
                    <button className='productDeleteBtn' onClick={() => { handelDelete(product.id) }}>Delete</button>
                  </>
                }
              />
            )
          })
        }
      </div>
    </div>
  )
}

export default ProductManagement