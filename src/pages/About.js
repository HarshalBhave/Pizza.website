import React from 'react'
import MultiplePizzas from "../assets/multiplePizzas.jpeg";
import "../Styles/About.css";
function About() {
  return (
    <div className="about">
      <div className="aboutTop" style={{backgroundImage: `url(${MultiplePizzas})`}}></div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, totam. 
            Distinctio quis, mollitia veniam exercitationem architecto officia enim blanditiis ut accusamus culpa 
            fugiat consectetur asperiores incidunt dolore quos nulla accusantium, nobis nisi necessitatibus vero unde 
            cum? Eaque, impedit. Numquam error ut sapiente ullam ad placeat consequuntur incidunt molestiae, odio nisi,
             minima unde recusandae sunt, dolore atque excepturi quas ipsa nulla. Lorem ipsum dolor sit amet, consectetur 
             adipisicing elit. Delectus, labore rerum minus rem facilis corrupti fuga vero magnam libero quia, corporis at 
             eius itaque possimus quas nihil enim eaque alias? Lorem ipsum dolor sit amet consectetur adipisicing elit. Id 
             animi repellendus impedit aliquam ab sint ex optio sed aspernatur nobis enim, dolorum similique ipsam eum eveniet fugiat 
             rerum? Facilis, quia omnis eos, sit dicta veritatis facere iure et mollitia quod quasi vero numquam id unde quae molestias 
             necessitatibus dignissimos quibusdam cumque enim? Dolorum, voluptatem, sit nesciunt nam explicabo iure exercitationem aliquam 
             possimus optio molestias amet. Quaerat, voluptatum quam! Voluptatum, deleniti! </p>
      </div>
    </div>
  )
}

export default About
