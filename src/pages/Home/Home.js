import React from 'react';
import Article from '../../components/Article/Article';
import Banner from '../../components/Banner/Banner';
import Category from '../../components/Category/Category';
import Header from '../../components/Header/Header';
import Sidebar from '../../components/Sidebar/Sidebar';


const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <div className='mx-20'>
            <Category></Category>
            
              <div className='d-flex my-5'>
                <div className='me-5'>
                <Article></Article>
                <Article></Article>
                <Article></Article>
                </div>
                <div>
                <Sidebar></Sidebar>
                </div>
              </div>
            </div>
        </div>
    );
};

export default Home;