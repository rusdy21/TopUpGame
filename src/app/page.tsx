'use client';
import React, { useEffect } from 'react';
import AOS from 'aos';
import Navbar from '../../components/organisms/Navbar/page';
import Image from 'next/image';
import MainBanner from '../../components/organisms/mainbanner/page';
import TransactionStep from '../../components/organisms/transactionstep/page';
import FeaturedGame from '../../components/organisms/featuredgame/page';
import Reached from '../../components/organisms/reached/page';
import Story from '../../components/organisms/story/page';
import Footer from '../../components/organisms/footer/page';



export default function Home() {
useEffect (()=>{
    require('aos/dist/aos');
    require('bootstrap/dist/js/bootstrap.bundle.min');
    AOS.init();
},[]) 
return (
    <>
    <Navbar/>
    <MainBanner/>
    <TransactionStep/>
    <FeaturedGame/>
    <Reached/>
    <Story/>
    <Footer/>
    </>
  );
}
