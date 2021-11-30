import React from 'react';
import './PoolContent.css';

const PoolSm=()=>{
    return (
    <>
    <div>
           <h3 className="text-black text-xl my-4">Pools Overview</h3> 
           <div className="position__box flex justify-between items-center">
               <p className="position__box__left ">+ Position New</p>
               <p className="position__box__right">More <i class="fas fa-chevron-down"></i></p>
           </div>
           <div className="middle__box text-gray-600 bg-white mt-3">
                <i className="fas fa-inbox text-5xl bg-white pt-4"></i>
                <h4 className="text-lg font-light bg-white py-3">Your V3 liquidity positions will appear<br/>here.</h4>
                <button className="wallet__button text-base mb-4">Connect Wallet</button>
           </div>
            <div className=" view__box mt-8">
            <h5 className="text-base mt-2"><i className="fas fa-layer-group mr-1 text-base"></i>
                View V2 liquidity
            </h5>
            </div>
        </div>
    </>
    )
    };
    const PoolMd=()=>{
    return (
    <>
        <div className="pool__large">
            <div className="flex items-center justify-between my-4">
           <h3 className="text-black text-xl ">Pools Overview</h3> 
           <div className="position__box flex  items-center">
               <p className="position__box__left mr-2">+ Position New</p>
               <p className="position__box__right">More <i class="fas fa-chevron-down"></i></p>
           </div>
           </div>

           <div className="w-full flex ">
               <div className="w-2/3 text__box__left py-4 mr-3 ml-1 pool__text__box__left">
                    <h2 className="text-xl text__box__left__head ml-6 font-bold">Learn about providing liquidity <i class="fas fa-external-link-alt text__box__left__head__para"></i></h2>
                    <p className="text-base text__box__left__para ml-6 ">Check out our v3 LP walkthrough and migration<br/>guides.</p>
               </div>

               <div className="w-1/3 text__box__right py-4 mr-1 pool__text__box__right">
                    <h2 className="text-xl text__box__right__head ml-6">Top pools <i class="fas fa-external-link-alt text__box__right__head__icon"></i></h2>
                    <p className="text-base text__box__right__para ml-6">Explore popular pools on Uniswap Analytics.</p>
               </div>
           </div>


           <div className="middle__box text-gray-600 bg-white mt-4 rounded-3xl">
                <i className="fas fa-inbox text-5xl bg-white pt-4"></i>
                <h4 className="text-lg font-extralight bg-white py-3">Your V3 liquidity positions will appear<br/>here.</h4>
                <button className="wallet__button text-base mb-4">Connect Wallet</button>
           </div>
            <div className=" view__box mt-8">
            <h5 className="text-base mt-2 ml-2"><i className="fas fa-layer-group mr-1 text-base"></i>
                View V2 liquidity
            </h5>
            </div>
        </div>
    </>
    )
    };


    const PoolLg=() => {
    return (
    <>
    
    <div className="pool__large">
            <div className="flex items-center justify-between my-4">
           <h3 className="text-black text-xl ">Pools Overview</h3> 
           <div className="position__box flex  items-center">
               <p className="position__box__left mr-2">+ Position New</p>
               <p className="position__box__right">More <i class="fas fa-chevron-down"></i></p>
           </div>
           </div>

           <div className="w-full flex ">
               <div className="guideline w-2/3 text__box__left py-4 mr-3 ml-1 pool__text__box__left">
                    <h2 className="text-xl text__box__left__head ml-6 font-bold">Learn about providing liquidity <i class="fas fa-external-link-alt text__box__left__head__para"></i></h2>
                    <p className="text-base text__box__left__para ml-6 ">Check out our v3 LP walkthrough and migration<br/>guides.</p>
               </div>

               <div className="topPools w-1/3 text__box__right py-4 mr-1 pool__text__box__right">
                    <h2 className="text-xl text__box__right__head ml-6">Top pools <i class="fas fa-external-link-alt text__box__right__head__icon"></i></h2>
                    <p className="text-base text__box__right__para ml-6">Explore popular pools on Uniswap Analytics.</p>
               </div>
           </div>


           <div className="middle__box text-gray-600 bg-white mt-4 rounded-3xl">
                <i className="fas fa-inbox text-5xl bg-white pt-4"></i>
                <h4 className="text-lg font-extralight bg-white py-3">Your V3 liquidity positions will appear<br/>here.</h4>
                <button className="wallet__button text-base mb-4">Connect Wallet</button>
           </div>
            <div className=" view__box mt-8">
            <h5 className="text-base mt-2 ml-2"><i className="fas fa-layer-group mr-1 text-base"></i>
                View V2 liquidity
            </h5>
            </div>
        </div>
        
    </>
    )
    };


    const Pool=()=> {
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
