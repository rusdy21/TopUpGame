import React from 'react';
import '../styles/checkout.css';
import { Metadata } from 'next';
import Image from 'next/image';
import CheckOutItem from '../../../components/organisms/checkoutitem/app';
import CheckOutDetail from '../../../components/organisms/checkoutdetail/app';
import CheckOutConfirm from '../../../components/organisms/checkoutconfirm/app';

export const metadata: Metadata = {
    title: "Checkout",
    description: "Generated by Rusdy",
  };

export default function CheckOut(){
    return (
    <>
        {/*Checkout Content */}
    <section className="checkout mx-auto pt-md-100 pb-md-145 pt-30 pb-30">
        <div className="container-fluid">
            <div className="logo text-md-center text-start pb-50">
                <a className="" href="#">
                    <Image src="icon/logo.svg" width={60} height={60} alt=""/>
                </a>
            </div>
            <div className="title-text pt-md-50 pt-0">
                <h2 className="text-4xl fw-bold color-palette-1 mb-10">Checkout</h2>
                <p className="text-lg color-palette-1 mb-0">Waktunya meningkatkan cara bermain</p>
            </div>
            <CheckOutItem/>
            <hr/>
            <CheckOutDetail/>
            <CheckOutConfirm/>
        </div>
    </section>
    </>
    );
}