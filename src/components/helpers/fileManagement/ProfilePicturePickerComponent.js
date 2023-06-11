import { Button } from "../../Button"
import default_product from "../../../assets/images/default_product.png"
import styled from "styled-components"

const StyledComponent = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;
    margin-bottom: 20px;

    .imageWrapper {
        width: 10rem;
        height: 10rem;
        border-radius: 50%;
        margin-bottom: 15px;
        overflow: hidden;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    .controlsWrapperImage {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        align-items: flex-start;

        span {
        }

        .text {
            color: var(--custom-white);
            font-weight: 600;
            font-size: 0.9rem;
        }

        .chooseImageButtonWrapper {
            position: relative;
            cursor: pointer;
            background-color: aliceblue;
            input {
                cursor: pointer;
                opacity: 0;
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                left: 0;
                z-index: 30;
            }
        }
    }
`

export const ImagePickerComponent = ({ image, setFiles }) => {
    const imageURL =
        typeof image[0] === "string" && image[0].includes("http")
            ? image[0]
            : image[0]?.name
            ? URL.createObjectURL(image[0])
            : image?.name
            ? URL.createObjectURL(image)
            : null

    return (
        <StyledComponent>
            <div className="imageWrapper">
                <img src={imageURL ? imageURL : default_product} alt={""} />
            </div>
            <div className="controlsWrapperImage">
                <span className="text">
                    {image?.name || "Select profile image"}
                </span>

                <div className="chooseImageButtonWrapper">
                    <Button
                        fontSize={10}
                        paddingTopBottom={0.4}
                        paddingLeftRight={1.5}
                        height={30}
                        width={30}
                    >
                        Upload
                    </Button>
                    <input
                        type="file"
                        multiple
                        onChange={(e) => {
                            setFiles(e.target.files)
                        }}
                    />
                </div>
            </div>
        </StyledComponent>
    )
}
