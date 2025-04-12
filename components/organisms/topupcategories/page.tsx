import React from 'react'
import Image from 'next/image'
import CategoriesItem from '../../molecules/categoriesitem/page'

export default function TopUpCategories() {
  return (
    <>
        <div className="top-up-categories mb-30">
                    <p className="text-lg fw-medium color-palette-1 mb-14">Top Up Categories</p>
                    <div className="main-content">
                        <div className="row">
                            <CategoriesItem icon='gamedestkop' title='Game Desktop' total='Rp 18.000.500'/>
                            <CategoriesItem icon='game-mobile' title='Game Mobile' total='Rp 8.455.000'/>
                            <CategoriesItem icon='others' title='Other Categories' total='Rp 5.000.000'/>
                        </div>
                    </div>
                </div>
    </>
  )
}
