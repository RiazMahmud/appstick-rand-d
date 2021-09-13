import React from 'react';
import { Col, Container} from 'react-bootstrap';

const LearningOutCome = () => {
    const list = [
        "🔘 What is UI Design",
        "🔘 Different Between Graphic and UI Design",
        "🔘 Understanding UI",
        "🔘 Design Tools (Figma/XD)",
        "🔘 UI Design Principles",
        "🔘 Design Visual Hierarchy",
        "🔘 Color Theory",
        "🔘Typography",
        "🔘 Contract & Ratio & Grid",
        "🔘 Imagery",
        "🔘 Icon",
        "🔘 Wire frame (Low & High)",
        "🔘 Prototype",
        "🔘 Test App Design Project",
        "🔘 Test Web UI Design Project",
        "🔘 Case-study / Presentation",
        "🔘 Portfolio Building",
        "🔘 Client Management"
        


    ];
    return (
        <div className="learningOutcome-main">
            <Container>
                <Col lg={12} md={12} sm={12} xs={12}>
                    <div>
                        <h2 className="mt-2">Learning outcome</h2>                        
                        <div>
                            <ul style={{listStyle: 'none'}}>
                                {
                                    list.map((item, index) => 
                                        <li key={index}>{item}</li>
                                    )
                                }
                                
                            </ul>
                        </div>
                    </div>
                </Col>
            </Container>
        </div>
    );
};

export default LearningOutCome;