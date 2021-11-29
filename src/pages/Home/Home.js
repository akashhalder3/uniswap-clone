import React from 'react';
import Banner from '../../components/Banner/Banner';
import Header from '../../components/Header/Header';
import "./Home.css";

const Home = () => {
    return (
        <div className="home">
            <Header></Header>
            <Banner></Banner>
        </div>
    );
};

export default Home;