import React from "react"
import { Link } from "react-router-dom"

import styled from "styled-components"

const Container = styled.div`
    margin-top: 20px;
    text-align: center;
    a {
        padding: 0 10px;
    }
`

const AdminSubNav = () => {
    return (
        <Container prop="red">
            {" "}
            <Link to="/designer">Statistics</Link>
            <Link to="/designer/products">Products</Link>
        </Container>
    )
}

export default AdminSubNav
