import React, { useState } from 'react'
// import SettingModal from "./SettingModal"
import { Modal, Button } from "react-bootstrap";
import Switch from "../Switch/Switch";
import icon1 from "../../assets/icon1.png";
import icon2 from "../../assets/icon2.svg";
import icon3 from "../../assets/icon3.svg";
import icon4 from "../../assets/icon4.png";
import icon5 from "../../assets/icon5.png";

import tokenimg1 from "../../assets/tokenimg1.png";
import tokenimg2 from "../../assets/tokenimg2.svg";
import tokenimg3 from "../../assets/tokenimg3.png";
import tokenimg4 from "../../assets/tokenimg4.png";
import tokenimg5 from "../../assets/tokenimg5.png";
import tokenimg6 from "../../assets/tokenimg6.png";

import scrollimg1 from "../../assets/scrollimg1.png";
import scrollimg2 from "../../assets/scrollimg2.svg";
import scrollimg3 from "../../assets/scrollimg3.svg";
import scrollimg4 from "../../assets/scrollimg4.svg";
import scrollimg5 from "../../assets/scrollimg5.png";
import scrollimg6 from "../../assets/scrollimg6.svg";
import scrollimg7 from "../../assets/scrollimg7.png";
import scrollimg8 from "../../assets/scrollimg8.svg";
import scrollimg9 from "../../assets/scrollimg9.svg";
import bnb from "../../assets/bnb.png";
import './Banner.css';

