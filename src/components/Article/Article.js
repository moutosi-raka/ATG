import React from 'react';
import { Card } from 'react-bootstrap';
import articleImg from '../../assets/article/Article.png'
import karma from '../../assets/article/karme.png'
import {HiOutlineEye } from "react-icons/hi2";
import { FaShareAlt } from 'react-icons/fa';
import OutLineIcon from '../OutLineIcon/OutLineIcon';

const Article = () => {
    return (
        <div className='my-3'>
            <Card>
                <Card.Img variant="top" src={articleImg}/>
                <Card.Body>
                    <p className='m-0'>✍️ Article</p>
                    <div className='d-flex justify-content-between align-items-center'>
                      <h6 className='fw-bold'>What if famous brands had regular fonts?<br/> Meet RegulaBrands!</h6>
                      <OutLineIcon></OutLineIcon>
                    </div>
                    
                    <Card.Text className='text-secondary'>
                    I’ve worked in UX for the better part of a decade. From now on, I plan to rei…
                    </Card.Text>
                    <div className='d-flex justify-content-between align-items-center'>
                        <div className='flex'>
                            <img className='me-2' style={{width: '40px', height: '40px'}} src={karma} alt=''/>
                            <p className='fw-bold mt-16'>Sarthak Kamra</p>
                        </div>
                        <div className='d-flex align-items-center'>
                          <div>
                          <p className='me-4 mt-16'><HiOutlineEye className='me-1'></HiOutlineEye>1.4k views</p>
                          </div>
                           <div> <button className='shared'><FaShareAlt></FaShareAlt></button></div>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Article;