import React from 'react';
import Banner from '../../components/Banner/Banner';
import Category from '../../components/Category/Category';
import Header from '../../components/Header/Header';


const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <div className='m-5'>
            <Category></Category>
            </div>
        </div>
    );
};

export default Home;