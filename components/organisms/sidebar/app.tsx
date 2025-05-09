import React from 'react'
import Image from 'next/image'
import SideBarItem from '../../molecules/sidebaritem/page'

export default function SideBar() {
  return (
    <section className="sidebar">
            <div className="content pt-50 pb-30 ps-30">
                <div className="user text-center pb-50 pe-30">
                    <Image src="/img/avatar-1.png" width={90} height={90} className="img-fluid mb-20" alt=''/>
                    <h2 className="fw-bold text-xl color-palette-1 m-0">Shayna Anne</h2>
                    <p className="color-palette-2 m-0">shayna@anne.com</p>
                </div>
                <div className="menus">
                    <SideBarItem  icon='overview' link='member/overview' name='Overview' active/>
                    <SideBarItem icon='transaction' link='member/overview' name='Transactions'/>
                    <SideBarItem icon='messages' link='member/overview' name='Messages'/>
                    <SideBarItem icon='card' link='member/overview' name='Card'/>
                    <SideBarItem icon='rewards' link='member/overview' name='Rewards'/>
                    <SideBarItem icon='setting' link='member/overview' name='Settings'/>
                    <SideBarItem icon='logout' link='member/overview' name='Log Out'/>  
                </div>
                <div className="sidebar-footer pt-73 pe-30">
                    <div className="footer-card">
                        <div className="d-flex justify-content-between mb-20">
                            <svg width="50" height="50" viewBox="0 0 50 50" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="50"
                                    height="50">
                                    <circle cx="25" cy="25" r="25" fill="#D7D7F8" />
                                </mask>
                                <g mask="url(#mask0)">
                                    <circle cx="25" cy="25" r="25" fill="#D7D7F8" />
                                    <rect x="8.125" y="15.625" width="33.75" height="38.125" rx="10" fill="#695DE9" />
                                    <path d="M31.25 28.75L31.25 42.5" stroke="white" stroke-width="2.5"
                                        stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M25 33.75L25 42.5" stroke="#B7B0F4" stroke-width="2.5"
                                        stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M18.75 37.5L18.75 42.5" stroke="#B7B0F4" stroke-width="2.5"
                                        stroke-linecap="round" stroke-linejoin="round" />
                                    <circle cx="25" cy="16.25" r="8.75" fill="#2B2467" />
                                    <path
                                        d="M24.4056 11.8294C24.5927 11.2536 25.4073 11.2536 25.5944 11.8294L26.2629 13.8868C26.3466 14.1443 26.5865 14.3186 26.8573 14.3186H29.0206C29.626 14.3186 29.8777 15.0934 29.3879 15.4493L27.6378 16.7208C27.4188 16.88 27.3271 17.1621 27.4108 17.4196L28.0792 19.477C28.2663 20.0528 27.6073 20.5316 27.1175 20.1757L25.3674 18.9042C25.1483 18.745 24.8517 18.745 24.6326 18.9042L22.8825 20.1757C22.3927 20.5316 21.7337 20.0528 21.9208 19.4769L22.5892 17.4196C22.6729 17.1621 22.5812 16.88 22.3622 16.7208L20.6121 15.4493C20.1223 15.0934 20.374 14.3186 20.9794 14.3186H23.1427C23.4135 14.3186 23.6534 14.1443 23.7371 13.8868L24.4056 11.8294Z"
                                        fill="white" />
                                </g>
                            </svg>
                            <p className="fw-medium color-palette-1">Top Up &<br/>
                                Be The Winner</p>
                        </div>
                        <a className="btn btn-get-started w-100 fw-medium text-xs text-center text-white rounded-pill"
                            href="#" role="button">Get Started</a>
                    </div>
                </div>
            </div>
        </section>
  )
}
