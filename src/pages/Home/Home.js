import React from 'react';
import Article from '../../components/Article/Article';
import Banner from '../../components/Banner/Banner';
import Category from '../../components/Category/Category';
import Education from '../../components/Education/Education';
import Header from '../../components/Header/Header';
import MeetUp from '../../components/MeetUp/MeetUp';
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
                <Education></Education>
                <MeetUp></MeetUp>
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