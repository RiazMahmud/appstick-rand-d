import React from 'react';
import { Image } from 'react-bootstrap';
import studentImg from '../../Images/studentImg.jpg';
import imgDefault from '../../Images/img-default.jpg'; 



const SidePart = () => {
    
    return (
        <div className="side-part-main">
            <div className="side-part-1">
                <h3 className="side-part1-text1">Students Voice</h3>
                <div className="side-part-underline"></div>
                <div className="side-part1-inside">
                    <Image className="rounded-circle ms-5 ps-2" src={studentImg} />
                    <p className="text-center mt-5 text-secondary">I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                </div>
            </div>
            <div className="side-part-2">
                <h3 className="side-part-text1">Best Instructors</h3>
                <div className="side-part-underline"></div>
                <div className="side-part2-inside">
                    <Image className="side-part-2-img rounded-circle" src={imgDefault} />
                    <div className="side-part2-text">
                        <h6>andre</h6>
                        <p>andre Human Resources</p>
                        <div></div>
                    </div>
                </div>
                <div className="side-part2-inside mt-4">
                    <Image className="side-part-2-img rounded-circle" src={imgDefault} />
                    <div className="side-part2-text">
                        <h6>andre</h6>
                        <p>andre Human Resources</p>
                        <div></div>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default SidePart;