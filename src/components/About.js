import React from 'react'


const About = () => {
    return (
        <div className= "container">
           <div className= "row">
                <div className="col-md-2"></div>
                <div className= "col-md-8 top-header">
                    <h1> About me</h1>
                    <p> I design, develop and update websites  using various programming languages and design tools like creating webpage layouts, writing code, editing website content, and making adjustments based on client demand </p>       
                </div>
                    <div className="col-md-3 card bg-light card1">
                        <h4>Skills</h4>
                        <p>Strong preference and easy to use the basic front-end components, such as HTM, CSS, Bootstrap, Javascript and many other front-end frameworks.</p>
                    </div>
                    <div className="col-md-3 card bg-light card2">
                        <h4>Experiences</h4>
                        <p>	
                            Created different projects about  developing websites for our clients, and applied them with learned methods and front-end technologies.
                        </p>
                    </div>
                    <div className="col-md-3 card bg-light card3">
                        <h4>Education</h4>
                        <p>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed .</p>
                        <p></p>
                    </div>
                   
           </div>
        </div>

    )
}


export default About