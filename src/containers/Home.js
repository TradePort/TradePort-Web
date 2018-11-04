import React from 'react'
import { withSiteData } from 'react-static'
//
import HeroComponent from '../components/Home/Hero'
import GoodsComponent from '../components/Home/Goods'
import ServicesComponent from '../components/Home/Services'
export default withSiteData(() => (
  <div>
    <HeroComponent />
    <GoodsComponent />
    <ServicesComponent />
  </div>
))
