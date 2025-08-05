import { useState } from 'react'
import './CardImages.css'

function CardImages(props) {
    const base = "/public/stock/"

    const [imageMove, setImageMove] = useState(props.images)
    const [imgChange, setImgChange] = useState(0)

    return (
        <>
            <div id="imageContainer">
                <div id="allImages">
                    {
                        imageMove.map((value, index) => {
                            return(
                                <img src={base+value} key={index} onClick={() => setImgChange(index)}/>
                            )
                        })
                    }
                </div>

                <div id="mainImage">
                    <img src={base+imageMove[imgChange]} alt="" />
                </div>

            </div>
        </>
    )
}

export default CardImages