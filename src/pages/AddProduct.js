import styled from "styled-components"

import { useCallback, useEffect, useState } from "react"
import { FormComponent } from "../components/Authentication/FormElement"
import { InputComponent } from "../components/Authentication/InputELement"
import { Button } from "../components/Button"
import { Spinner } from "../components/Spinner"
import { HandleOnChangeInput } from "../components/helpers/formInput/HandleOnChangeInput"
import { useDispatch, useSelector } from "react-redux"
import { notifyFailure } from "../components/helpers/notifications/notifyFailure"
// import { editProfile } from "../../store/actions/userActions"

import { ImagePickerComponent } from "../components/helpers/fileManagement/ProfilePicturePickerComponent"
import { createProduct } from "../store/actions/productActions"
import DesignerSubNav from "../components/DesignerSubNav"
import { toast } from "react-toastify"

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

        .inputOuter {
            input {
                background-color: aliceblue;
                margin-bottom: 0.3rem;
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
export const AddProduct = () => {
    const [files, setFiles] = useState({})
    const [data, setData] = useState({})
    const dispatch = useDispatch()

    // checking if user gets registered
    const { addedProduct, error, loading } = useSelector(
        (state) => state.addedProduct
    )
    const { user } = useSelector((state) => state.userDetails)

    useEffect(() => {
        addedProduct && toast.success("Product added successfully.")
    }, [addedProduct])

    // notifying if error from reducer state
    error && notifyFailure(error)

    // useEffect(() => {
    //     setData(profile)
    //     const pictureData = {
    //         url_on_server: profile && profile?.image?.file,
    //     }

    //     setFiles({
    //         ...files,
    //         image: pictureData,
    //     })
    // }, [profile?.image?.file, setFiles, profile])
    // const uploadFile = useCallback(async () => {
    //     if (files?.image) {
    //         const temp = {
    //             ...files?.image,
    //             to_be_deleted_file_id: profile && profile?.image?.id,
    //         }

    //         if (temp?.to_be_uploaded_buffer) {
    //             let tempData = { ...data }
    //             tempData["image"] = files?.image.to_be_uploaded_buffer
    //             setData(tempData)
    //         }
    //     }
    // }, [files?.image, setData, profile])
    // useEffect(() => {
    //     uploadFile()
    // }, [uploadFile])

    //validating feilds
    const validateFields = () => {
        let state = true
        let fields = [
            "productName",
            "category",
            "price",
            "description",
            "size",
            "quantity",
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

        // var final = {
        //     ...data,
        //     quantity: parseInt(data.quantity),
        //     price: parseInt(data.price),
        // }

        const formData = new FormData()

        for (let field in data) {
            formData.append(field, data[field])
        }

        formData.append("image", files)
        formData.append("designerID", user?._id)

        dispatch(createProduct(formData))
    }
    return (
        <StyledComponent>
            <DesignerSubNav />
            <FormComponent className="formFieldWrapper" autocomplete="off">
                <div className="profileimagePickerWrapper">
                    <ImagePickerComponent
                        image={files}
                        field_name={"image"}
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
                            HandleOnChangeInput(e, "designerID", setData, data)
                        }
                    />
                </div>
                <div className="inputOuter">
                    <label>Name</label>
                    <InputComponent
                        type="text"
                        height={40}
                        value={data?.productName}
                        onChange={(e) =>
                            HandleOnChangeInput(e, "productName", setData, data)
                        }
                    />
                </div>
                <div className="inputOuter">
                    <label>Category</label>
                    <InputComponent
                        type="text"
                        height={40}
                        value={data?.category}
                        onChange={(e) =>
                            HandleOnChangeInput(e, "category", setData, data)
                        }
                    />
                </div>
                <div className="inputOuter">
                    <label>Size</label>
                    <InputComponent
                        type="text"
                        height={40}
                        value={data?.size}
                        onChange={(e) =>
                            HandleOnChangeInput(e, "size", setData, data)
                        }
                    />
                </div>

                <div className="inputOuter">
                    <label>Price</label>
                    <InputComponent
                        type="number"
                        height={40}
                        value={data?.price}
                        onChange={(e) =>
                            HandleOnChangeInput(e, "price", setData, data)
                        }
                    />
                </div>

                <div className="inputOuter">
                    <label>Quantity</label>
                    <InputComponent
                        type="number"
                        height={40}
                        value={data?.quantity}
                        onChange={(e) =>
                            HandleOnChangeInput(e, "quantity", setData, data)
                        }
                    />
                </div>
                <div className="inputOuter">
                    <label>Discription</label>
                    <textarea
                        type="text"
                        height={40}
                        value={data?.description}
                        onChange={(e) =>
                            HandleOnChangeInput(e, "description", setData, data)
                        }
                    />
                </div>

                <div className="actionButtonWrapper">
                    {loading ? (
                        <Spinner size={1.5} />
                    ) : (
                        <Button
                            textTransform={"uppercase"}
                            fontSize={16}
                            maxWidth={200}
                            border={"transparent"}
                            height={41}
                            onClick={handleUpdateProfile}
                        >
                            UPDATE
                        </Button>
                    )}
                </div>
            </FormComponent>
        </StyledComponent>
    )
}
