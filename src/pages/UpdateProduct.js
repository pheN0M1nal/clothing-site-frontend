import styled from 'styled-components'

import { useCallback, useEffect, useState } from 'react'
import { FormComponent } from '../components/Authentication/FormElement'
import { InputComponent } from '../components/Authentication/InputELement'
import { Button } from '../components/Button'
import { Spinner } from '../components/Spinner'
import { HandleOnChangeInput } from '../components/helpers/formInput/HandleOnChangeInput'
import { useDispatch, useSelector } from 'react-redux'
import { notifyFailure } from '../components/helpers/notifications/notifyFailure'
// import { editProfile } from "../../store/actions/userActions"

import { ImagePickerComponent } from '../components/helpers/fileManagement/ProfilePicturePickerComponent'
import { createProduct, updateProduct } from '../store/actions/productActions'
import DesignerSubNav from '../components/DesignerSubNav'
import { toast } from 'react-toastify'
import { useParams } from 'react-router-dom'

const StyledComponent = styled.div`
    .profilePicturePickerWrapper > div {
        justify-content: center;
        flex-direction: column;
        gap: 0.5rem;

        .controlsWrapperImage {
            align-items: center;
        }
        .controlsWrapperImage .text {
            display: none;
        }
        .controlsWrapperImage button {
            background-color: #f3f3f2;
            color: black;
            font-size: 1rem;
            border-radius: 2.5rem;
        }
    }

    form {
        padding: 3rem 0;
        width: 50%;
        margin: 0 auto;

        button {
            background-color: aliceblue;
            border-radius: 10px;
        }

        .quantity {
            display: flex;
            text-align: center;
            justify-content: space-around;
            margin: 20px 0;
            div {
                padding-left: 20px;
            }
            input {
                background-color: aliceblue;
                margin-bottom: 0.3rem;
                width: 10%;
            }
            label {
                padding-top: 15px;
            }
        }

        .inputOuter {
            input {
                background-color: aliceblue;
                margin: 0.7rem 0;
                max-width: 100%;
            }
            label {
            }
            textarea {
                width: 100%;
                background-color: aliceblue;
                border: none;
                outline: none;
                min-height: 100px;
                padding: 8px;
            }
        }
        .actionButtonWrapper {
            display: flex;
            justify-content: flex-end;
            margin-top: 2rem;
        }
    }
`

