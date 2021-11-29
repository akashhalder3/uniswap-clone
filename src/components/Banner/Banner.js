import React, { useState } from 'react'
import SettingModal from "../SettingModal/SettingModal"
import { Modal, Button } from "react-bootstrap";

const HeaderSm = () => {
    const [showSettings, setShowSettings] = useState(false);
    const handleCloseSettings = () => setShowSettings(false);
    const handleShowSettings = () => setShowSettings(true);

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <div className="bg-white w-11/12 mx-auto p-3 rounded-2xl ">
                <div className="header__head flex items-center justify-between bg-white my-2 mb-3">
                    <h4 className="font-semibold text-2xl bg-white">Swap</h4>
                    <i className="fas fa-cog text-2xl bg-white cursor-pointer" onClick={handleShowSettings}></i>
                    <>
                        <Modal show={showSettings} onHide={handleCloseSettings}>
                            <Modal.Header closeButton>
                                <Modal.Title>Transaction Settings</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <p>Slippage tolerance?</p>
                            </Modal.Body>
                        </Modal>
                    </>
                </div>
                <div className="header__section__one flex items-center justify-between bg-gray-100 py-3 mb-1 border-1 border-gray-400 rounded-lg">
                    <h3 className="mb-2 flex items-center bg-white py-2 px-3 rounded-2xl ml-3"><i class="fab fa-ethereum bg-blue-600 text-white px-2 py-2 rounded-full"></i>&nbsp;&nbsp;<strong className="font-bold text-2xl">ETH</strong>&nbsp;&nbsp;<i class="fas fa-chevron-down"></i></h3>
                    <h3 className="mb-2 text-3xl items-center font-bold bg-gray-100  text-gray-400 py-1 px-3 rounded-lg mr-3">0.0</h3>
                </div>

                <div className="header__section__one flex items-center justify-between bg-gray-100 py-3 mb-3 border-1 border-gray-400 rounded-lg">
                    <h3 className="mb-2 flex items-center bg-pink-600 py-2 px-3  ml-3 rounded-xl"><span className=" text-2xl bg-pink-600 text-white">Select a token</span>&nbsp;&nbsp;<i class="fas fa-chevron-down pt-2 pr-1 bg-pink-600 text-white"></i></h3>
                    <h3 className="mb-2 text-3xl items-center font-bold bg-gray-100  text-gray-400 py-1 px-3 rounded-lg mr-3">0.0</h3>
                </div>

                <h3 className="header__button bg-pink-200 text-pink-700 flex justify-center py-4 rounded-3xl text-2xl font-semibold" onClick={handleShow}>Connect Wallet</h3>
                <>
                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Connect a wallet</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <p style={{ borderRadius: '16px', padding: '20px', backgroundColor: '#F7F8FA' }}>By connecting a wallet, you agree to Uniswap Labs’ Terms of Service and acknowledge that you have read and understand the Uniswap Protocol Disclaimer.</p>

                            <div className="d-flex align-items-center justify-content-between text-white px-4" style={{ borderRadius: '16px', backgroundColor: '#D10064' }}>
                                <h6 className="mt-2">How this app use APIs</h6>
                                <p className="mt-2">icons</p>
                            </div>
                            <br />
                            <div className="flex justify-between items-center px-4" style={{ backgroundColor: "#EDEEF2", borderRadius: "16px" }}>
                                <h6 className="mt-2">Metamask</h6>
                                <p className="mt-2">icon</p>
                            </div>
                            <br />
                            <div className="flex justify-between items-center px-4" style={{ backgroundColor: "#EDEEF2", borderRadius: "16px" }}>
                                <h6 className="mt-2">WalletConnect</h6>
                                <p className="mt-2">icon</p>
                            </div>
                            <br />
                            <div className="flex justify-between items-center px-4" style={{ backgroundColor: "#EDEEF2", borderRadius: "16px" }}>
                                <h6 className="mt-2">Coinbase Wallet</h6>
                                <p className="mt-2">icon</p>
                            </div>
                            <br />
                            <div className="flex justify-between items-center px-4" style={{ backgroundColor: "#EDEEF2", borderRadius: "16px" }}>
                                <h6 className="mt-2">Fortmatic</h6>
                                <p className="mt-2">icon</p>
                            </div>
                            <br />
                            <div className="flex justify-between items-center px-4" style={{ backgroundColor: "#EDEEF2", borderRadius: "16px" }}>
                                <h6 className="mt-2">Portis</h6>
                                <p className="mt-2">icon</p>
                            </div>
                        </Modal.Body>
                    </Modal>
                </>

            </div>
        </>
    )
};
const HeaderMd = () => {
    const [showSettings, setShowSettings] = useState(false);
    const handleCloseSettings = () => setShowSettings(false);
    const handleShowSettings = () => setShowSettings(true);

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <div className="bg-white w-5/12 mx-auto p-3 rounded-2xl ">
                <div className="header__head flex items-center justify-between bg-white my-1 mb-3">
                    <h4 className="font-semibold text-2xl bg-white">Swap</h4>
                    <i className="fas fa-cog text-2xl bg-white cursor-pointer" onClick={handleShowSettings}></i>
                    <>
                        <Modal show={showSettings} onHide={handleCloseSettings}>
                            <Modal.Header closeButton>
                                <Modal.Title>Transaction Settings</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <p>Slippage tolerance?</p>
                            </Modal.Body>
                        </Modal>
                    </>
                </div>
                <div className="header__section__one flex items-center justify-between bg-gray-100 py-3 mb-1 border-1 border-gray-400 rounded-lg">
                    <h3 className=" flex items-center mb-2 bg-white py-2 px-3 rounded-2xl ml-3"><i class="fab fa-ethereum bg-blue-600 text-white px-2 py-2 rounded-full"></i>&nbsp;&nbsp;<strong className="font-semibold text-xl">ETH</strong>&nbsp;&nbsp;<i class="fas fa-chevron-down"></i></h3>
                    <h3 className="text-3xl mb-2 items-center font-bold bg-gray-100  text-gray-400 py-1 px-3 rounded-lg mr-3">0.0</h3>
                </div>

                <div className="header__section__one flex items-center justify-between bg-gray-100 py-3 mb-3 border-1 border-gray-400 rounded-lg">
                    <h3 className="mb-2 flex items-center bg-pink-600 py-2 px-3  ml-3 rounded-xl"><span className=" text-lg bg-pink-600 text-white">Select a token</span>&nbsp;&nbsp;<i class="fas fa-chevron-down pt-2 pr-1 bg-pink-600 text-white"></i></h3>
                    <h3 className="mb-2 text-3xl items-center font-bold bg-gray-100  text-gray-400 py-1 px-3 rounded-lg mr-3">0.0</h3>
                </div>

                <h3 className="header__button bg-pink-200 text-pink-700 flex justify-center py-4 rounded-3xl text-xl font-semibold" onClick={handleShow}>Connect Wallet</h3>
                <>
                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Connect a wallet</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <p style={{ borderRadius: '16px', padding: '20px', backgroundColor: '#F7F8FA' }}>By connecting a wallet, you agree to Uniswap Labs’ Terms of Service and acknowledge that you have read and understand the Uniswap Protocol Disclaimer.</p>

                            <div className="d-flex align-items-center justify-content-between text-white px-4" style={{ borderRadius: '16px', backgroundColor: '#D10064' }}>
                                <h6 className="mt-2">How this app use APIs</h6>
                                <p className="mt-2">icons</p>
                            </div>
                            <br />
                            <div className="flex justify-between items-center px-4" style={{ backgroundColor: "#EDEEF2", borderRadius: "16px" }}>
                                <h6 className="mt-2">Metamask</h6>
                                <p className="mt-2">icon</p>
                            </div>
                            <br />
                            <div className="flex justify-between items-center px-4" style={{ backgroundColor: "#EDEEF2", borderRadius: "16px" }}>
                                <h6 className="mt-2">WalletConnect</h6>
                                <p className="mt-2">icon</p>
                            </div>
                            <br />
                            <div className="flex justify-between items-center px-4" style={{ backgroundColor: "#EDEEF2", borderRadius: "16px" }}>
                                <h6 className="mt-2">Coinbase Wallet</h6>
                                <p className="mt-2">icon</p>
                            </div>
                            <br />
                            <div className="flex justify-between items-center px-4" style={{ backgroundColor: "#EDEEF2", borderRadius: "16px" }}>
                                <h6 className="mt-2">Fortmatic</h6>
                                <p className="mt-2">icon</p>
                            </div>
                            <br />
                            <div className="flex justify-between items-center px-4" style={{ backgroundColor: "#EDEEF2", borderRadius: "16px" }}>
                                <h6 className="mt-2">Portis</h6>
                                <p className="mt-2">icon</p>
                            </div>
                        </Modal.Body>
                    </Modal>
                </>

            </div>
        </>
    )
};
const HeaderLg = () => {
    const [showSettings, setShowSettings] = useState(false);
    const handleCloseSettings = () => setShowSettings(false);
    const handleShowSettings = () => setShowSettings(true);

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <div className="bg-white w-5/12 mx-auto p-3 rounded-2xl">
                <div className="header__head flex items-center justify-between bg-white my-1 mb-3">
                    <h4 className="font-semibold text-2xl bg-white">Swap</h4>
                    <i className="settings cursor-pointer fas fa-cog text-2xl bg-white" onClick={handleShowSettings}></i>
                    {/* {
                        show && <SettingModal show={show}/>
                    } */}
                    <>
                        <Modal show={showSettings} onHide={handleCloseSettings}>
                            <Modal.Header closeButton>
                                <Modal.Title>Transaction Settings</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <p>Slippage tolerance?</p>
                            </Modal.Body>
                        </Modal>
                    </>
                </div>
                <div className="header__section__one flex items-center justify-between bg-gray-100 py-3 mb-1 border-1 border-gray-400 rounded-lg">
                    <h3 className="flex items-center mb-2 bg-white py-2 px-3 rounded-2xl ml-3"><i class="fab fa-ethereum bg-blue-600 text-white px-2 py-2 rounded-full"></i>&nbsp;&nbsp;<strong className="font-semibold text-xl">ETH</strong>&nbsp;&nbsp;<i class="fas fa-chevron-down"></i></h3>
                    <h3 className="text-3xl mb-2 items-center font-bold bg-gray-100  text-gray-400 py-1 px-3 rounded-lg mr-3">0.0</h3>
                </div>

                <div className="header__section__one flex items-center justify-between bg-gray-100 py-3 mb-3 border-1 border-gray-400 rounded-lg">
                    <h3 className="mb-2 flex items-center bg-pink-600 py-2 px-3  ml-3 rounded-xl"><span className=" text-xl bg-pink-600 text-white">Select a token</span>&nbsp;&nbsp;<i class="fas fa-chevron-down pt-2 pr-1 bg-pink-600 text-white"></i></h3>
                    <h3 className="mb-2 text-3xl items-center font-bold bg-gray-100  text-gray-400 py-1 px-3 rounded-lg mr-3">0.0</h3>
                </div>

                <h3 className="header__button bg-pink-200 text-pink-700 flex justify-center py-4 rounded-3xl text-xl font-semibold cursor-pointer" onClick={handleShow}>Connect Wallet</h3>
                <>
                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Connect a wallet</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <p style={{ borderRadius: '16px', padding: '20px', backgroundColor: '#F7F8FA' }}>By connecting a wallet, you agree to Uniswap Labs’ Terms of Service and acknowledge that you have read and understand the Uniswap Protocol Disclaimer.</p>

                            <div className="d-flex align-items-center justify-content-between text-white px-4" style={{ borderRadius: '16px', backgroundColor: '#D10064' }}>
                                <h6 className="mt-2">How this app use APIs</h6>
                                <p className="mt-2">icons</p>
                            </div>
                            <br />
                            <div className="flex justify-between items-center px-4" style={{ backgroundColor: "#EDEEF2", borderRadius: "16px" }}>
                                <h6 className="mt-2">Metamask</h6>
                                <p className="mt-2">icon</p>
                            </div>
                            <br />
                            <div className="flex justify-between items-center px-4" style={{ backgroundColor: "#EDEEF2", borderRadius: "16px" }}>
                                <h6 className="mt-2">WalletConnect</h6>
                                <p className="mt-2">icon</p>
                            </div>
                            <br />
                            <div className="flex justify-between items-center px-4" style={{ backgroundColor: "#EDEEF2", borderRadius: "16px" }}>
                                <h6 className="mt-2">Coinbase Wallet</h6>
                                <p className="mt-2">icon</p>
                            </div>
                            <br />
                            <div className="flex justify-between items-center px-4" style={{ backgroundColor: "#EDEEF2", borderRadius: "16px" }}>
                                <h6 className="mt-2">Fortmatic</h6>
                                <p className="mt-2">icon</p>
                            </div>
                            <br />
                            <div className="flex justify-between items-center px-4" style={{ backgroundColor: "#EDEEF2", borderRadius: "16px" }}>
                                <h6 className="mt-2">Portis</h6>
                                <p className="mt-2">icon</p>
                            </div>
                        </Modal.Body>
                    </Modal>
                </>

            </div>
        </>
    )
};
const Banner = () => {
    return (
        <>
            <nav className="py-8">
                <div className="md:hidden">
                    {
                        /*Mobile Screen*/
                        <HeaderSm />
                    }
                </div>
                <div className="hidden lg:hidden md:flex py-10">
                    {
                        /*Tablet Screen*/
                        <HeaderMd />
                    }
                </div>
                <div className="hidden lg:flex py-10">
                    {
                        /*desktop Screen*/
                        <HeaderLg />
                    }
                </div>
            </nav>
        </>
    )
};



export default Banner;