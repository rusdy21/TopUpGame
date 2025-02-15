import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
interface SideBarItemProps {
    icon:'overview' | 'transaction' | 'messages' | 'card' | 'rewards' | 'setting' | 'logout';
    link: string;
    name: string;
    classlink: 'item active mb-30'|'item mb-30'
  }

export default function SideBarItem(props: SideBarItemProps) {
    const {icon,link,name,classlink='item mb-30'} = props;
  return (
    <div className="menus">
    <div className={classlink}>
        <Image src={`icon/${icon}.svg`} width={25} height={25} alt=''/>
        <p className="item-title m-0">
            <Link href={link} className="text-lg text-decoration-none">{name}</Link>
        </p>
    </div>
    </div>
  )
}
