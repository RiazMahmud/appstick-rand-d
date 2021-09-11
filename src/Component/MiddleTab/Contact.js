import React, { useState } from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import ContactFormDataAccess from '../../DataAccess/ContactFormDataAccess';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { toast } from "react-toastify";


const Contact = () => {
    const { register, handleSubmit,formState: { errors }, reset } = useForm();
    const [course, setCourse] = useState(""); 
    const [gender, setGender] = useState("");

    const addManager = (data) =>{
        ContactFormDataAccess.registerFromSubmit(data.Name, data.InstitutionName, data.Subject, data.Session, data.BirthDay, data.Address, data.Email, data.Phone,course,gender,)
        .then((data) => {
            if(data.success===true){
                // alert(data.message);
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
            <ToastContainer />
            <Container fluid>
                <Col>                                
                    <div>
                        <div className="contact-main-header" style={{borderBottom: "2px solid grey"}}>
                            <h2 className="contact-main-header-h2">Student Registration Form</h2>
                            <h6 className="text-secondary">Fill out the form carefully for registration</h6>
                        </div>
                        <div>
                            <form onSubmit={handleSubmit(addManager)}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="text" className="signup-input-field" {...register("Name", {required: true, maxLength: 80})} />
                                    <p className="text-danger">{errors.Name && "Name is required"}</p>
                                    {/* <Form.Text className="text-muted">
                                        Name
                                    </Form.Text> */}
                                </Form.Group>
                                <Row>
                                    <Form.Group as={Col}>
                                        <Form.Label>Gender</Form.Label>
                                        <Form.Select onChange={(e) => {setGender(e.target.value)}} required>
                                            <option>Please Select</option>
                                            <option>Female</option>
                                            <option>Male</option>
                                            <option>N/A</option>
                                        </Form.Select>
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
                                {/* <Row className="mt-4">
                                    <Col lg="8" md="8">
                                        <Form.Group>
                                            <Form.Label>Institute Name</Form.Label>
                                            <Form.Control type="text"/>
                                        </Form.Group>
                                    </Col>
                                    <Col lg={4} md="4">
                                        <Form.Group>
                                            <Form.Label>Session</Form.Label>
                                            <Form.Control type="text"/>
                                        </Form.Group> 
                                    </Col>    
                                </Row> */}
                                <Form.Group>
                                    <Form.Label>Course</Form.Label>
                                    <Form.Select onChange={(e) => {setCourse(e.target.value)}} required>
                                        <option>Please Select</option>
                                        <option>Web Development</option>
                                        <option>Game Development</option>
                                        <option>Ux/Ui Design</option>
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
            </Container>
            
        </div>
    );
};

export default Contact;