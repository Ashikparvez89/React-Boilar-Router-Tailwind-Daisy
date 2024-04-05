import React from 'react';
import Header from './Header';
import Footer from './Footer';
import About from '../Pages/About';
import Contact from '../Pages/Contact';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <About></About>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;