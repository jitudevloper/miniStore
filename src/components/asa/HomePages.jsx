import React, {useEffect} from 'react'
import Banner from "../banner/Banner"
import Services from '../company-services/Services';
import LatestPost from '../../latestPost/LasestPost'
import CompanyServices from '../company-services/CompanyServices'
import Digital from '../digital/Digital'
import SubScribe from '../subscribe/SubScribe'
import ShopOurInst from '../shopOur/ShopOurInsta'
import Watch from '../../watch/Watch'
import Sale from "../../components/sale/Sale"
import Footer from '../footer/footer';
import Header from '../home/navbar/Navbar';

const HomePages = () => {
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      window.location.href = '/';
    }
  }, []);
  return (
    <>
    <Header/>
      <Banner/>
     <Services/>
    <CompanyServices/>
    <Watch/>
    <Sale/>
    <LatestPost/>
    <Digital/>
    <SubScribe/>
    <ShopOurInst/>
    <Footer/>
    </>
  )
}

export default HomePages