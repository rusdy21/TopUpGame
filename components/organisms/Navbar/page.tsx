import React from 'react'
import Image from 'next/image';
import Menu from './menu/page';
import Auth from './auth';
import ToogleMenu from './tooglemenu';

export default function Navbar() {
  return (
    <section>
    <nav className="navbar navbar-expand-lg navbar-light bg-light bg-white pt-lg-40 pb-lg-40 pt-30 pb-50">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">
                <Image src="/icon/logo.svg" alt={''} width={60} height={60}/>
            </a>
           <ToogleMenu/>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto text-lg gap-lg-0 gap-2">
                   <Menu title={'Home'} active href='/'/>
                   <Menu title={'Games'} href='/games'/>
                   <Menu title={'Rewards'} href='/'/>
                   <Menu title={'Discover'}/>
                   <Menu title={'Global Rank'}/>                 
                  <Auth isLogin/>
                </ul>
            </div>
        </div>
    </nav>
</section>
  )
}
