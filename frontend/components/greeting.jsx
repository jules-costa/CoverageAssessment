import React from 'react';

class Greeting extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <nav>
          <h2>Coverage Assessment</h2>
          <h3>topics container</h3>
        </nav>
        <div className="landing-page-container">
          <section className="landing-page">
            <div className="about-site">
              <h2>About the Site</h2>
              <p>Insurance isn’t very exciting and coverage analysis doesn’t make for exhilarating conversation. The insurance industry has done a relatively terrible job at marketing the value that insurance professionals bring to society. It’s natural to spread the stories of losses not covered and painful insurance claims. The fact is that Insurance policies and the carriers that back them have saved countless lives and restored the property and dignity of hundreds of millions of policyholders. I want to help make insurance more accessible to people everywhere by sharing my own experiential knowledge, and offering coverage assessments for free. “Insurance professionals can be Trusted Advisors. Insurance coverage makes a difference at the most stressful times in our lives. Your broker is your partner and advocate when losses require you to look for help and support from your insurance carrier. You paid your premium…your carrier has assumed some of the risk…your broker will help you fulfill the promise of your contract.”</p>
            </div>
            <div className="about-author">
              <h2>About Me</h2>
              <p>Hi, I'm Frank Costa. I'm the author of Coverage Assessment and just completed my 24th year in the Insurance industry. I founded my own local New Jersey agency from the basement of my home and grew the firm to over 4,000 clients in 12 years. I transitioned from Agency Principal to Senior VP and Sales Manager of a New York Regional agency. While continuing to serve and grow my clientele, I mentored and managed 8 insurance producers. In 2009, I brought my experience and skill set to an International Brokerage based in New York City and led the Commercial Insurance Division responsible for over $50 million in annual client premiums. I am a Certified Insurance Counselor (CIC), experienced in interpreting insurance policy terms, conditions and provisions. I attained my Certified Risk Manager (CRM) designation in 2008 and am qualified to perform Risk Assessments, Risk Analysis and Control Implementation for businesses of every size, scope and complexity.</p>
            </div>
          </section>
        </div>
      </div>
    )
  }
}

export default Greeting;
