import React, { useState } from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import ContactFormDataAccess from '../../DataAccess/ContactFormDataAccess';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { toast } from "react-toastify";
import UpperNavBar from '../UpperNavBar/UpperNavBar';
import success from '../../Images/success.png';


const RegisterForm = () => {
    const { register, handleSubmit,formState: { errors }, reset } = useForm();
    const [course, setCourse] = useState("");
    const [message, setMessage] = useState("");

    const addManager = (data) =>{
        console.log(data);
        ContactFormDataAccess.registerFromSubmit(data.Name, data.InstitutionName, data.Subject, data.Session, data.BirthDay, data.Address, data.Email, data.Phone,course,data.gender,)
        .then((data) => {
            if(data.success===true){
                setMessage(data.message)
                toast.success(data.message);                                
            }
            else{
                toast.error(data.message);
            }
        })
        reset();
    }

    return (
        <div className="contact-main">
            <UpperNavBar/>
            <ToastContainer />
            {
                message !== '' ?
                <div style={{height: '100vh',display:'flex',justifyContent:'center',backgroundColor:'#DEE1E6'}}>
                    <img src={success} style={{marginTop:'100px',width:'500px',height:'500px'}}/>
                </div>    
                :
            <div style={{backgroundColor:'#DEE1E6',paddingBottom:'30px'}}>                
                <Container>                    
                    <div className="d-flex justify-content-center">                    
                        <Col lg={6} md={6} >                              
                            <div>
                                <div className="contact-main-header" style={{borderBottom: "2px solid #000"}}>
                                    <h2 className="contact-main-header-h2">Registration Form</h2>
                                    <h6 className="text-dark">Fill out the form carefully for registration</h6>
                                </div>
                                <div>
                                    <form onSubmit={handleSubmit(addManager)}>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Name</Form.Label>
                                            <Form.Control type="text" className="signup-input-field" {...register("Name", {required: true, maxLength: 80})} />
                                            <p className="text-danger">{errors.Name && "Name is required"}</p>                                            
                                        </Form.Group>
                                        <Row>
                                            <Form.Group as={Col}>
                                                <Form.Label>Gender</Form.Label>
                                                <Form.Select {...register("gender",{required: true})}> 
                                                    <option>Please Select</option>
                                                    <option>Female</option>
                                                    <option>Male</option>
                                                    <option>N/A</option>
                                                </Form.Select>
                                                <p className="text-danger">{errors.Name && "Gender is required"}</p>
                                            </Form.Group>
                                            <Form.Group as={Col}>
                                                <Form.Label>Birth of Date</Form.Label>
                                                <Form.Control type="date"  {...register("BirthDay", {required: true, maxLength: 80})}/>
                                                <p className="text-danger">{errors.BirthDay && "BirthDay date is required"}</p>
                                            </Form.Group> 
                                        </Row>
                                            <Form.Group>
                                                <Form.Label>Institution Name</Form.Label>
                                                <Form.Control type="text" {...register("InstitutionName", {required: true, maxLength: 80})}/>
                                                <p className="text-danger">{errors.InstitutionName && "Institution Name is required"}</p>
                                            </Form.Group>
                                        <Row className="mt-4">
                                            <Col lg={6} md={6}>
                                                <Form.Group>
                                                    <Form.Label>Subject</Form.Label>
                                                    <Form.Control type="text" {...register("Subject", {required: true, maxLength: 80})}/>
                                                    <p className="text-danger">{errors.Subject && "Subject is required"}</p>
                                                </Form.Group>
                                            </Col>                                    
                                            <Col lg={6} md={6}>
                                                <Form.Group>
                                                    <Form.Label>Session</Form.Label>
                                                    <Form.Control type="text" {...register("Session", {required: true, maxLength: 80})}/>
                                                    <p className="text-danger">{errors.Session && "Session is required"}</p>
                                                </Form.Group> 
                                            </Col>    
                                        </Row>                                    
                                            <Form.Group >
                                                <Form.Label>Address</Form.Label>
                                                <Form.Control type="text" className="input-field" {...register("Address",  {required: true, maxLength: 80})} />
                                                <p className="text-danger">{errors.Address && "Address is required"}</p>
                                            </Form.Group>                               
                                            <Form.Group as={Col} controlId="formGridEmail">
                                                <Form.Label> Email</Form.Label>
                                                <Form.Control type="email" className="input-field" {...register("Email", {required: true, pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/})} />
                                                <p className="text-danger">{errors.Email && "Email is required"}</p>
                                            </Form.Group>
                                            <Form.Group as={Col} controlId="formGridEmail">
                                                <Form.Label>Phone</Form.Label>
                                                <Form.Control type="text" className="input-field" {...register("Phone",  {required: true, maxLength: 80})} />
                                                <p className="text-danger">{errors.Phone && "Phone is required"}</p>
                                            </Form.Group>                                        
                                        <Form.Group>
                                            <Form.Label>Course</Form.Label>
                                            <Form.Select onChange={(e) => {setCourse(e.target.value)}} name="course" id="course" required>
                                                <option value="">Please Select</option>
                                                <option value="Web Development">Web Development</option>
                                                <option value="Game Development">Game Development</option>
                                                <option value="Ux/UiDesign">UI/UX Design</option>
                                            </Form.Select>
                                        </Form.Group>                                                        
                                        <div className="d-flex">
                                            <div className="ms-auto">                                      
                                                <input type="submit" value="Submit" className="contact-submit-btn"/>
                                            </div>                                     
                                        </div> 
                                    </form>
                                </div>
                            </div>
                        </Col> 
                    </div>
                </Container>                
            </div>
            }
        </div>
    );
};

export default RegisterForm;