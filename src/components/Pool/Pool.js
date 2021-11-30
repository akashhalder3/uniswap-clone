import React from 'react';
import Header from '../Header/Header';
import PoolContent from '../PoolContent/PoolContent';
import "./Pool.css";

const Pool = () => {
    return (
        <div className="pool">
            <Header/>
            <PoolContent/>
        </div>
    );
};

export default Pool;