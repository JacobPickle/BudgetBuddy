import React from "react";
import Sidebar from "./Sidebar";

const Resume = () => {
    return(
        <div>
            <Sidebar></Sidebar>
            <div className="main resume">
                <h1>Jake Pickle</h1>
                <b>Software Engineer</b>
                <div><small>PickleJMP@gmail.com</small></div>
                <br></br>
                <h5>Personal Project: BudgetBuddy</h5>
                <p>I created this project to track my grocery spending and improve my skills with rails/react</p>
                <ul>
                    <li>React front end with a ruby on rails backend</li>
                    <li>Bootstrap used to make the site more user friendly</li>
                    <li>Deployment to a remote server with capistrano</li>
                    <li>Used figma to create a design and matched that design in code</li>
                </ul>
                <h5>Experience</h5>
                <b>Cerner</b>
                <div><small>Jun 2019 - Oct 2022</small></div>
                <ul>
                    <li>Designed and built user friendly frontends for electronic health records using C++</li>
                    <li>Improved functionality of Java REST services and implemented new features to translate data from the database structure into usable data for the frontend</li>
                    <li>Wrote unit tests to ensure stability and completeness of Java code</li>
                    <li>Debugged complex legacy code using SQL/CCL</li>
                    <li> Wrote automated test using Eggplant tools</li>
                    <li>Remotely mentored for the new employee program</li>
                    <li>Worked as part of an agile team following daily scrum practices</li>
                    <li>Worked remotely collaborating with video calls and code reviews over Microsoft and Atlassian toolsets</li>
                    <li>Operated as part of the release pipeline for features that I owned</li>
                    <li>Helped maintain a Jenkins build for projects my team owned</li>
                </ul>
                <h5>Education</h5>
                <b>Missouri University of Science and Technology</b>
                <div><small>Bachelor of Science, Computer Science</small></div>
                <br></br>
                <h5>Skills</h5>
                <b>Languages</b>
                <ul>
                    <li>Ruby on Rails</li>
                    <li>React</li>
                    <li>C++</li>
                    <li>Java</li>
                    <li>SQL/CCL</li>
                </ul>
                <b>Technology</b>
                <ul>
                    <li>Jenkins</li>
                    <li>Git</li>
                    <li>SVN</li>
                    <li>Crucible</li>
                    <li>Jira</li>
                    <li>Visual Studio</li>
                    <li>Eclipse</li>
                    <li>Maven</li>
                    <li>Microsoft Software Suite</li>
                    <li>Unix</li>
                    <li>Eggplant</li>
                </ul>
            </div>
        </div>
    )
}

export default Resume;