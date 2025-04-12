import React from 'react';
import '../../styles/overview.css';
import SideBar from '../../../../components/organisms/sidebar/app';
import TopUpCategories from '../../../../components/organisms/topupcategories/page';
import LatestTransaction from '../../../../components/organisms/latesttransaction/page';

export default function Overview() {
  return (
    <>
      <section className="overview overflow-auto">
        <SideBar/>
        <main className="main-wrapper">
            <div className="ps-lg-0">
                <h2 className="text-4xl fw-bold color-palette-1 mb-30">Overview</h2>
                <TopUpCategories/>
                <LatestTransaction/>
            </div>
        </main>
    </section>
    </>
  )
}
