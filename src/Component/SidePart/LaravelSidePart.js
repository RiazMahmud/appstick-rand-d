import React from 'react';
import { Image } from 'react-bootstrap';
import Biplob from '../../Images/Biplob.png'; 
import shimul from '../../Images/shimul.png';
import Rabiul from '../../Images/Rabiul.png';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';



const LaravelSidePart = () => {
    
    return (
        <div className="side-part-main">
            <div className="side-part-1">
                <h3 className="side-part1-text1">Senior Instructor</h3>
                <div className="side-part-underline"></div>                
                <div className="side-part2-inside">
                    <Image className="side-part-2-img rounded-circle" src={Biplob} style={{width:'100px', height:'100px'}}/>
                    <div className="side-part2-text">
                        <h5>Biplab Sarkar</h5>
                        <p style={{textAlign:'justify'}}>My name is Biplab Sarkar and I am a Senior Consultant for Appstick. I am an accomplished coder and programmer, and I enjoy using my skills to contribute to the exciting technological advances that happen every day. I graduated from the Khulna University with a Bachelor's Degree in Computer Science. I have more than 5+ years of experience in Software Development.</p>
                        <div style={{display:'flex',marginTop: '10px',color:'#1E1E1E'}}>
                            <div style={{width:'40px', height:'40px',borderRadius:'25px',backgroundColor:'lightgrey',paddingTop:'5px',paddingLeft:'7px',cursor:'pointer'}}>
                                <a href="https://www.facebook.com/biplab.sarker.9" target="_blank" style={{color:'#1E1E1E'}}><FacebookIcon/></a></div>                            
                            <div style={{width:'40px', height:'40px',borderRadius:'25px',backgroundColor:'lightgrey',paddingTop:'5px',paddingLeft:'7px',cursor:'pointer',marginLeft:'10px'}}>
                                <a href="https://www.linkedin.com/in/biplab-sarker-03539852/" target="_blank" style={{color:'#1E1E1E'}}><LinkedInIcon/></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="side-part-2">
                <h3 className="side-part-text1">Instructors</h3>
                <div className="side-part-underline"></div>
                <div className="side-part2-inside">
                    <Image className="side-part-2-img rounded-circle" src={shimul} style={{width:'100px', height:'100px'}}/>
                    <div className="side-part2-text">
                        <h5>Md. Zubaer Hossain (Shimul)</h5>
                        <p style={{textAlign:'justify'}}>I’m Laravel developer having more than 3 years of experience designing,
                           developing and deploying Laravel based web applications.I am working Larval, Javascript, HTML, CSS, PHP, MySql.
                           Complete BSC in Computer Science and Engineering from Bangabandhu Sheikh Mujibur Rahman Science and Technology University, Gopalganj-8100.</p>
                        <div style={{display:'flex',marginTop: '10px',color:'#1E1E1E'}}>
                            <div style={{width:'40px', height:'40px',borderRadius:'25px',backgroundColor:'lightgrey',paddingTop:'5px',paddingLeft:'7px',cursor:'pointer'}}>
                                <a href="https://www.facebook.com/md.zobear.3" target="_blank" style={{color:'#1E1E1E'}}><FacebookIcon/></a></div>                            
                            <div style={{width:'40px', height:'40px',borderRadius:'25px',backgroundColor:'lightgrey',paddingTop:'5px',paddingLeft:'7px',cursor:'pointer',marginLeft:'10px'}}>
                                <a href="https://www.linkedin.com/" target="_blank" style={{color:'#1E1E1E'}}><LinkedInIcon/></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="side-part2-inside mt-4">
                    <div><Image className="side-part-2-img rounded-circle" src={Rabiul} style={{width:'100px', height:'100px'}}/></div>                    
                    <div className="side-part2-text">
                        <h5>Md. Rabiul Islam (Razu)</h5>
                        <p style={{textAlign:'justify'}}> I’m a full stack web developer having more than 3 years of experience designing,
                            developing and deploying Laravel based web applications.I am working with Larval, Javascript, HTML, CSS, NodeJs, Blockchain-Crypto, MySql, MongoDB.
                            Complete BSC in Computer Science and Engineering from Bangabandhu Sheikh Mujibur Rahman Science and Technology University, Gopalganj-8100.</p>
                            <div style={{display:'flex',marginTop: '10px',color:'#1E1E1E'}}>
                                <div style={{width:'40px', height:'40px',borderRadius:'25px',backgroundColor:'lightgrey',paddingTop:'5px',paddingLeft:'7px',cursor:'pointer'}}>
                                    <a href="https://www.facebook.com/razusarena" target="_blank" style={{color:'#1E1E1E'}}><FacebookIcon/></a>
                                </div>                            
                                <div style={{width:'40px', height:'40px',borderRadius:'25px',backgroundColor:'lightgrey',paddingTop:'5px',paddingLeft:'7px',cursor:'pointer',marginLeft:'10px'}}>
                                <a href="https://www.linkedin.com/" target="_blank" style={{color:'#1E1E1E'}}><LinkedInIcon/></a>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default LaravelSidePart;