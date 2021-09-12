import React from 'react';
import { Image } from 'react-bootstrap';
import studentImg from '../../Images/studentImg.jpg';
import imgDefault from '../../Images/img-default.jpg';
import Biplob from '../../Images/Biplob.png'; 
import shimul from '../../Images/shimul.png';
import Rabiul from '../../Images/Rabiul.png';



const LaravelSidePart = () => {
    
    return (
        <div className="side-part-main">
            <div className="side-part-1">
                <h3 className="side-part1-text1">Students Voice</h3>
                <div className="side-part-underline"></div>
                <div className="side-part1-inside">
                    <Image className="rounded-circle ms-5 ps-2" src={Biplob} style={{width:'120px', height:'120px'}}/>
                    <p className="text-center mt-5 text-secondary">I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                </div>
            </div>
            <div className="side-part-2">
                <h3 className="side-part-text1">Best Instructors</h3>
                <div className="side-part-underline"></div>
                <div className="side-part2-inside">
                    <Image className="side-part-2-img rounded-circle" src={shimul} style={{width:'100px', height:'100px'}}/>
                    <div className="side-part2-text">
                        <h5>Md. Zubaer Hossain (Shimul)</h5>
                        <p>I’m laravel developer having more than 2.5 years of experience designing,
                           developing and deploying laravel based web applications.
                           I am working Larval, Javascript, HTML, CSS,PHP,MySql.Complete BSC in Computer Science
                           and Engineering from Bangabandhu Sheikh Mujibur Rahman Science and Technology University,
                            Gopalganj-8100. </p>
                        <div></div>
                    </div>
                </div>
                <div className="side-part2-inside mt-4">
                    <div><Image className="side-part-2-img rounded-circle" src={Rabiul} style={{width:'100px', height:'100px'}}/></div>                    
                    <div className="side-part2-text">
                        <h5>Md. Rabiul Islam (Razu)</h5>
                        <p>I’m a full stack web developer having more than 3 years of experience designing,
                            developing and deploying laravel based web applications. I am working with Larval,
                            Javascript (Jquery, vue/nuxt), HTML, CSS, NodeJs, Blockchain/Crypto,MySql, MongoDB.
                            Complete BSC in Computer Science and Engineering from Bangabandhu Sheikh Mujibur Rahman
                             Science and Technology University, Gopalganj-8100.</p>
                        <div></div>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default LaravelSidePart;