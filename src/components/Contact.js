import React, { Component } from 'react'


class Contact extends Component {

    constructor(props) {
        super(props)

        this.state = { 
            username: '',
            email:'',
            message:''
         }
    }

    handleUsernameChange = (event) => {
        this.setState ({
            username: event.target.value
        })
              
    }
    handleEmailChange = event => {
        this.setState({
            email: event.target.value
        })
    }
    handleMessagesChange = event => {
        this.setState({
            messages: event.target.value
        })
    }

    handleSubmit = event  => {
        event.preventDefault()
        alert("successfully form submitted " + this.state.username)
    }



    render() {
        return (
            
            <form onSubmit= {this.handleSubmit} >
                <div className="container">
                    
                    <div className= "row full-contact ">

                        <div className= "col-md-8 offset-md-2 contact-form  ">
                            <div className="form-group">
                               <h3>Contact Me</h3>
                                <label>Username</label>
                                <input type= "text" value= {this.state.username} onChange={this.handleUsernameChange} className="form-control"></input>
                            </div>
                            <div className="form-group">
                                <label>Email</label>
                                <input type= "email" value= {this.state.email} onChange={this.handleEmailChange} className="form-control"></input>
                            </div>
                            <dvi className="form-group">
                                <label>Message</label>
                                <textarea value= {this.state.messages} onChange={this.handleMessageChange} className="form-control"></textarea>
                            </dvi>
                            <button className="submit-button" type= 'submit'>Submit</button> 
                        </div>
                        <div className= "col-md-8 offset-md-4 social-menu">
                            <h4>Follow me on Social Media</h4>
                            <ul>
                                <li><a href= "https://www.facebook.com/"> <i className= " fab fa-facebook"></i></a></li>
                                <li className= "social-twitter"><a href= "https://www.twitter.com/"> <i className= " fab fa-twitter"></i></a></li>
                                <li className= "social-instagram"><a href= "https://www.instagram.com/"> <i className= " fab fa-instagram"></i></a></li>
                                <li className= "social-youtube"><a href= "https://www.youtube.com/"> <i className= " fab fa-youtube"></i></a></li>
                            </ul>
                        </div>

                    </div>       
                </div>            
            </form>
           
    
        )
    }
}

export default Contact