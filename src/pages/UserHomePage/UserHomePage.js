import React from 'react';
import Article from '../../components/Article/Article';
import Education from '../../components/Education/Education';
import Job from '../../components/Job/Job';
import MeetUp from '../../components/MeetUp/MeetUp';
import Sidebar from '../../components/Sidebar/Sidebar';
import UserCate from '../../components/UserCate/UserCate';
import UserHeader from '../../components/UserHeader/UserHeader';

const UserHomePage = () => {
    return (
        <div>
            <UserHeader ></UserHeader>
            <hr className='my-0'/>
            <div className='mx-20 my-0'>
            <UserCate></UserCate>
            
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

export default UserHomePage;