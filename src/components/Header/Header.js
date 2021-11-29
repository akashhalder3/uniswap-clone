import React from 'react';
import "./Header.css";
import eth from "../../assets/eth.png";

const Header = () => {
    return (
        <div className="header pt-3">
            <div className="logo">
            <i class="logoIcon fas fa-chess-knight"></i>
            </div>
            <div className="menus">
                <li>Swap</li>
                <li>Pool</li>
                <li>Vote</li>
                <li className="flex flex-row items-center">Charts<i className="fas fa-external-link-alt ml-1" style={{fontSize: '12px'}}></i></li>
            </div>
            <div className="options">
                <div className="optionOne px-3">
                    <i className="eth fab fa-ethereum ethereum__icon mr-2 px-2 py-1 mb-1"></i>
                    {/* <img src={eth} alt="" style={{width:'10%'}}/> */}
                    <p className="pt-2">Ethereum</p>
                </div>
                <div className="optionTwo px-3">
                    <p className="connectWallet nav__text text-base text-pink-700 font-bold pt-2">Connect Wallet</p>
                </div>
                <div className="optionThree px-3 py-1 mb-1">
                <i class="fas fa-ellipsis-h nav__menu rounded-lg"></i>
                </div>
            </div>
        </div>
    );
};

export default Header;