import React from 'react';
import NavbarContainer from './navbar/navbar_container';

class Greeting extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <NavbarContainer />
        <div className="hero">
          <div className="landing-page-container">
            <section className="landing-page">
              <div className="about-author">
                <img src="https://res.cloudinary.com/jules-costa/image/upload/v1497380224/frank_costa_e4qmlk.jpg" className="author-image"/>
                <div className="content">
                  <p>Hi, I'm Frank Costa. I'm the author of Coverage Assessment and just completed my 24th year in the Insurance industry.</p>
                  <p>I founded my own local New Jersey agency from the basement of my home and grew the firm to over 4,000 clients in 12 years. I transitioned from Agency Principal to Senior VP and Sales Manager of a New York Regional agency. While continuing to serve and grow my clientele, I mentored and managed 8 insurance producers.</p>
                  <p>In 2009, I brought my experience and skill set to an International Brokerage based in New York City and led the Commercial Insurance Division responsible for over $50 million in annual client premiums. I am a Certified Insurance Counselor (CIC), experienced in interpreting insurance policy terms, conditions and provisions. I attained my Certified Risk Manager (CRM) designation in 2008 and am qualified to perform Risk Assessments, Risk Analysis and Control Implementation for businesses of every size, scope and complexity.</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    );
  }
}

export default Greeting;