const HeaderSm = () => {
    const [showSettings, setShowSettings] = useState(false);
    const handleCloseSettings = () => setShowSettings(false);
    const handleShowSettings = () => setShowSettings(true);

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [showToken, setShowToken] = useState(false);
    const handleClosed = () => setShowToken(false);
    const handleShowToken = () => setShowToken(true);

    return (
        <>
            <div className="bg-white w-11/12 mx-auto p-3 rounded-3xl ">
                <div className="header__head flex items-center justify-between bg-white my-2 mb-3">
                    <h4 className="font-semibold text-2xl bg-white">Swap</h4>
                    <i className="fas fa-cog text-2xl bg-white cursor-pointer" onClick={handleShowSettings}></i>
                    <>
                        <Modal show={showSettings} onHide={handleCloseSettings}>
                            <Modal.Header closeButton>
                                <Modal.Title>Transaction Settings</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <p></p>
                                {/********* */}

                                <div>
                                    <h2 className="text-gray-600 font-bold text-xl">Transcetion Settings</h2>
                                    <h2 className="text-gray-600 text-lg pb-2">Slippage Tolerance ?</h2>
                                    <div className="flex justify-between items-center">
                                        <h4 className="slippage-button  ">Auto</h4>
                                        <input type="text" id="fname-one" name="fname" placeholder="0.10%" />
                                    </div>
                                    <h2 className="text-gray-600 text-lg pt-3 pb-1">Transection Deadline</h2>
                                    <div className="flex justify-between items-center">
                                        <input type="text" id="fname-one" name="fname" placeholder="30" />
                                        <h4 className="text-xl">minutes</h4>
                                    </div>
                                    <h2 className="text-gray-600 font-bold text-xl pt-4">Interface Settings</h2>
                                    <div className="flex justify-between items-center py-3">
                                        <h4 className="text-gray-600 text-lg">Auto Router ?</h4>
                                        <Switch />
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <h4 className="text-gray-600 text-lg">Expert Model ?</h4>
                                        <Switch />
                                    </div>
                                </div>

                                {/********* */}
                            </Modal.Body>
                        </Modal>
                    </>
                </div>
                <div className="header__section__one flex items-center justify-between bg-gray-100 py-3 mb-1 border-1 border-gray-400 rounded-lg" >
                    <h3 onClick={handleShowToken} className="cursor-pointer mb-2 flex items-center bg-white py-2 px-3 rounded-2xl ml-3"><img src={bnb} style={{width:'5vw'}} alt="" />&nbsp;&nbsp;<strong className="font-bold text-2xl">BNB</strong>&nbsp;&nbsp;<i class="fas fa-chevron-down"></i></h3>
                    <h3 className="mb-2 text-3xl items-center font-bold bg-gray-100  text-gray-400 py-1 px-3 rounded-lg mr-3">0.0</h3>
                </div>

                <div className="header__section__one flex items-center justify-between bg-gray-100 py-3 mb-3 border-1 border-gray-400 rounded-lg">
                    <h3 onClick={handleShowToken} className="cursor-pointer mb-2 flex items-center bg-pink-600 py-2 px-3  ml-3 rounded-xl"><span className=" text-2xl bg-pink-600 text-white">Select a token</span>&nbsp;&nbsp;<i class="fas fa-chevron-down pt-2 pr-1 bg-pink-600 text-white"></i></h3>
                    <h3 className="mb-2 text-3xl items-center font-bold bg-gray-100  text-gray-400 py-1 px-3 rounded-lg mr-3">0.0</h3>
                </div>
                <>
                    <Modal show={showToken} onHide={handleClosed}>
                        <Modal.Header closeButton>
                            <Modal.Title>Select a Token</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>

                            <input type="text" id="token-model-input" name="fname" placeholder="Search name or paste address" />
                            <div className="scroll-bg">
                                <div className="scroll-div-sm">
                                    <div className="scroll-object">
                                        <div className="flex items-center">
                                            <div >
                                                <img className="Token-images w-8 pb-3" src={bnb} />
                                            </div>
                                            <div className="ml-4">
                                                <h3 className="text-lg  font-semibold mb-0">BNB</h3>
                                                <p className="text-sm text-gray-500 ">Binance</p>
                                            </div>
                                        </div>

                                        <div className="flex items-center">
                                            <div>
                                                <img className="w-8 pb-3" src={scrollimg2} />
                                            </div>
                                            <div className="ml-4">
                                                <h3 className="text-lg  font-semibold mb-0">1INCH</h3>
                                                <p className="text-sm text-gray-500 ">1Inch</p>
                                            </div>
                                        </div>

                                        <div className="flex items-center">
                                            <div>
                                                <img className="w-8 pb-3" src={scrollimg3} />
                                            </div>
                                            <div className="ml-4">
                                                <h3 className="text-lg  font-semibold mb-0">AAVE</h3>
                                                <p className="text-sm text-gray-500 ">AAVE Token</p>
                                            </div>
                                        </div>

                                        <div className="flex items-center">
                                            <div>
                                                <img className="w-8 pb-3" src={scrollimg4} />
                                            </div>
                                            <div className="ml-4">
                                                <h3 className="text-lg  font-semibold mb-0">AMP</h3>
                                                <p className="text-sm text-gray-500 ">AMP Token</p>
                                            </div>
                                        </div>

                                        <div className="flex items-center">
                                            <div>
                                                <img className="w-8 pb-3" src={scrollimg5} />
                                            </div>
                                            <div className="ml-4">
                                                <h3 className="text-lg  font-semibold mb-0">ANT</h3>
                                                <p className="text-sm text-gray-500 ">Arogan Network Token</p>
                                            </div>
                                        </div>

                                        <div className="flex items-center">
                                            <div>
                                                <img className="w-8 pb-3" src={scrollimg6} />
                                            </div>
                                            <div className="ml-4">
                                                <h3 className="text-lg  font-semibold mb-0">BAL</h3>
                                                <p className="text-sm text-gray-500 ">Balancer</p>
                                            </div>
                                        </div>

                                        <div className="flex items-center">
                                            <div>
                                                <img className="w-8 pb-3" src={scrollimg7} />
                                            </div>
                                            <div className="ml-4">
                                                <h3 className="text-lg  font-semibold mb-0">BAND</h3>
                                                <p className="text-sm text-gray-500 ">Band Protocol</p>
                                            </div>
                                        </div>

                                        <div className="flex items-center">
                                            <div>
                                                <img className="w-8 pb-3" src={scrollimg8} />
                                            </div>
                                            <div className="ml-4">
                                                <h3 className="text-lg  font-semibold mb-0">BAT</h3>
                                                <p className="text-sm text-gray-500 ">BasicAttentionToken</p>
                                            </div>
                                        </div>

                                        <div className="flex items-center">
                                            <div>
                                                <img className="w-8 pb-3" src={scrollimg9} />
                                            </div>
                                            <div className="ml-4">
                                                <h3 className="text-lg  font-semibold mb-0">BNT</h3>
                                                <p className="text-sm text-gray-500 ">Bancor</p>
                                            </div>
                                        </div>

                                        {/* <div className="flex items-center">
                                            <div >
                                                <img className="Token-images w-8 pb-3" src={scrollimg1} />
                                            </div>
                                            <div className="ml-4">
                                                <h3 className="text-lg  font-semibold mb-0">ETH</h3>
                                                <p className="text-sm text-gray-500 ">Ether</p>
                                            </div>
                                        </div> */}

                                        <div className="flex items-center">
                                            <div>
                                                <img className="w-8 pb-3" src={scrollimg2} />
                                            </div>
                                            <div className="ml-4">
                                                <h3 className="text-lg  font-semibold mb-0">1INCH</h3>
                                                <p className="text-sm text-gray-500 ">1Inch</p>
                                            </div>
                                        </div>

                                        <div className="flex items-center">
                                            <div>
                                                <img className="w-8 pb-3" src={scrollimg3} />
                                            </div>
                                            <div className="ml-4">
                                                <h3 className="text-lg  font-semibold mb-0">AAVE</h3>
                                                <p className="text-sm text-gray-500 ">AAVE Token</p>
                                            </div>
                                        </div>

                                        <div className="flex items-center">
                                            <div>
                                                <img className="w-8 pb-3" src={scrollimg4} />
                                            </div>
                                            <div className="ml-4">
                                                <h3 className="text-lg  font-semibold mb-0">AMP</h3>
                                                <p className="text-sm text-gray-500 ">AMP Token</p>
                                            </div>
                                        </div>

                                        <div className="flex items-center">
                                            <div>
                                                <img className="w-8 pb-3" src={scrollimg5} />
                                            </div>
                                            <div className="ml-4">
                                                <h3 className="text-lg  font-semibold mb-0">ANT</h3>
                                                <p className="text-sm text-gray-500 ">Arogan Network Token</p>
                                            </div>
                                        </div>

                                        <div className="flex items-center">
                                            <div>
                                                <img className="w-8 pb-3" src={scrollimg6} />
                                            </div>
                                            <div className="ml-4">
                                                <h3 className="text-lg  font-semibold mb-0">BAL</h3>
                                                <p className="text-sm text-gray-500 ">Balancer</p>
                                            </div>
                                        </div>

                                        <div className="flex items-center">
                                            <div>
                                                <img className="w-8 pb-3" src={scrollimg7} />
                                            </div>
                                            <div className="ml-4">
                                                <h3 className="text-lg  font-semibold mb-0">BAND</h3>
                                                <p className="text-sm text-gray-500 ">Band Protocol</p>
                                            </div>
                                        </div>

                                        <div className="flex items-center">
                                            <div>
                                                <img className="w-8 pb-3" src={scrollimg8} />
                                            </div>
                                            <div className="ml-4">
                                                <h3 className="text-lg  font-semibold mb-0">BAT</h3>
                                                <p className="text-sm text-gray-500 ">BasicAttentionToken</p>
                                            </div>
                                        </div>



                                    </div>
                                </div>
                            </div>
                        </Modal.Body>
                    </Modal>
                </>

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
const HeaderMd = () => {
    const [showSettings, setShowSettings] = useState(false);
    const handleCloseSettings = () => setShowSettings(false);
    const handleShowSettings = () => setShowSettings(true);

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [showToken, setShowToken] = useState(false);
    const handleClosed = () => setShowToken(false);
    const handleShowToken = () => setShowToken(true);
    return (
        <>
            <div className="bg-white w-5/12 mx-auto p-3 rounded-3xl ">
                <div className="header__head flex items-center justify-between bg-white my-1 mb-3">
                    <h4 className="font-semibold text-2xl bg-white">Swap</h4>
                    <i className="fas fa-cog text-2xl bg-white cursor-pointer" onClick={handleShowSettings}></i>
                    <>
                        <Modal show={showSettings} onHide={handleCloseSettings}>
                            <Modal.Header closeButton>
                                <Modal.Title>Transaction Settings</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                {/* <p>Slippage tolerance?</p> */}
                                <div>
                                    <h2 className="text-gray-600 font-bold text-xl">Transcetion Settings</h2>
                                    <h2 className="text-gray-600 text-lg pb-2">Slippage Tolerance ?</h2>
                                    <div className="flex justify-between items-center">
                                        <h4 className="slippage-button  ">Auto</h4>
                                        <input type="text" id="fname-one" name="fname" placeholder="0.10%" />
                                    </div>
                                    <h2 className="text-gray-600 text-lg pt-3 pb-1">Transection Deadline</h2>
                                    <div className="flex justify-between items-center">
                                        <input type="text" id="fname-one" name="fname" placeholder="30" />
                                        <h4 className="text-xl">minutes</h4>
                                    </div>
                                    <h2 className="text-gray-600 font-bold text-xl pt-4">Interface Settings</h2>
                                    <div className="flex justify-between items-center py-3">
                                        <h4 className="text-gray-600 text-lg">Auto Router ?</h4>
                                        <Switch />
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <h4 className="text-gray-600 text-lg">Expert Model ?</h4>
                                        <Switch />
                                    </div>
                                </div>
                            </Modal.Body>
                        </Modal>
                    </>
                </div>
                <div className="header__section__one flex items-center justify-between bg-gray-100 py-3 mb-1 border-1 border-gray-400 rounded-lg">
                    <h3 onClick={handleShowToken} className="cursor-pointer flex items-center mb-2 bg-white py-2 px-3 rounded-2xl ml-3"><img src={bnb} style={{width:'3vw'}} alt="" />&nbsp;&nbsp;<strong className="font-semibold text-xl">BNB</strong>&nbsp;&nbsp;<i class="fas fa-chevron-down"></i></h3>
                    <h3 className="text-3xl mb-2 items-center font-bold bg-gray-100  text-gray-400 py-1 px-3 rounded-lg mr-3">0.0</h3>
                </div>




                <div className="header__section__one flex items-center justify-between bg-gray-100 py-3 mb-3 border-1 border-gray-400 rounded-lg">
                    <h3 onClick={handleShowToken} className="cursor-pointer mb-2 flex items-center bg-pink-600 py-2 px-3  ml-3 rounded-xl"><span className=" text-lg bg-pink-600 text-white">Select a token</span>&nbsp;&nbsp;<i class="fas fa-chevron-down pt-2 pr-1 bg-pink-600 text-white"></i></h3>
                    <h3 className="mb-2 text-3xl items-center font-bold bg-gray-100  text-gray-400 py-1 px-3 rounded-lg mr-3">0.0</h3>
                </div>
                <>
                    <Modal show={showToken} onHide={handleClosed}>
                        <Modal.Header closeButton>
                            <Modal.Title>Select a Token</Modal.Title>
                        </Modal.Header>
                        <Modal.Body> <div>
                            {/********* */}
                            <div className="px-3 common-boxes-container">
                                
                                <input type="text" id="token-model-input-large" name="fname" placeholder="Search name or paste address" />
                                <h3 className="text-xl pt-3">Common bases ?</h3>
                                <div className="common-box-images">
                                    <div className="logo-images-container-large  ">
                                        <div>
                                            <img className="logo-images w-6 " src={bnb} />
                                        </div>
                                        <h3 className="mt-2 ml-2 text-base">BNB</h3>
                                    </div>

                                    {/* <div className="logo-images-container-large  ">
                                        <div>
                                            <img className="logo-images w-6 " src={tokenimg2} />
                                        </div>
                                        <h3 className="mt-2 ml-2 text-base">DAI</h3>
                                    </div>
                                    <div className="logo-images-container-large  ">
                                        <div>
                                            <img className="logo-images w-6 " src={tokenimg3} />
                                        </div>
                                        <h3 className="mt-2 ml-2 text-base">USDC</h3>
                                    </div> */}

                                    <div className="logo-images-container-large  ">
                                        <div>
                                            <img className="logo-images w-6 " src={tokenimg4} />
                                        </div>
                                        <h3 className="mt-2 ml-2 text-base">USDT</h3>
                                    </div>
                                </div>

                                <div className="common-box-images">
                                    <div className="logo-images-container-large  logo-images-container-large-extra">
                                        <div>
                                            <img className="logo-images w-6 " src={tokenimg5} />
                                        </div>
                                        <h3 className="mt-2 ml-2 text-base">WBTC</h3>
                                    </div>

                                    <div className="logo-images-container-large logo-images-container-large-extra ">
                                        <div>
                                            <img className="logo-images w-6 " src={tokenimg6} />
                                        </div>
                                        <h3 className="mt-2 ml-2 text-base">WBNB</h3>
                                    </div>
                                </div>

                            </div>


                            <div className="scroll-bg">
                                <div className="scroll-div">
                                    <div className="scroll-object">
                                        <div className="flex items-center">
                                            <div >
                                                <img className="Token-images w-8 pb-3" src={bnb} />
                                            </div>
                                            <div className="ml-4">
                                                <h3 className="text-lg  font-semibold mb-0">BNB</h3>
                                                <p className="text-sm text-gray-500 ">Binance</p>
                                            </div>
                                        </div>

                                        <div className="flex items-center">
                                            <div>
                                                <img className="w-8 pb-3" src={scrollimg2} />
                                            </div>
                                            <div className="ml-4">
                                                <h3 className="text-lg  font-semibold mb-0">1INCH</h3>
                                                <p className="text-sm text-gray-500 ">1Inch</p>
                                            </div>
                                        </div>

                                        <div className="flex items-center">
                                            <div>
                                                <img className="w-8 pb-3" src={scrollimg3} />
                                            </div>
                                            <div className="ml-4">
                                                <h3 className="text-lg  font-semibold mb-0">AAVE</h3>
                                                <p className="text-sm text-gray-500 ">AAVE Token</p>
                                            </div>
                                        </div>

                                        <div className="flex items-center">
                                            <div>
                                                <img className="w-8 pb-3" src={scrollimg4} />
                                            </div>
                                            <div className="ml-4">
                                                <h3 className="text-lg  font-semibold mb-0">AMP</h3>
                                                <p className="text-sm text-gray-500 ">AMP Token</p>
                                            </div>
                                        </div>

                                        <div className="flex items-center">
                                            <div>
                                                <img className="w-8 pb-3" src={scrollimg5} />
                                            </div>
                                            <div className="ml-4">
                                                <h3 className="text-lg  font-semibold mb-0">ANT</h3>
                                                <p className="text-sm text-gray-500 ">Arogan Network Token</p>
                                            </div>
                                        </div>

                                        <div className="flex items-center">
                                            <div>
                                                <img className="w-8 pb-3" src={scrollimg6} />
                                            </div>
                                            <div className="ml-4">
                                                <h3 className="text-lg  font-semibold mb-0">BAL</h3>
                                                <p className="text-sm text-gray-500 ">Balancer</p>
                                            </div>
                                        </div>

                                        <div className="flex items-center">
                                            <div>
                                                <img className="w-8 pb-3" src={scrollimg7} />
                                            </div>
                                            <div className="ml-4">
                                                <h3 className="text-lg  font-semibold mb-0">BAND</h3>
                                                <p className="text-sm text-gray-500 ">Band Protocol</p>
                                            </div>
                                        </div>

                                        <div className="flex items-center">
                                            <div>
                                                <img className="w-8 pb-3" src={scrollimg8} />
                                            </div>
                                            <div className="ml-4">
                                                <h3 className="text-lg  font-semibold mb-0">BAT</h3>
                                                <p className="text-sm text-gray-500 ">BasicAttentionToken</p>
                                            </div>
                                        </div>

                                        <div className="flex items-center">
                                            <div>
                                                <img className="w-8 pb-3" src={scrollimg9} />
                                            </div>
                                            <div className="ml-4">
                                                <h3 className="text-lg  font-semibold mb-0">BNT</h3>
                                                <p className="text-sm text-gray-500 ">Bancor</p>
                                            </div>
                                        </div>

                                        {/* <div className="flex items-center">
                                            <div >
                                                <img className="Token-images w-8 pb-3" src={scrollimg1} />
                                            </div>
                                            <div className="ml-4">
                                                <h3 className="text-lg  font-semibold mb-0">ETH</h3>
                                                <p className="text-sm text-gray-500 ">Ether</p>
                                            </div>
                                        </div> */}

                                        <div className="flex items-center">
                                            <div>
                                                <img className="w-8 pb-3" src={scrollimg2} />
                                            </div>
                                            <div className="ml-4">
                                                <h3 className="text-lg  font-semibold mb-0">1INCH</h3>
                                                <p className="text-sm text-gray-500 ">1Inch</p>
                                            </div>
                                        </div>

                                        <div className="flex items-center">
                                            <div>
                                                <img className="w-8 pb-3" src={scrollimg3} />
                                            </div>
                                            <div className="ml-4">
                                                <h3 className="text-lg  font-semibold mb-0">AAVE</h3>
                                                <p className="text-sm text-gray-500 ">AAVE Token</p>
                                            </div>
                                        </div>

                                        <div className="flex items-center">
                                            <div>
                                                <img className="w-8 pb-3" src={scrollimg4} />
                                            </div>
                                            <div className="ml-4">
                                                <h3 className="text-lg  font-semibold mb-0">AMP</h3>
                                                <p className="text-sm text-gray-500 ">AMP Token</p>
                                            </div>
                                        </div>

                                        <div className="flex items-center">
                                            <div>
                                                <img className="w-8 pb-3" src={scrollimg5} />
                                            </div>
                                            <div className="ml-4">
                                                <h3 className="text-lg  font-semibold mb-0">ANT</h3>
                                                <p className="text-sm text-gray-500 ">Arogan Network Token</p>
                                            </div>
                                        </div>

                                        <div className="flex items-center">
                                            <div>
                                                <img className="w-8 pb-3" src={scrollimg6} />
                                            </div>
                                            <div className="ml-4">
                                                <h3 className="text-lg  font-semibold mb-0">BAL</h3>
                                                <p className="text-sm text-gray-500 ">Balancer</p>
                                            </div>
                                        </div>

                                        <div className="flex items-center">
                                            <div>
                                                <img className="w-8 pb-3" src={scrollimg7} />
                                            </div>
                                            <div className="ml-4">
                                                <h3 className="text-lg  font-semibold mb-0">BAND</h3>
                                                <p className="text-sm text-gray-500 ">Band Protocol</p>
                                            </div>
                                        </div>

                                        <div className="flex items-center">
                                            <div>
                                                <img className="w-8 pb-3" src={scrollimg8} />
                                            </div>
                                            <div className="ml-4">
                                                <h3 className="text-lg  font-semibold mb-0">BAT</h3>
                                                <p className="text-sm text-gray-500 ">BasicAttentionToken</p>
                                            </div>
                                        </div>

                                        <div className="flex items-center">
                                            <div>
                                                <img className="w-8 pb-3" src={scrollimg9} />
                                            </div>
                                            <div className="ml-4">
                                                <h3 className="text-lg  font-semibold mb-0">BNT</h3>
                                                <p className="text-sm text-gray-500 ">Bancor</p>
                                            </div>
                                        </div>




                                    </div>
                                </div>
                            </div>
                            <p className="text-xl rounded-lg font-semibold bg-gray-200  py-3 text-pink-600 flex items-center justify-center"><i class="far fa-edit mr-1 bg-gray-200"></i> Manage Token Lists</p>

                        </div>
                            {/* ************* */}</Modal.Body>
                    </Modal>
                </>

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
const HeaderLg = () => {
    const [showSettings, setShowSettings] = useState(false);
    const handleCloseSettings = () => setShowSettings(false);
    const handleShowSettings = () => setShowSettings(true);

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [showToken, setShowToken] = useState(false);
    const handleClosed = () => setShowToken(false);
    const handleShowToken = () => setShowToken(true);
    return (
        <>
            <div className="bg-white w-5/12 mx-auto p-3 rounded-3xl">
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
                                {/* <p>Slippage tolerance?aaaaa</p> */}
                                <div>
                                    <h2 className="text-gray-600 font-bold text-xl">Transcetion Settings</h2>
                                    <h2 className="text-gray-600 text-lg pb-2">Slippage Tolerance ?</h2>
                                    <div className="flex justify-between items-center">
                                        <h4 className="slippage-button  ">Auto</h4>
                                        <input type="text" id="fname-one" name="fname" placeholder="0.10%" />
                                    </div>
                                    <h2 className="text-gray-600 text-lg pt-3 pb-1">Transection Deadline</h2>
                                    <div className="flex justify-between items-center">
                                        <input type="text" id="fname-one" name="fname" placeholder="30" />
                                        <h4 className="text-xl">minutes</h4>
                                    </div>
                                    <h2 className="text-gray-600 font-bold text-xl pt-4">Interface Settings</h2>
                                    <div className="flex justify-between items-center py-3">
                                        <h4 className="text-gray-600 text-lg">Auto Router ?</h4>
                                        <Switch />
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <h4 className="text-gray-600 text-lg">Expert Model ?</h4>
                                        <Switch />
                                    </div>
                                </div>
                            </Modal.Body>
                        </Modal>
                    </>
                </div>
                <div className="header__section__one flex items-center justify-between bg-gray-100 py-3 mb-1 border-gray-400 rounded-lg">
                    <h3 onClick={handleShowToken} className="cursor-pointer flex items-center mb-2 bg-white py-2 px-3 rounded-2xl ml-3"><img src={bnb} style={{width:'2vw'}} alt="" />&nbsp;&nbsp;<strong className="font-semibold text-xl">BNB</strong>&nbsp;&nbsp;<i class="fas fa-chevron-down"></i></h3>
                    <h3 className="text-3xl mb-2 items-center font-bold bg-gray-100  text-gray-400 py-1 px-3 rounded-lg mr-3">0.0</h3>
                </div>

                <div className="header__section__one flex items-center justify-between bg-gray-100 py-3 mb-3 border-gray-400 rounded-lg">
                    <h3 onClick={handleShowToken} className="cursor-pointer mb-2 flex items-center bg-pink-600 py-2 px-3  ml-3 rounded-xl"><span className=" text-xl bg-pink-600 text-white">Select a token</span>&nbsp;&nbsp;<i class="fas fa-chevron-down pt-2 pr-1 bg-pink-600 text-white"></i></h3>
                    <h3 className="mb-2 text-3xl items-center font-bold bg-gray-100  text-gray-400 py-1 px-3 rounded-lg mr-3">0.0</h3>
                </div>
                <>
                    <Modal show={showToken} onHide={handleClosed}>
                        <Modal.Header closeButton>
                            <Modal.Title>Select a token</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            {/* ************* */}
                            <div>
                                {/********* */}
                                <div className="px-3 common-boxes-container">
                                    {/* <div className="flex justify-between items-center  mt-4 mb-2">
            <h3 className="text-xl ">Select a token</h3>
            <h1 className="text-lg">X</h1>
        </div> */}
                                    <input type="text" id="token-model-input-large" name="fname" placeholder="Search name or paste address" />
                                    <h3 className="text-xl pt-3">Common bases ?</h3>
                                    <div className="common-box-images">
                                        <div className="logo-images-container-large">
                                            <div>
                                                <img className="logo-images w-6 " src={bnb} />
                                            </div>
                                            <h3 className="mt-2 ml-2 text-base">BNB</h3>
                                        </div>

                                        {/* <div className="logo-images-container-large  ">
                                            <div>
                                                <img className="logo-images w-6 " src={tokenimg2} />
                                            </div>
                                            <h3 className="mt-2 ml-2 text-base">DAI</h3>
                                        </div>
                                        <div className="logo-images-container-large  ">
                                            <div>
                                                <img className="logo-images w-6 " src={tokenimg3} />
                                            </div>
                                            <h3 className="mt-2 ml-2 text-base">USDC</h3>
                                        </div> */}

                                        <div className="logo-images-container-large  ">
                                            <div>
                                                <img className="logo-images w-6 " src={tokenimg4} />
                                            </div>
                                            <h3 className="mt-2 ml-2 text-base">USDT</h3>
                                        </div>
                                    </div>

                                    <div className="common-box-images">
                                        <div className="logo-images-container-large  logo-images-container-large-extra">
                                            <div>
                                                <img className="logo-images w-5 " src={tokenimg5} />
                                            </div>
                                            <h3 className="mt-2 ml-2 text-base">WBTC</h3>
                                        </div>

                                        <div className="logo-images-container-large logo-images-container-large-extra ">
                                            <div>
                                                <img className="logo-images w-6 " src={tokenimg6} />
                                            </div>
                                            <h3 className="mt-2 ml-2 text-base">WBNB</h3>
                                        </div>
                                    </div>

                                </div>


                                <div className="scroll-bg">
                                    <div className="scroll-div">
                                        <div className="scroll-object">
                                            <div className="flex items-center">
                                                <div >
                                                    <img className="Token-images w-8 pb-3" src={bnb} />
                                                </div>
                                                <div className="ml-4">
                                                    <h3 className="text-lg  font-semibold mb-0">BNB</h3>
                                                    <p className="text-sm text-gray-500 ">Binance</p>
                                                </div>
                                            </div>

                                            <div className="flex items-center">
                                                <div>
                                                    <img className="w-8 pb-3" src={scrollimg2} />
                                                </div>
                                                <div className="ml-4">
                                                    <h3 className="text-lg  font-semibold mb-0">1INCH</h3>
                                                    <p className="text-sm text-gray-500 ">1Inch</p>
                                                </div>
                                            </div>

                                            <div className="flex items-center">
                                                <div>
                                                    <img className="w-8 pb-3" src={scrollimg3} />
                                                </div>
                                                <div className="ml-4">
                                                    <h3 className="text-lg  font-semibold mb-0">AAVE</h3>
                                                    <p className="text-sm text-gray-500 ">AAVE Token</p>
                                                </div>
                                            </div>

                                            <div className="flex items-center">
                                                <div>
                                                    <img className="w-8 pb-3" src={scrollimg4} />
                                                </div>
                                                <div className="ml-4">
                                                    <h3 className="text-lg  font-semibold mb-0">AMP</h3>
                                                    <p className="text-sm text-gray-500 ">AMP Token</p>
                                                </div>
                                            </div>

                                            <div className="flex items-center">
                                                <div>
                                                    <img className="w-8 pb-3" src={scrollimg5} />
                                                </div>
                                                <div className="ml-4">
                                                    <h3 className="text-lg  font-semibold mb-0">ANT</h3>
                                                    <p className="text-sm text-gray-500 ">Arogan Network Token</p>
                                                </div>
                                            </div>

                                            <div className="flex items-center">
                                                <div>
                                                    <img className="w-8 pb-3" src={scrollimg6} />
                                                </div>
                                                <div className="ml-4">
                                                    <h3 className="text-lg  font-semibold mb-0">BAL</h3>
                                                    <p className="text-sm text-gray-500 ">Balancer</p>
                                                </div>
                                            </div>

                                            <div className="flex items-center">
                                                <div>
                                                    <img className="w-8 pb-3" src={scrollimg7} />
                                                </div>
                                                <div className="ml-4">
                                                    <h3 className="text-lg  font-semibold mb-0">BAND</h3>
                                                    <p className="text-sm text-gray-500 ">Band Protocol</p>
                                                </div>
                                            </div>

                                            <div className="flex items-center">
                                                <div>
                                                    <img className="w-8 pb-3" src={scrollimg8} />
                                                </div>
                                                <div className="ml-4">
                                                    <h3 className="text-lg  font-semibold mb-0">BAT</h3>
                                                    <p className="text-sm text-gray-500 ">BasicAttentionToken</p>
                                                </div>
                                            </div>

                                            <div className="flex items-center">
                                                <div>
                                                    <img className="w-8 pb-3" src={scrollimg9} />
                                                </div>
                                                <div className="ml-4">
                                                    <h3 className="text-lg  font-semibold mb-0">BNT</h3>
                                                    <p className="text-sm text-gray-500 ">Bancor</p>
                                                </div>
                                            </div>

                                            {/* <div className="flex items-center">
                                                <div >
                                                    <img className="Token-images w-8 pb-3" src={scrollimg1} />
                                                </div>
                                                <div className="ml-4">
                                                    <h3 className="text-lg  font-semibold mb-0">ETH</h3>
                                                    <p className="text-sm text-gray-500 ">Ether</p>
                                                </div>
                                            </div> */}

                                            <div className="flex items-center">
                                                <div>
                                                    <img className="w-8 pb-3" src={scrollimg2} />
                                                </div>
                                                <div className="ml-4">
                                                    <h3 className="text-lg  font-semibold mb-0">1INCH</h3>
                                                    <p className="text-sm text-gray-500 ">1Inch</p>
                                                </div>
                                            </div>

                                            <div className="flex items-center">
                                                <div>
                                                    <img className="w-8 pb-3" src={scrollimg3} />
                                                </div>
                                                <div className="ml-4">
                                                    <h3 className="text-lg  font-semibold mb-0">AAVE</h3>
                                                    <p className="text-sm text-gray-500 ">AAVE Token</p>
                                                </div>
                                            </div>

                                            <div className="flex items-center">
                                                <div>
                                                    <img className="w-8 pb-3" src={scrollimg4} />
                                                </div>
                                                <div className="ml-4">
                                                    <h3 className="text-lg  font-semibold mb-0">AMP</h3>
                                                    <p className="text-sm text-gray-500 ">AMP Token</p>
                                                </div>
                                            </div>

                                            <div className="flex items-center">
                                                <div>
                                                    <img className="w-8 pb-3" src={scrollimg5} />
                                                </div>
                                                <div className="ml-4">
                                                    <h3 className="text-lg  font-semibold mb-0">ANT</h3>
                                                    <p className="text-sm text-gray-500 ">Arogan Network Token</p>
                                                </div>
                                            </div>

                                            <div className="flex items-center">
                                                <div>
                                                    <img className="w-8 pb-3" src={scrollimg6} />
                                                </div>
                                                <div className="ml-4">
                                                    <h3 className="text-lg  font-semibold mb-0">BAL</h3>
                                                    <p className="text-sm text-gray-500 ">Balancer</p>
                                                </div>
                                            </div>

                                            <div className="flex items-center">
                                                <div>
                                                    <img className="w-8 pb-3" src={scrollimg7} />
                                                </div>
                                                <div className="ml-4">
                                                    <h3 className="text-lg  font-semibold mb-0">BAND</h3>
                                                    <p className="text-sm text-gray-500 ">Band Protocol</p>
                                                </div>
                                            </div>

                                            <div className="flex items-center">
                                                <div>
                                                    <img className="w-8 pb-3" src={scrollimg8} />
                                                </div>
                                                <div className="ml-4">
                                                    <h3 className="text-lg  font-semibold mb-0">BAT</h3>
                                                    <p className="text-sm text-gray-500 ">BasicAttentionToken</p>
                                                </div>
                                            </div>

                                            <div className="flex items-center">
                                                <div>
                                                    <img className="w-8 pb-3" src={scrollimg9} />
                                                </div>
                                                <div className="ml-4">
                                                    <h3 className="text-lg  font-semibold mb-0">BNT</h3>
                                                    <p className="text-sm text-gray-500 ">Bancor</p>
                                                </div>
                                            </div>




                                        </div>
                                    </div>
                                </div>
                                <p className="text-xl rounded-lg font-semibold bg-gray-200  py-3 text-pink-600 flex items-center justify-center"><i class="far fa-edit mr-1 bg-gray-200"></i> Manage Token Lists</p>

                            </div>
                            {/* ************* */}

                        </Modal.Body>
                    </Modal>
                </>

                <h3 className="hover:bg-pink-300 header__button bg-pink-200 text-pink-700 flex justify-center py-4 rounded-3xl text-xl font-semibold cursor-pointer" onClick={handleShow}>Connect Wallet</h3>
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