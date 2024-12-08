import React from "react";
import NavBar from "../components/navbar/NavBar";

const Layout = ({ children }) => {
    return (
        <>
            <main>
            {children}
            </main>
        </>
    );
}

export default Layout;