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
                <h5>Experience</h5>
                <b>Personal Project: BudgetBuddy</b>
                <div>
                    <div>I created BudgetBuddy to track my grocery spending and get some experience with Ruby on Rails and React.</div>
                    <div>Code Available Here: <a href="https://github.com/JacobPickle/BudgetBuddy">https://github.com/JacobPickle/BudgetBuddy</a></div>
                    <div>Technologies: Ruby on Rails, React, Bootstrap, Capistrano</div>
                </div>
                <ul>
                    <li>React front end with a Ruby on Rails backend</li>
                    <li>Used Bootstrap to make the site more user friendly</li>
                    <li>Deployment to a remote server with capistrano</li>
                    <li>Used Figma to brainstorm a design to learn how to translate a given design to a matching frontend</li>
                </ul>
                <b>Cerner</b>
                <div><small>Jun 2019 - Oct 2022</small></div>
                <div>
                    <div>Orders and Plans Team</div>
                    <div>Technologies: C++, Java, CCL, SQL</div>
                </div>
                <ul>
                    <li>Worked as part of an Agile team following Scrum practices including standup, retrospectives, sprint reviews, and ticket refinement</li>
                    <li>Created technical documentation for, designed, and built user friendly frontends for electronic health records using C++</li>
                    <li>Improved functionality of Java REST services and implemented new features</li>
                    <li>Debugged complex legacy code using SQL and CCL, an in-house language</li>
                    <li>Ensured stability and completeness of Java code using unit tests</li>
                    <li>Automated frontend testing using Eggplant</li>
                    <li>Operated as part of the release pipeline for features that I owned</li>
                    <li>Helped maintain a Jenkins build for projects my team owned</li>
                    <li>Remotely mentored for DevAcademy, the new employee program</li>
                    <li>Worked remotely collaborating using video calls and code reviews over Microsoft and Atlassian toolsets</li>
                </ul>
                <div>
                    <div>Dev Academy Team</div>
                    <div>Technologies: Ruby on Rails, React, Jest</div>
                </div>
                <ul>
                    <li>Worked alongside other new hires to Cerner on an internal project to match new hires like us to DevAcademy projects upon their start in the program</li>
                    <li>Learned to get and give constructive feedback with daily code reviews with my team and weekly scoring by my mentors</li>
                    <li>Followed Scrum practices including standups, sprint reviews, and retrospectives</li>
                    <li>Required to have high test coverage on every feature</li>
                </ul>
                <div>
                    <div>Internships: Document Imaging Team</div>
                    <div>Technologies: C++</div>
                </div>
                <ul>
                    <li>Two summer internships during university before being hired full time</li>
                </ul>
                <h5>Education</h5>
                <b>Missouri University of Science and Technology</b>
                <div><small>Bachelor of Science, Computer Science</small></div>
                <br></br>
                <h5>Skills</h5>
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