import { NavLink, useParams } from 'react-router-dom';
import CardImages from '../../components/CardImages/CardImages'
import './ProductDetails.css'
import data from '../../Data/Data';

function ProductDetails(props) {
    const params = useParams()
    const { id } = params;

    let price = data[id].Price;
    let discount = data[id].Discount;

    let discountedPrice = Math.round(price - (price * (discount / 100)))

    return (
        <>
            <div id="cardDetailsContainer">
                <div id="cardDetailsBox">
                    <div id="imageBox">
                        <CardImages images={data[id].Images} />
                    </div>
                    <div id="productDetailsBox">
                        <p id='productTitle'>{data[id].Title}</p>
                        <p id='productRating'>{data[id].Rating} <span>({data[id].Reviews})</span></p>
                        <p id='productPrice'>Rs. {discountedPrice} <span>-{discount}%</span></p>

                        <NavLink to={`/edit/${data[id].id}`} className="navLinks">
                            <button id='productEditBtn'>Edit</button>
                        </NavLink>
                    </div>
                    <div id="productDescription">
                        <h3>Product Description</h3>
                        <p>{data[id].Description}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductDetails