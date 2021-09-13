import React from 'react';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import MoveToInboxIcon from '@material-ui/icons/MoveToInbox';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import ClassIcon from '@material-ui/icons/Class';

const Feature = () => {
    return (
        <div className="feature-main">
            <h2>Feature</h2>
            <div className="feature-single-part">
                <div className="feature-single-inside">
                    <div className="feature-single-icon">
                        <AccessTimeIcon/>
                    </div>
                    <h6 className="feature-single-h6">Duration: 5 Months</h6>
                </div>
                <p>The course is designed for 5 months duration.</p>
            </div>
            <div className="feature-single-part">
                <div className="feature-single-inside">
                    <div className="feature-single-icon">
                        <Brightness7Icon/>
                    </div>
                    <h6 className="feature-single-h6">Office Desk: Individual</h6>
                </div>
                <p>We will provide an individual workstation (well decorated desk, desktop, official facilities) for every single learner.</p>
            </div>
            <div className="feature-single-part">
                <div className="feature-single-inside">
                    <div className="feature-single-icon">
                        <ClassIcon/>
                    </div>
                    <h6 className="feature-single-h6">Class Time: 3-4 Hours</h6>
                </div>
                <p>Each class duration will be 3-4 hours thrice in week. So, one learner has to spend 9-12 hours in a week.</p>
            </div>
            <div className="feature-single-part">
                <h6>Class Size:</h6>
                <div className="feature-single-inside">
                    <div className="feature-single-icon">
                        <PersonAddIcon/>
                    </div>
                    <h6 className="feature-single-h6">Workstation 1: 8 Peoples </h6>
                </div>
                <p>Only 8 learners are allowed to enroll in the course in a single session.</p>
                <div className="feature-single-inside">
                    <div className="feature-single-icon">
                        <PersonAddIcon/>
                    </div>
                    <h6 className="feature-single-h6">Workstation 2: 12 Peoples </h6>
                </div>
                <p>Only 12 learners are allowed to enroll in the course in a single session.</p>
                <div className="feature-single-inside">
                    <div className="feature-single-icon">
                        <PersonAddIcon/>
                    </div>
                    <h6 className="feature-single-h6">Workstation 3: 16 Peoples </h6>
                </div>
                <p>Only 16 learners are allowed to enroll in the course in a single session.</p>
            </div>
            <div className="feature-single-part">
                <div className="feature-single-inside">
                    <div className="feature-single-icon">
                        <GroupAddIcon/>
                    </div>
                    <h6 className="feature-single-h6">Available Seats: 16 Seats</h6>
                </div>
                <p>Now we are offering only 16 seats for 16 individuals.</p>
            </div>
            <div className="feature-single-part">
                <div className="feature-single-inside">
                    <div className="feature-single-icon">
                        <MoveToInboxIcon/>
                    </div>
                    <h6 className="feature-single-h6">Price: 20000 BDT</h6>
                </div>
                <p>The course fee we offered is 20000 BDT. One learner can enroll in the course just by paying 50% (10000 BDT) downpayment. After that, a maximum of 2 month (Each month 5000 BDT) will be provided to pay the rest of the amount.</p>
            </div>
           
        </div>
    );
};

export default Feature;