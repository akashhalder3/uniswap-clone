import React, { useState } from 'react';
import "./Header.css";
import eth from "../../assets/eth.png";
import { Link } from 'react-router-dom';
import { Modal } from 'react-bootstrap';

import icon1 from "../../assets/icon1.png";
import icon2 from "../../assets/icon2.svg";
import icon3 from "../../assets/icon3.svg";
import icon4 from "../../assets/icon4.png";
import icon5 from "../../assets/icon5.png";
import bnb from "../../assets/bnb.png";

const Header = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div className="header pt-3">
            <div className="logo">
            <i class="logoIcon fas fa-chess-knight" style={{color:'white'}}></i>
            </div>
            <div className="menus">
                <li><Link style={{textDecoration: 'none', color:'black'}} to="/">Swap</Link></li>
                <li><Link style={{textDecoration: 'none', color:'black'}} to="/pool">Pool</Link></li>
            </div>
            <div className="options">
                <div className="optionOne px-3 py-2">
                    <img src={bnb} className="bnb" alt="" />
                    <h6 className="mt-1">BNB</h6>
                </div>
                <div className="optionTwo px-3 py-2">
                    <h6 onClick={handleShow} className="cursor-pointer mt-1 text-light">Connect Wallet</h6>
                </div>
                <div className="optionThree px-3 py-2">
                <i class="fas fa-ellipsis-h nav__menu rounded-lg"></i>
                </div>
            </div>
            <>
                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Connect a wallet</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <p style={{ borderRadius: '16px', padding: '20px', backgroundColor: '#F7F8FA' }}>By connecting a wallet, you agree to Uniswap Labs’ Terms of Service and acknowledge that you have read and understand the Uniswap Protocol Disclaimer.</p>

                            <div className="d-flex align-items-center justify-content-between text-white px-4" style={{ borderRadius: '16px', backgroundColor: '#D10064' }}>
                                <h6 className="mt-2">How this app use APIs</h6>
                                <i class="fas fa-arrow-right  bg-pink-700"></i>
                            </div>
                            <br />
                            <div className="flex justify-between items-center px-4" style={{ backgroundColor: "#EDEEF2", borderRadius: "16px" }}>
                                <h6 className="mt-2">Metamask</h6>
                                <p className="mt-2"><img className="w-8" src={icon1} /></p>
                            </div>
                            <br />
                            <div className="flex justify-between items-center px-4" style={{ backgroundColor: "#EDEEF2", borderRadius: "16px" }}>
                                <h6 className="mt-2">WalletConnect</h6>
                                <p className="mt-2"><img className="w-8" src={icon2} /></p>
                            </div>
                            <br />
                            <div className="flex justify-between items-center px-4" style={{ backgroundColor: "#EDEEF2", borderRadius: "16px" }}>
                                <h6 className="mt-2">Coinbase Wallet</h6>
                                <p className="mt-2"><img className="w-8" src={icon3} /></p>
                            </div>
                            <br />
                            <div className="flex justify-between items-center px-4" style={{ backgroundColor: "#EDEEF2", borderRadius: "16px" }}>
                                <h6 className="mt-2">Fortmatic</h6>
                                <p className="mt-2"><img className="w-8" src={icon4} /></p>
                            </div>
                            <br />
                            <div className="flex justify-between items-center px-4" style={{ backgroundColor: "#EDEEF2", borderRadius: "16px" }}>
                                <h6 className="mt-2">Portis</h6>
                                <p className="mt-2"><img className="w-8" src={icon5} /></p>
                            </div>
                        </Modal.Body>
                    </Modal>
                </>
        </div>
    );
};

export default Header;