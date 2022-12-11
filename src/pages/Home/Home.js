import React from 'react';
import Article from '../../components/Article/Article';
import Banner from '../../components/Banner/Banner';
import Category from '../../components/Category/Category';
import Education from '../../components/Education/Education';
import Header from '../../components/Header/Header';
import Job from '../../components/Job/Job';
import MeetUp from '../../components/MeetUp/MeetUp';
import Sidebar from '../../components/Sidebar/Sidebar';


const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <div className='w-75 mx-auto'>
            <Category></Category>
            
              <div className='d-md-flex flex-row-reverse flex-md-row my-5'>
              <div className='order-first order-md-last '>
                <Sidebar></Sidebar>
                </div>
                <div className='me-5 order-last order-md-first '>
                <Article></Article>
                <Education></Education>
                <MeetUp></MeetUp>
                <Job></Job>
                </div>
               
              </div>
            </div>
        </div>
    );
};

export default Home;