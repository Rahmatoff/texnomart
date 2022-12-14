import React from 'react';
import HeroBanner from '../../components/hero-banner/HeroBanner';
import ProductCards from '../../components/product-cards/ProductCards';
import Section from '../../components/sectiontwo/Section';
import Categroris from '../../components/categories/Categroris';


const Home = () => {
  return (
    <div>
        <HeroBanner/>
        <Categroris/>
        <ProductCards/>
        <Section/>
    </div>
  )
}

export default Home