import React from "react"
import { Link } from "react-router-dom"

import styled from "styled-components"

const Container = styled.div`
    text-align: center;
    a {
        padding: 0 10px;
    }
`

const AdminSubNav = () => {
    return (
        <Container>
            {" "}
            <Link to="/admin/allAdmins">Admins</Link>
            <Link to="/admin/allUsers">Users</Link>
            <Link to="/admin/allDesigners">Designers</Link>
            <Link to="/admin/stats">Statistics</Link>
            <Link to="/admin/products">Products</Link>
        </Container>
    )
}

export default AdminSubNav
