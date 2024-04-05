import React from 'react';
import Header from '../Components/Home/Header';
import Footer from '../Components/Home/Footer';
import { Outlet } from 'react-router-dom';
const Mainlayouts = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Mainlayouts;