import React from "react"
import Header from "../COMPONENT/Header"
import Footer from "../COMPONENT/Footer"
import { Outlet } from "react-router-dom"
const Layout = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

export default Layout