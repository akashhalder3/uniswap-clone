import React, { useState } from 'react';
import { Modal, Button } from "react-bootstrap";
import './PoolContent.css';
import icon1 from "../../assets/icon1.png";
import icon2 from "../../assets/icon2.svg";
import icon3 from "../../assets/icon3.svg";
import icon4 from "../../assets/icon4.png";
import icon5 from "../../assets/icon5.png";

const PoolSm = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <div>
                <h3 className="text-light text-xl my-4">Pools Overview</h3>
                <div className="position__box flex justify-between items-center">
                    <p className="position__box__left">+ Position New</p>
                    <p className="position__box__right">More <i class="fas fa-chevron-down"></i></p>
                </div>
                <div className="middle__box text-gray-600 bg-white mt-3">
                    <i className="fas fa-inbox text-5xl bg-white pt-4"></i>
                    <h4 className="text-lg font-light bg-white py-3">Your V3 liquidity positions will appear<br />here.</h4>
                    <button className="wallet__button text-base mb-4" onClick={handleShow}>Connect Wallet</button>
                </div>
                <div className=" view__box mt-8">
                    <h5 className="text-base mt-2 text-center text-light"><i className="fas fa-layer-group mr-1 text-base"></i>
                        View V2 liquidity
                    </h5>
                </div>
                <>
                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Connect a wallet</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <p style={{ borderRadius: '16px', padding: '20px', backgroundColor: '#F7F8FA' }}>By connecting a wallet, you agree to Uniswap Labs’ Terms of Service and acknowledge that you have read and understand the Uniswap Protocol Disclaimer.</p>

                            <div className="d-flex align-items-center justify-content-between text-white px-4" style={{ borderRadius: '16px', backgroundColor: '#D10064' }}>
                                <h6 className="mt-2 ">How this app use APIs</h6>
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
        </>
    )
};
const PoolMd = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <div className="pool__large">
                <div className="flex items-center justify-between my-4">
                    <h3 className="text-black text-xl ">Pools Overview</h3>
                    <div className="position__box flex  items-center">
                        <p className="position__box__left mr-2">+ New Position</p>
                        <p className="position__box__right">More <i class="fas fa-chevron-down"></i></p>
                    </div>
                </div>

                <div className="w-full flex ">
                    <div className="w-2/3 text__box__left py-4 mr-3 ml-1 pool__text__box__left">
                        <h2 className="text-xl text__box__left__head ml-6 font-bold">Learn about providing liquidity <i class="fas fa-external-link-alt text__box__left__head__para"></i></h2>
                        <p className="text-base text__box__left__para ml-6 ">Check out our v3 LP walkthrough and migration<br />guides.</p>
                    </div>

                    <div className="w-1/3 text__box__right py-4 mr-1 pool__text__box__right">
                        <h2 className="text-xl text__box__right__head ml-6">Top pools <i class="fas fa-external-link-alt text__box__right__head__icon"></i></h2>
                        <p className="text-base text__box__right__para ml-6">Explore popular pools on Uniswap Analytics.</p>
                    </div>
                </div>


                <div className="middle__box text-gray-600 bg-white mt-4 rounded-3xl">
                    <i className="fas fa-inbox text-5xl bg-white pt-4"></i>
                    <h4 className="text-lg font-extralight bg-white py-3">Your V3 liquidity positions will appear<br />here.</h4>
                    <button className="wallet__button text-base mb-4" onClick={handleShow}>Connect Wallet</button>
                </div>
                <div className=" view__box mt-8">
                    <h5 className="text-base mt-2 ml-2"><i className="fas fa-layer-group mr-1 text-base"></i>
                        View V2 liquidity
                    </h5>
                </div>
                <>
                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Connect a wallet</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <p style={{ borderRadius: '16px', padding: '20px', backgroundColor: '#F7F8FA' }}>By connecting a wallet, you agree to Uniswap Labs’ Terms of Service and acknowledge that you have read and understand the Uniswap Protocol Disclaimer.</p>

                            <div className="d-flex align-items-center justify-content-between text-white px-4" style={{ borderRadius: '16px', backgroundColor: '#D10064' }}>
                                <h6 className="mt-2 ">How this app use APIs</h6>
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
        </>
    )
};


const PoolLg = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>

            <div className="pool__large">
                <div className="flex items-center justify-between my-4">
                    <h3 className="text-light text-xl ">Pools Overview</h3>
                    <div className="position__box flex  items-center">
                        <p className="position__box__right mr-2">More <i class="fas fa-chevron-down"></i></p>
                        <p className="position__box__left font-bold">+ New Position</p>
                    </div>
                </div>

                <div className="w-full flex ">
                    <div className="guideline w-2/3 text__box__left py-4 mr-3 ml-1 pool__text__box__left text-light">
                        <h2 className="text-xl text__box__left__head ml-6 font-bold">Learn about providing liquidity <i class="fas fa-external-link-alt text__box__left__head__para"></i></h2>
                        <p className="text-base text__box__left__para ml-6 ">Check out our v3 LP walkthrough and migration<br />guides.</p>
                    </div>

                    <div className="topPools w-1/3 text__box__right py-4 mr-1 pool__text__box__right">
                        <h2 className="text-xl text__box__right__head ml-6">Top pools <i class="fas fa-external-link-alt text__box__right__head__icon"></i></h2>
                        <p className="text-base text__box__right__para ml-6">Explore popular pools on Uniswap Analytics.</p>
                    </div>
                </div>


                <div className="middle__box text-gray-600 bg-white mt-4 rounded-3xl">
                    <i className="fas fa-inbox text-5xl bg-white "></i>
                    <h4 className="text-lg font-extralight bg-white py-2">Your V3 liquidity positions will appear<br />here.</h4>
                    <button className="wallet__button text-base font-bold px-5" onClick={handleShow}>Connect Wallet</button>
                </div>
                <div className=" view__box mt-8">
                    <h5 className="text-base mt-2 ml-2 text-light"><i className="fas fa-layer-group mr-1 text-base"></i>
                        View V2 liquidity
                    </h5>
                </div>
                <>
                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Connect a wallet</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <p style={{ borderRadius: '16px', padding: '20px', backgroundColor: '#F7F8FA' }}>By connecting a wallet, you agree to Uniswap Labs’ Terms of Service and acknowledge that you have read and understand the Uniswap Protocol Disclaimer.</p>

                            <div className="d-flex align-items-center justify-content-between text-white px-4" style={{ borderRadius: '16px', backgroundColor: '#D10064' }}>
                                <h6 className="mt-2 ">How this app use APIs</h6>
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

        </>
    )
};


const Pool = () => {
    return (
        <>
            <nav className=" px-4 py-2">
                <div className="md:hidden">
                    {
                        <PoolSm />
                    }
                </div>
                <div className="hidden lg:hidden md:flex">
                    {
                        <PoolMd />
                        //inga anda componenta rendar pannanum
                    }
                </div>
                <div className="hidden lg:flex">
                    {
                        <PoolLg />
                    }
                </div>
            </nav>
        </>
    )
};


export default Pool;
