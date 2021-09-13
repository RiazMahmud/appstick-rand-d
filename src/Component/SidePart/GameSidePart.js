import React from 'react';
import { Image } from 'react-bootstrap';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import LanguageIcon from '@material-ui/icons/Language';
import suvro from '../../Images/suvro.png';
import sohel from '../../Images/sohel.png'; 

const GameSidePart = () => {
    return (
        <div className="side-part-main">
            <div className="side-part-1">
                <h3 className="side-part1-text1">Best Instructor</h3>
                <div className="side-part-underline"></div>
                <div className="side-part1-inside">
                    <Image className="rounded-circle ms-5 ps-2" style={{width:'120px', height:'120px'}} src={suvro} />
                    <p className="text-center mt-5 text-secondary">I am a master’s graduate from Simon Fraser University currently working as a Software Development Engineer at EA - Electronic Arts. I worked as a Jr. Game Developer on an internal project at Fortinet Inc. My work involves design and develop reusable UI screens and UI elements, writing code for core gameplay mechanics, NPC scripting, Unit testing and bug fixing. I earned my bachelor’s degree with the major of Computer Science and Engineering at the Khulna University, Bangladesh. I did my MSc in Human Computer Interaction (HCI) from Simon Fraser University. During this time, I worked on gaming applications revolving brain computer interfaces(Neurosky+Unity) and Augmented Reality (Vuforia, ARCore, 6d.ai) as my RA (Research Assistant) position in the TECI lab at Simon Fraser University.</p>
                    <div style={{display:'flex',marginTop: '10px',color:'#1E1E1E',justifyContent:'center'}}>
                        <div style={{width:'40px', height:'40px',borderRadius:'25px',backgroundColor:'lightgrey',paddingTop:'5px',paddingLeft:'7px',cursor:'pointer'}}>
                            <a href="https://www.facebook.com/shubhrasarker11" target="_blank" style={{color:'#1E1E1E'}}><FacebookIcon/></a>
                        </div>                            
                        <div style={{width:'40px', height:'40px',borderRadius:'25px',backgroundColor:'lightgrey',paddingTop:'5px',paddingLeft:'7px',cursor:'pointer',marginLeft:'10px'}}>
                            <a href="https://www.linkedin.com/in/ishubhra/" target="_blank" style={{color:'#1E1E1E'}}><LinkedInIcon/></a>
                        </div>
                        <div style={{width:'40px', height:'40px',borderRadius:'25px',backgroundColor:'lightgrey',paddingTop:'5px',paddingLeft:'7px',cursor:'pointer',marginLeft:'10px'}}>
                            <a href="https://ssarker.com/" target="_blank" style={{color:'#1E1E1E'}}><LanguageIcon/></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="side-part-2">
                <h3 className="side-part-text1">Instructors</h3>
                <div className="side-part-underline"></div>
                <div className="side-part2-inside">
                    <Image className="side-part-2-img rounded-circle" src={sohel} style={{width:'100px', height:'100px'}}/>
                    <div className="side-part2-text">
                        <h5>Sohel Moon</h5>
                        <p style={{textAlign:'justify'}}>I am Sohel Moon currently working as a game developer at Opus Technology Limited and gaming instructor on Appstick. I am developing myself as a Game Developer for the last 4 years. I have developed prototypes of various genres of video games. Mainly I develop for PC games. I achieved 1 Million BDT Fund From Bangladesh Govt. for My Game Idea. I am specialties on Unreal Engine Game Development (Blueprint System), VR Game Development. I earned my bachelor’s degree with the major of Computer Science and Engineering at the Khulna University.</p>
                        <div style={{display:'flex',marginTop: '10px',color:'#1E1E1E'}}>
                            <div style={{width:'40px', height:'40px',borderRadius:'25px',backgroundColor:'lightgrey',paddingTop:'5px',paddingLeft:'7px',cursor:'pointer'}}>
                                <a href="https://www.facebook.com/ZohelMoon" target="_blank" style={{color:'#1E1E1E'}}><FacebookIcon/></a></div>                            
                            <div style={{width:'40px', height:'40px',borderRadius:'25px',backgroundColor:'lightgrey',paddingTop:'5px',paddingLeft:'7px',cursor:'pointer',marginLeft:'10px'}}>
                                <a href="https://www.linkedin.com/in/zohelmoon/" target="_blank" style={{color:'#1E1E1E'}}><LinkedInIcon/></a>
                            </div>
                        </div>
                    </div>
                </div>                
            </div>
            
        </div>
    );
};

export default GameSidePart;