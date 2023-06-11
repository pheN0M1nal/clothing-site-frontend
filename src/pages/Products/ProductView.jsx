import React from "react"
import { useParams } from "react-router-dom"
import ProductInfo from "../../components/product/ProductInfo"
import Reviews from "../../components/product/Reviews"
import { getproductById } from "../../store/actions/productActions"
import { useDispatch, useSelector } from "react-redux"
import { Spinner } from "../../components/Spinner"
import { useEffect } from "react"
import { getDesignerById } from "../../store/actions/designerActions"
const ProductView = () => {
    const params = useParams()

    const productId = params.id

    const dispatch = useDispatch()
    useEffect(() => {
        productId && dispatch(getproductById(productId))
    }, [productId])
    const { loading, singleProduct } = useSelector(
        (state) => state.singleProduct
    )

    const { supplierInfo } = useSelector((state) => state.supplierInfo)

    useEffect(() => {
        singleProduct && dispatch(getDesignerById(singleProduct?.designerID))
    }, [singleProduct])

    return (
        <>
            {loading ? (
                <div className="flex items-center justify-center w-full h-96">
                    <Spinner />
                </div>
            ) : (
                <>
                    <div className="flex flex-col items-center justify-center mx-auto space-y-16 mt-8 min-w-[320px] sm:w-full">
                        <div className="lg:h-auto sm:w-full lg:w-[95%] sm:border sm:border-zinc-300 sm:rounded-lg">
                            <ProductInfo
                                product={singleProduct}
                                supplierInfo={supplierInfo}
                            />
                        </div>
                        <div className="w-[300px] sm:w-full lg:w-[80%] rounded-lg">
                            {productId && <Reviews productId={productId} />}
                        </div>
                    </div>
                </>
            )}
        </>
    )
}

export default ProductView
