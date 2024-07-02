import React from 'react';
import Header from './components/Header';
import './styles.css'; // Import the styles.css file

function App() {
  return (
    <div className="App">
      <Header />
      <section className="hero-section">
        <div className="text-block">
          <h1>Dream Career</h1>
          <h2>Discover your perfect job match and leap into a world of endless opportunities</h2>
          <a href="#get-started" className="get-started-button">Get Started</a>
        </div>
      </section>

      <section className="subscription-section">
        <h2 className="subscription-header">Choose Wisely</h2>
        <div className="subscription-plans">
          <div className="plan">
            <div className="plan-header">
              Basic
              <div className="plan-price">$9.99/month</div>
            </div>
            <p className="plan-details">Start your job hunt with essential features.</p>
            <button className="plan-button">Select</button>
          </div>
          <div className="plan">
            <div className="plan-header">
              Pro
              <div className="plan-price">$19.99/month</div>
            </div>
            <p className="plan-details">Unlock advanced job search and application tools.</p>
            <button className="plan-button">Select</button>
          </div>
          <div className="plan">
            <div className="plan-header">
              Premium
              <div className="plan-price">$29.99/month</div>
            </div>
            <p className="plan-details">Access exclusive job listings and priority support.</p>
            <button className="plan-button">Select</button>
          </div>
          <div className="plan">
            <div className="plan-header">
              Ultimate
              <div className="plan-price">$49.99/month</div>
            </div>
            <p className="plan-details">Get VIP treatment with personalized job recommendations and career guidance.</p>
            <button className="plan-button">Select</button>
          </div>
        </div>
      </section>

      <section className="descriptor-section">
        <div className="descriptor-item">
          <img src="/Hot Jobs.png" alt="Hot Jobs" />
          <div className="descriptor-item-content">
            <h2>Hot Jobs</h2>
            <p>Explore the hottest job opportunities in your desired field.</p>
          </div>
        </div>
        <div className="descriptor-item">
          <div className="descriptor-item-content">
            <h2>Expert Guidance</h2>
            <p>Receive expert advice and tips to ace your job interviews.</p>
          </div>
          <img src="/Expert Guidance.png" alt="Expert Guidance" />
        </div>
        <div className="descriptor-item">
          <img src="/Instant Matches.png" alt="Instant Matches" />
          <div className="descriptor-item-content">
            <h2>Instant Matches</h2>
            <p>Get instant job matches based on your skills and preferences.</p>
          </div>
        </div>
      </section>

      <section className="testimonial-section">
        <h2 className="testimonial-header">Testimonials</h2>
        <div className="testimonials">
          <div className="testimonial">
            <img src="/person1.jpg" alt="Person1" />
            <p>"Found my dream job in just a week! Thanks to JobPortalX!"</p>
            <div className="name">Max Power</div>
            <div className="job">Engineer</div>
          </div>
          <div className="testimonial">
            <img src="/person2.jpg" alt="Person2" />
            <p>"JobPortalX made job hunting fun and easy. Highly recommended!"</p>
            <div className="name">Luna Star</div>
            <div className="job">Designer</div>
          </div>
          <div className="testimonial">
            <img src="/person3.jpg" alt="Person3" />
            <p>"Unbelievable opportunities on JobPortalX! I landed my dream job!"</p>
            <div className="name">Jack Hammer</div>
            <div className="job">Developer</div>
          </div>
          <div className="testimonial">
            <img src="/person4.jpg" alt="Person4" />
            <p>"Great opportunities for growth and challenging work. Work-life balance, friendly culture"</p>
            <div className="name">Stiles Stilinski</div>
            <div className="job">Chef</div>
          </div>
          <div className="testimonial">
            <img src="/person5.jpg" alt="Person5" />
            <p>"Experience made easy website, strongly recommended"</p>
            <div className="name">Luke Skywalker</div>
            <div className="job">Marketing Manager</div>
          </div>
        </div>
      </section>

      {/* Other sections of your single page website */}
    </div>
  );
}

export default App;