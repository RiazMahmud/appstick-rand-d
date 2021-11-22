import React from 'react';
import { Col, Container } from 'react-bootstrap';

const AboutPart = () => {
    return (
        <div className="about-main">
            <Container fluid>
                <div className="about-header-text2">
                  <h2 className="text2-h1">UNREAL ENGINE</h2>
                  <p className="about-header-text1">Unreal Engine is a game engine developed by Epic Games, first showcased in the 1998 first-person shooter game Unreal. Wikipedia
                    Unreal Engine is a complete suite of creation tools for real-time applications like game development, architectural and automotive visualization, linear film and television content creation, broadcast and live event production, training and simulation etc.
                    For those looking to learn a real-time engine, Unreal Engine is the most in-demand game engine skill to have on your resume, and employer demand for knowledge of Unreal Engine is projected to grow 122% over the next ten years, nearly twice that of other market competitors.
                  </p>
                </div>
                <div className="about-header-text1">
                    <h4 className="text-dark"><strong>Why should we learn Unreal Engine?</strong></h4>
                    <div>
                        <ul>
                            <li>Recreate the process for blocking out a 3D environment.</li>
                            <li>Edit a blocked-out scene based on testing of pacing and flow.</li>
                            <li>Use best practices to light a scene to create a believable mood.</li>
                            <li>Apply post-processing volumes to modify the color grading and atmosphere of a scene.</li>
                            <li>Import custom assets into Unreal Engine.</li>
                            <li>Create sound cues and ambient actors that can be played and controlled in a level with Blueprint.</li>
                            <li>Generate sounds and effects which loop, but vary in sound each loop.</li>
                            <li>Control audio playback using Blueprints.</li>
                            <li>Build audio systems that will play around a player or have spatialization.</li>
                            <li>Recognize different methods for building sound into a level and when each method is appropriate.</li>
                            <li>Create an actor or component when appropriate.</li>
                            <li>Find functions in C++ and determine which types map to which in Blueprint.</li>
                            <li>Bind C++ functions to user input levels and delegates.</li>
                            <li>Create uproperty variables for different levels of access for the editor and Blueprint.</li>
                            <li>Import Quixel Megascans via Bridge for use in Unreal Engine.</li>
                            <li>Generate realistic looking lighting with lighting actors.</li>
                            <li>Utilize Unreal Engine tools to compose realistic, organic scenes.</li>
                            <li>Apply post-processing to a scene to make it feel more realistic.</li>
                            <li>Modify export and rendering settings to achieve the best possible quality render.</li>

                        </ul>
                    </div>        
                </div>                
                <div className="about-middle-part1">
                    <Col lg={12} md={12} sm={12} xs={12}>
                            <div className="about-middle-text1">
                                <h4 className="about-middle-text1-h2">Why is Unreal Engine so popular?</h4>
                                <p className="text-secondary">
                                UE4's flexibility is one of the core reasons for its popularity. Whatever the project, it can handle the task.
                                 If we take a look at some of the most popular games in the past two decades, you will often see an Unreal Engine
                                  logo in the opening credits. Unreal engine is a vast powerhouse, able to have a large team of skilled developers
                                   really create amazing products that have become gaming icons. It has a huge systematic set of tools and editors
                                    that help users manage their properties and modify them to create the artwork for their games.
                                </p>
                                <p className="text-secondary">
                                The engine comprises parts that include a graphics engine, online module, physics engine, sound engine, input, and Gameplay Framework. It has several editors that help in the development of the game. On startup, It has an Unreal Editor by default. This Editor is the main editor that helps the user view and works with other sub-platforms and editors.
                                </p>
                            </div>                            
                    </Col>                    
                </div>
                <div className="about-middle-part2">
                    <Col lg={12} md={12} sm={12} xs={12}>
                            <div className="about-middle-text2">
                                <h4 className="about-middle-text2-h2">What is your benefit ?</h4>
                                <p className="text-secondary">
                                First of all you will get an official environment along with team collaboration.
                                This course brings you to Beginner to Advance level by creating the complete most
                                advanced creative project. You will be able to understand how to complete one project,
                                how to handle project bugs, and how to collaborate with teams. This complete project will
                                help you to get a job with this new skill. You will be able to start work for your client.
                                You will also get a chance to be hired in our software firm. Add this project in your portfolio
                                and university assignment and most importantly you will get our support within 24 hours.
                                </p>
                            </div>
                    </Col>                    
                </div>
            </Container>
        </div>
    );
};

export default AboutPart;