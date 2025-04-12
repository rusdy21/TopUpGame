import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import cx from 'classnames'
interface SideBarItemProps {
    icon:'overview' | 'transaction' | 'messages' | 'card' | 'rewards' | 'setting' | 'logout';
    link: string;
    name: string;
    active?: boolean;
   //classlink: 'item active mb-30'|'item mb-30'
  }

export default function SideBarItem(props: SideBarItemProps) {
    const {icon,link,name, active} = props;
     const classTitle = cx({
          'item mb-30': true,
          active
        });
  return (
    <div className="menus">
    <div className={classTitle}>
        <Image src={`/icon/${icon}.svg`} width={25} height={25} alt=''/>
        <p className="item-title m-0">
            <Link href={link} className="text-lg text-decoration-none text-spacing">{name}</Link>
        </p>
    </div>
    </div>
  )
}
