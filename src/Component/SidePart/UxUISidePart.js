import React from 'react';
import { Image } from 'react-bootstrap';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import anamul from '../../Images/anamul.png';
import mahmudul from '../../Images/mahmudul.png';
import be from '../../Images/be.jpg';
import dribble from '../../Images/dribble.jpg';

const UxUISidePart = () => {
    return (
        <div className="side-part-main">
            <div className="side-part-1">
                <h3 className="side-part1-text1">Senior Instructor</h3>
                <div className="side-part-underline"></div>                
                <div className="side-part2-inside">
                    <Image className="side-part-2-img rounded-circle" src={anamul} style={{width:'100px', height:'100px'}}/>
                    <div className="side-part2-text">
                        <h5>Anamul Kabir</h5>
                        <p style={{textAlign:'justify'}}>I have 15+ years of experience in creating Graphics Design and UX-UI Design.
                        Skilled in using Figma, Adobe Photoshop, Adobe Illustrator, Adobe Illustrator XD. I put much value on trustful, transparent long-term relationships that's why I'm very accurate to perform a professional approach.                        
                        Expertized in design thinking, wireframing, UX interactive prototyping, final UI graphics production.
                        I strictly keep up privacy, terms and deadlines.</p>
                        <div style={{display:'flex',marginTop: '10px',color:'#1E1E1E'}}>
                            <div style={{width:'40px', height:'40px',borderRadius:'25px',backgroundColor:'lightgrey',paddingTop:'5px',paddingLeft:'7px',cursor:'pointer'}}>
                                <a href="https://www.facebook.com/anamulkabir38" target="_blank" style={{color:'#1E1E1E'}}><FacebookIcon/></a></div>                            
                            <div style={{width:'40px', height:'40px',borderRadius:'25px',backgroundColor:'lightgrey',paddingTop:'5px',paddingLeft:'7px',cursor:'pointer',marginLeft:'10px'}}>
                                <a href="https://www.linkedin.com/in/anamul-kabir-9287b1104/" target="_blank" style={{color:'#1E1E1E'}}><LinkedInIcon/></a>
                            </div>
                            <div style={{width:'40px', height:'40px',borderRadius:'25px',backgroundColor:'lightgrey',paddingTop:'5px',paddingLeft:'10px',cursor:'pointer',marginLeft:'10px'}}>
                                <a href="https://www.behance.net/anamulkabir3738" target="_blank"><img src={be} style={{width: '20px'}}/></a>
                            </div>
                            <div style={{width:'40px', height:'40px',borderRadius:'25px',backgroundColor:'lightgrey',paddingTop:'5px',paddingLeft:'10px',cursor:'pointer',marginLeft:'10px'}}>
                                <a href="https://dribbble.com/colorfull" target="_blank"><img src={dribble} style={{width: '20px'}}/></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="side-part-2">
                <h3 className="side-part-text1">Instructor</h3>
                <div className="side-part-underline"></div>
                <div className="side-part2-inside">
                    <Image className="side-part-2-img rounded-circle" src={mahmudul} style={{width:'100px', height:'100px'}}/>
                    <div className="side-part2-text">
                        <h5>Mahmudul Hasan</h5>
                        <p style={{textAlign:'justify'}}>Building digital products, brands, and experience.
                        Have 4+ years of experience in UX/UI Design, Product Design, Graphic Design for startups and enterprises around the world.</p>
                        <div style={{display:'flex',marginTop: '10px',color:'#1E1E1E'}}>
                            <div style={{width:'40px', height:'40px',borderRadius:'25px',backgroundColor:'lightgrey',paddingTop:'5px',paddingLeft:'7px',cursor:'pointer'}}>
                                <a href="https://www.facebook.com/mhmanik02" target="_blank" style={{color:'#1E1E1E'}}><FacebookIcon/></a></div>                            
                            <div style={{width:'40px', height:'40px',borderRadius:'25px',backgroundColor:'lightgrey',paddingTop:'5px',paddingLeft:'7px',cursor:'pointer',marginLeft:'10px'}}>
                                <a href="https://www.linkedin.com/in/mhmanik02/" target="_blank" style={{color:'#1E1E1E'}}><LinkedInIcon/></a>
                            </div>
                            <div style={{width:'40px', height:'40px',borderRadius:'25px',backgroundColor:'lightgrey',paddingTop:'5px',paddingLeft:'10px',cursor:'pointer',marginLeft:'10px'}}>
                                <a href="https://www.behance.net/mhmanik02" target="_blank"><img src={be} style={{width: '20px'}}/></a>
                            </div>
                            <div style={{width:'40px', height:'40px',borderRadius:'25px',backgroundColor:'lightgrey',paddingTop:'5px',paddingLeft:'10px',cursor:'pointer',marginLeft:'10px'}}>
                                <a href="https://dribbble.com/mhmanik02" target="_blank"><img src={dribble} style={{width: '20px'}}/></a>
                            </div>
                        </div>
                    </div>
                </div>                
            </div>
            
        </div>
    );
};

export default UxUISidePart;