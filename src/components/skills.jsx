import React from 'react'
import Image from "react-bootstrap/Image";
import {
    CircularProgressbar,
    CircularProgressbarWithChildren,
    buildStyles
  } from "react-circular-progressbar";
import ProgressBar from 'react-animated-progress-bar';
import { Card } from 'react-bootstrap';
import { easeQuadInOut } from "d3-ease";
import AnimatedProgressProvider from "./AnimatedProgressProvider";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";
import Flip from "react-reveal/Flip";
import VisibilitySensor from "react-visibility-sensor";
import Tooltip from '@material-ui/core/Tooltip';

/* LOGO */
import ReactLogo from "../reactLogo.png";
import htmlLogo from "../htmlLogo.png";
import cssLogo from "../cssLogo.png";
import phpLogo from "../phpLogo.png";
import sqlLogo from "../sqlLogo.png";
import angularLogo from "../angularLogo.png";
import outsystemsLogo from "../outsystemsLogo.png";
import javaLogo from "../javaLogo.png"

/* SKILLS LEVEL */
const reactSkills = 40;
const htmlSkills = 90;
const cssSkills = 60;
const javaSkills = 80;
const angularSkills = 30;
const outsystemsSkills = 85;
const sqlSkills = 80;
const phpSkills = 40;


