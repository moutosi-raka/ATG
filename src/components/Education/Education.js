import React from 'react';
import { Card } from 'react-bootstrap';
import sarah from '../../assets/education/Sarah West.png'
import karma from '../../assets/article/karme.png'
import { HiOutlineEllipsisHorizontal, HiOutlineEye } from "react-icons/hi2";
import { FaShareAlt } from 'react-icons/fa';
import education from '../../assets/education/education.png'

const Education = () => {
    return (
        <div className='my-3'>
            <Card>
                <Card.Img variant="top" src={education}/>
                <Card.Body>
                    <p className='m-0'>🔬️ Education</p>
                    <div className='d-flex justify-content-between align-items-center'>
                      <h6 className='fw-bold'>Tax Benefits for Investment under National Pension <br/>  Scheme launched by Government</h6>
                      <p className='fs-4 fw-bold'><HiOutlineEllipsisHorizontal></HiOutlineEllipsisHorizontal></p>
                    </div>
                    
                    <Card.Text className='text-secondary'>
                    I’ve worked in UX for the better part of a decade. From now on, I plan to rei…
                    </Card.Text>
                    <div className='d-flex justify-content-between align-items-center'>
                        <div className='flex'>
                            <img className='me-2' style={{width: '40px', height: '40px'}} src={sarah} alt=''/>
                            <p className='fw-bold mt-16'>Sarah West</p>
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

export default Education;