import React from 'react'
import pic3 from '../pic3.jpg';

const Home = () => {
    return (
        <section className="home-section">
            <div className= "container">
                <div className= "row">

                    <div class="col-12 text-center header-text">
                        <h1>Hi, I'm Jibril</h1>
                        <h3>A Professional Web Designer and Developer </h3>
                    </div>

                    <div className="col-md-10 offset-md-1 my-image">
                        <img src=  {pic3}/>
                        <p>We Design, create, and modify beautiful-crafted Websites, by combining methods, techniques and our experiences in the field together,  
                        to create a stunning Websites that meets the expectations and needs of our clients.
                        </p>
                    </div>
                    
                     
                </div>
            </div>
        </section>
    )
}


export default Home