const skills = () => {
    return (
        <div id="skills" className="bodySkills">



        <VisibilitySensor>
        {({ isVisible }) => {
    
              return (
        <Fade right>
            
            <div className="cardSkill">
                <Zoom right cascade>
                    <h1 className="aboutMeTitle pt-3 text-center font-details pb-3">TECH SKILLS</h1>
                </Zoom>
            <div style={{marginTop:"5rem"}}>
            <div className="row">
                <div className="columnSkill">
                    <div className="columnSkillTitle">
                        <Fade right cascade>
                            <h5>HTML 
                            <Tooltip title="HTLM" placement="right">
                                <Image src={htmlLogo} className="smallLogo" fluid></Image>
                            </Tooltip>
                            </h5>
                        </Fade>
                    </div>
                    <div>
                        <div>• Professional project experience</div>
                    </div>
                    <ProgressBar className="backgroundProgress"
                        width="100%"
                        height="0.625rem"
                        rect
                        fontColor="gray"
                        percentage={htmlSkills}
                        rectPadding="1px"
                        rectBorderRadius="20px"
                        trackPathColor="transparent"
                        trackBorderColor="grey"
                        defColor={{
                            fair: '#f34235',
                            good: '#f34235',
                            excellent: '#f34235',
                            poor: '#f34235',
                        }}
                    />
                </div>
                <div className="columnSkill">
                    <div className="columnSkillTitle">
                        <Fade right cascade>
                            <h5>CSS 
                                <Tooltip title="CSS" placement="right">
                                    <Image src={cssLogo} className="smallLogo" fluid></Image>
                                </Tooltip>
                            </h5>
                        </Fade>
                    </div>
                    <div>
                        <div>• Professional project experience</div>
                    </div>
                    <ProgressBar className="backgroundProgress"
                        width="100%"
                        height="0.625rem"
                        rect
                        fontColor="gray"
                        percentage={cssSkills}
                        rectPadding="1px"
                        rectBorderRadius="20px"
                        trackPathColor="transparent"
                        trackBorderColor="grey"
                        defColor={{
                            fair: '#3595cf',
                            good: '#3595cf',
                            excellent: '#3595cf',
                            poor: '#3595cf',
                        }}
                    />
                 </div>
            </div>  
            <div className="row">
            <div className="columnSkill">
            <div className="columnSkillTitle">
                    <Fade right cascade>
                        <h5>PHP 
                            <Tooltip title="PHP" placement="right">
                                <Image src={phpLogo} className="smallLogo" fluid></Image>
                            </Tooltip>
                        </h5>
                    </Fade>
                </div>
                <div>
                    <div>• Stage project experience</div>
                </div>
                <ProgressBar className="backgroundProgress"
                    width="100%"
                    height="0.625rem"
                    rect
                    fontColor="gray"
                    percentage={phpSkills}
                    rectPadding="1px"
                    rectBorderRadius="20px"
                    trackPathColor="transparent"
                    trackBorderColor="grey"
                    defColor={{
                        fair: '#4d588e',
                        good: '#4d588e',
                        excellent: '#4d588e',
                        poor: '#4d588e',
                    }}
                />
            </div>    
                <div className="columnSkill">
                    <div className="columnSkillTitle">
                        <Fade right cascade>
                            <h5>JAVA 
                                <Tooltip title="JAVA" placement="right">
                                    <Image src={javaLogo} className="smallLogo" fluid></Image>
                                </Tooltip>
                            </h5>
                        </Fade>
                    </div>
                    <div>
                        <div>• Professional project experience</div>
                    </div>
                    <ProgressBar className="backgroundProgress"
                        width="100%"
                        height="0.625rem"
                        rect
                        fontColor="gray"
                        percentage={javaSkills}
                        rectPadding="1px"
                        rectBorderRadius="20px"
                        trackPathColor="transparent"
                        trackBorderColor="grey"
                        defColor={{
                            fair: '#ea8b00',
                            good: '#ea8b00',
                            excellent: '#ea8b00',
                            poor: '#ea8b00',
                        }}
                    />
                </div>
                </div>
            <div className="row">
            <div className="columnSkill">
                <div className="columnSkillTitle">
                    <Fade right cascade>
                        <h5>ANGULAR 
                            <Tooltip title="ANGULAR" placement="right">
                                <Image src={angularLogo} className="smallLogo" fluid></Image>
                            </Tooltip>
                        </h5>
                    </Fade>
                </div>
                <div>
                    <div>• Professional project experience</div>
                </div>
                <ProgressBar className="backgroundProgress"
                    width="100%"
                    height="0.625rem"
                    rect
                    fontColor="gray"
                    percentage={angularSkills}
                    rectPadding="1px"
                    rectBorderRadius="20px"
                    trackPathColor="transparent"
                    trackBorderColor="grey"
                    defColor={{
                        fair: '#dd0031',
                        good: '#dd0031',
                        excellent: '#dd0031',
                        poor: '#dd0031',
                    }}
                />
            </div>
            <div className="columnSkill">
                <div className="columnSkillTitle">
                    <Fade right cascade>
                        <h5>OUTSYSTEMS  
                            <Tooltip title="OUTSYSTEMS" placement="right">
                            <Image src={outsystemsLogo} className="smallLogo" fluid></Image>
                            </Tooltip>
                        </h5>
                    </Fade>
                </div>
                <div>
                    <div>• Professional project experience</div>
                </div>
                <ProgressBar className="backgroundProgress"
                    width="100%"
                    height="0.625rem"
                    rect
                    fontColor="gray"
                    percentage={outsystemsSkills}
                    rectPadding="1px"
                    rectBorderRadius="20px"
                    trackPathColor="transparent"
                    trackBorderColor="grey"
                    defColor={{
                        fair: '#ff2300',
                        good: '#ff2300',
                        excellent: '#ff2300',
                        poor: '#ff2300',
                    }}
                />
            </div>
            </div>
            <div className="row">
            <div className="columnSkill">
                <div className="columnSkillTitle">
                        <Fade right cascade>
                            <h5>REACT 
                                <Tooltip title="REACT" placement="right">
                                <Image src={ReactLogo} className="smallLogo" fluid></Image>
                                </Tooltip>
                            </h5>
                        </Fade>
                    </div>
                    <div>
                        <div>• Personal project experience</div>
                    </div>
                    
                    <ProgressBar className="backgroundProgress"
                        width="100%"
                        height="0.625rem"
                        rect
                        fontColor="gray"
                        percentage={reactSkills}
                        rectPadding="1px"
                        rectBorderRadius="20px"
                        trackPathColor="transparent"
                        trackBorderColor="grey"
                        defColor={{
                            fair: '#61dafb',
                            good: '#61dafb',
                            excellent: '#61dafb',
                            poor: '#61dafb',
                        }}
                    />
                 </div>
                
            
            <div className="columnSkill">
            <div className="columnSkillTitle">
                    <Fade right cascade>
                        <h5>SQL 
                            <Tooltip title="SQL" placement="right">
                            <Image src={sqlLogo} className="smallLogo" fluid></Image>
                            </Tooltip>
                        </h5>
                    </Fade>
                </div>
                <div>
                    <div>• Professional project experience</div>
                </div>
                <ProgressBar className="backgroundProgress"
                    width="100%"
                    height="0.625rem"
                    rect
                    fontColor="gray"
                    percentage={sqlSkills}
                    rectPadding="1px"
                    rectBorderRadius="20px"
                    trackPathColor="transparent"
                    trackBorderColor="grey"
                    defColor={{
                        fair: '#f2b100',
                        good: '#f2b100',
                        excellent: '#f2b100',
                        poor: '#f2b100',
                    }}
                />
            </div>
                
            </div>
            </div>  
           
            </div>
              
            </Fade>
            );
        }}
        </VisibilitySensor>
        </div>
    )
}


export default skills