export const UpdateProduct = () => {
    //

    const { id } = useParams()

    const { designerProducts: allProducts } = useSelector(
        (state) => state.designerProducts
    )

    const designerProducts = allProducts?.products

    const toBeUpdatedProduct =
        Array.isArray(designerProducts) &&
        designerProducts?.filter((item) => item._id === id)[0]

    console.log(toBeUpdatedProduct)

    //
    const [files, setFiles] = useState({})

    useEffect(() => {
        setFiles(toBeUpdatedProduct?.image ? toBeUpdatedProduct?.image : {})
        setData(toBeUpdatedProduct)
    }, [toBeUpdatedProduct])

    const [data, setData] = useState({
        quantity: [0, 0, 0],
        size: ['S', 'M', 'L'],
    })

    const dispatch = useDispatch()

    // checking if user gets registered
    const { addedProduct, error } = useSelector((state) => state.addedProduct)

    const { user } = useSelector((state) => state.userDetails)
    const { loading } = useSelector((state) => state.updatedProduct)

    // notifying if error from reducer state
    error && notifyFailure(error)

    //validating feilds
    const validateFields = () => {
        let state = true
        let fields = [
            'productName',
            'category',
            'price',
            'description',

            'quantity',
        ]
        for (let field of fields) {
            if (!data[field]) {
                notifyFailure(`${field} is required`)
                state = false
            }
        }
        return state
    }

    // handling sign up button
    const handleUpdateProfile = async (e) => {
        setData({ ...data, designerID: user?._id })

        e.preventDefault()
        if (!validateFields()) {
            return
        }

        console.log(data)
        console.log(files)

        const formData = new FormData()

        for (let field in data) {
            field !== 'size' &&
                field !== 'quantity' &&
                field !== '_id' &&
                field !== 'avgRating' &&
                field !== 'noOfReviews' &&
                field !== 'noOfSales' &&
                field !== 'featured' &&
                field !== 'createdAt' &&
                field !== 'updatedAt' &&
                field !== '__v' &&
                field !== 'designerID' &&
                field !== 'updatedAt' &&
                field !== 'image' &&
                formData.append(field, data[field])
        }

        Object.keys(files).forEach((i) => {
            typeof files[0] !== 'string' && formData.append('image', files[i])
        })

        data.size.forEach((size) => {
            formData.append('size', size)
        })

        data.quantity.forEach((quantity) => {
            formData.append('quantity', quantity)
        })

        dispatch(updateProduct(toBeUpdatedProduct._id, formData))
    }

    const handleQuantityChange = (e, v) => {
        setData({
            ...data,
            quantity: data.quantity.map((item, i) => {
                return i === v
                    ? parseInt(e.target.value)
                        ? parseInt(e.target.value)
                        : 0
                    : item
            }),
        })
    }
    return (
        <StyledComponent>
            <DesignerSubNav />
            <FormComponent className="formFieldWrapper" autocomplete="off">
                <div className="profileimagePickerWrapper">
                    <ImagePickerComponent
                        image={files}
                        field_name={'image'}
                        setFiles={setFiles}
                    />
                </div>
                <div className="inputOuter">
                    <label>Designer Id</label>
                    <InputComponent
                        type="text"
                        disabled
                        height={40}
                        value={user?._id}
                        onChange={(e) =>
                            HandleOnChangeInput(e, 'designerID', setData, data)
                        }
                    />
                </div>
                <div className="inputOuter">
                    <label>Name</label>
                    <InputComponent
                        type="text"
                        height={40}
                        value={data && data?.productName}
                        onChange={(e) =>
                            HandleOnChangeInput(e, 'productName', setData, data)
                        }
                    />
                </div>
                <div className="inputOuter">
                    <label>Category</label>
                    <InputComponent
                        type="text"
                        height={40}
                        value={data && data?.category}
                        onChange={(e) =>
                            HandleOnChangeInput(e, 'category', setData, data)
                        }
                    />
                </div>
                {/* <div className="inputOuter">
                    <label>Size</label>

                    <ul className="toppings-list">
                        {sizes.map((item, index) => {
                            return (
                                <li key={index}>
                                    <div className="toppings-list-item">
                                        <div className="left-section">
                                            <input
                                                type="checkbox"
                                                id={`custom-checkbox-${index}`}
                                                value={item}
                                                name={item}
                                                checked={checkedState.includes(
                                                    item
                                                )}
                                                onChange={() =>
                                                    handleOnChange(item)
                                                }
                                            />
                                            <label
                                                htmlFor={`custom-checkbox-${index}`}
                                            >
                                                {item}
                                            </label>
                                        </div>
                                    </div>
                                </li>
                            )
                        })}
                    </ul>
                </div> */}

                <div className="inputOuter">
                    <label>Price</label>
                    <InputComponent
                        type="number"
                        height={40}
                        value={data && data?.price}
                        onChange={(e) =>
                            HandleOnChangeInput(e, 'price', setData, data)
                        }
                    />
                </div>

                <div className="inputOuter">
                    <label>Quantity</label>
                    <div className="quantity">
                        <label>Small</label>

                        <InputComponent
                            type="number"
                            height={40}
                            value={data && data?.quantity[0]}
                            onChange={(e) => handleQuantityChange(e, 0)}
                        />

                        <label>Medium</label>

                        <InputComponent
                            type="number"
                            height={40}
                            value={data && data?.quantity[1]}
                            onChange={(e) => handleQuantityChange(e, 1)}
                        />

                        <label>Large</label>
                        <InputComponent
                            type="number"
                            height={40}
                            value={data && data?.quantity[2]}
                            onChange={(e) => handleQuantityChange(e, 2)}
                        />
                    </div>
                </div>
                <div className="inputOuter">
                    <label>Discription</label>
                    <textarea
                        type="text"
                        height={40}
                        value={data && data?.description}
                        onChange={(e) =>
                            HandleOnChangeInput(e, 'description', setData, data)
                        }
                    />
                </div>

                <div className="actionButtonWrapper">
                    {loading ? (
                        <Spinner size={1.5} />
                    ) : (
                        <Button
                            textTransform={'uppercase'}
                            fontSize={16}
                            maxWidth={200}
                            border={'transparent'}
                            height={41}
                            onClick={handleUpdateProfile}
                        >
                            Update Product
                        </Button>
                    )}
                </div>
            </FormComponent>
        </StyledComponent>
    )
}
