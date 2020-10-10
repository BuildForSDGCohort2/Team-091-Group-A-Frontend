import React from 'react'
import "../../styles/about.css"


const About = () => {
  return (
    <div className="about">
      <section className="about-header">
        <h1>We Are Transall</h1>
      </section>
      <section className="about-body">
        <h5>About Us</h5>
        <article>
            We are a group of innovators charged together into developing a solution that solves one of the sustainable development goals which is transportation which birthed the Idea TranALL. Often times, people move from one garage to another or makes calls to agent in order to get adequate information about where they are travelling to. At TransALL, we hope to bridge that gap in information. We believe our solution would allow you to make inform decisions in order to choose between different form of transportation.
        </article>
      </section>
      <section className="about-footer">
        <h5>Meet the Team</h5>
        <article className="about-images">
          <div>
            <img src="https://res.cloudinary.com/kayode/image/upload/v1602331578/TransAll/abbey-removebg-preview_f1um3p.png" alt="Team Lead"/>
            <p className="name">Kayode Gabriel</p>
            <p>Fullstack Developer</p>
          </div>
          <div>
            <img src="https://res.cloudinary.com/kayode/image/upload/v1602331579/TransAll/obinna-removebg-preview_ez1asn.png" alt="Backend Developer"/>
            <p className="name">Obinna Anyim</p>
            <p>Backend Developer</p>
          </div>
          <div>
            <img src="https://res.cloudinary.com/kayode/image/upload/v1602331578/TransAll/nedum-removebg-preview_d3depd.png" alt="Frontend Developer"/>
            <p className="name">Chinedu Emesue</p>
            <p>Frontend Developer</p>
          </div>
        </article>
      </section>
    </div>
  )
}

export default About
