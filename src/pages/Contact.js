import React from 'react'
import PizzaLeft from "../assets/pizzaLeft.jpg";
import "../Styles/Contact.css";

function Contact() {
  return (
    <div className="contact" >
        <div className="leftSide" style={{backgroundImage: `url(${PizzaLeft})`}}>
        </div>
        <div className="rightSide">
                    <h1>Contact Us</h1>
                    <form action="" id="contact-form" method="POST">
                    <label htmlFor="name">Full Name</label>
                    <input type="text" name="name" id="" placeholder="Enter full name..." />
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="" placeholder="Enter email..." />
                    <label htmlFor="textarea"></label>
                    <textarea name="textarea" id="" cols="30" rows="10" placeholder="Enter message..." required></textarea>
                    <button type="submit">Send Message</button>
                    </form>
        </div>
    </div>
  )
}

export default Contact;
