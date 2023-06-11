import React from "react"
import styled from "styled-components"
import { useEffect, useState } from "react"
import ReactImageZoom from "react-image-zoom"
const ProductImage = ({ image }) => {
    const ZoomStyling = styled.div`
        height: 500px;
        .mainImg {
            display: block;
            width: 300px;
            height: 300px;
            pointer-events: none;
            object-fit: cover;
            border-radius: 0.5rem;
        }
        .images {
            display: flex;
            width: 70px;
            height: 70px;
            margin-top: 50px;
            img {
                padding: 4px;
                cursor: pointer;
            }
        }

        .js-image-zoom__zoomed-image {
            position: relative;

            border: 5px black dotted;
        }
    `

    const [mainImage, setMainImage] = useState("favico.png")

    useEffect(() => {
        if (Array.isArray(image)) {
            setMainImage(image[0])
        }
    }, [image])

    const props = { width: 300, height: 300, zoomWidth: 500, img: mainImage }

    return (
        <ZoomStyling>
            <ReactImageZoom {...props} />
            <div className="images">
                {Array.isArray(image) ? (
                    image.map((item, i) => (
                        <img onClick={() => setMainImage(item)} src={item} />
                    ))
                ) : (
                    <img src={image} />
                )}
            </div>
        </ZoomStyling>
    )
}

export default ProductImage
