import React from 'react';

function Home() {
  return (
    <div>

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
            <p className="plan-details">Get VIP treatment with personalized job recommendations and services.</p>
            <button className="plan-button">Select</button>
          </div>
        </div>
      </section>

      <section className="descriptor-section">
        <h2>Why Choose Us?</h2>
        <div className="descriptor-item">
          <img src="/Hot Jobs.png" alt="Hot Jobs" />
          <div className="descriptor-item-content">
            <h2>Hot Jobs</h2>
            <p>Explore the hottest job opportunities in your desired field.</p>
          </div>
        </div>
        <div className="descriptor-item">
          <img src="/Expert Guidance.png" alt="Expert Guidance" />
          <div className="descriptor-item-content">
            <h2>Expert Guidance</h2>
            <p>Receive expert advice and tips to ace your job interviews.</p>
          </div>
        </div>
        <div className="descriptor-item">
          <div className="descriptor-item-content">
            <h2>Instant Matches</h2>
            <p>Get instant job matches based on your skills and preferences.</p>
          </div>
          <img src="/Instant Matches.png" alt="Instant Matches" />
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
            <div class="job">Marketing Manager</div>
          </div>
        </div>
      </section>

      {/* Background 2 Section */}
      <section className="background2-section"></section>

      {/* Meet the Team Section */}
      <section className="meet-the-team-section">
        <h2>Meet the Team</h2>
        <div className="team-cards">
          <div className="team-card">
            <img src="/team1.jpg" alt="Team Member 1" />
            <div className="team-info">
              <h3>John Doe</h3>
              <p>CEO</p>
            </div>
          </div>
          <div className="team-card">
            <img src="/team2.jpg" alt="Team Member 2" />
            <div className="team-info">
              <h3>Jane Smith</h3>
              <p>CTO</p>
            </div>
          </div>
          <div className="team-card">
            <img src="/team3.jpg" alt="Team Member 3" />
            <div className="team-info">
              <h3>Mike Johnson</h3>
              <p>COO</p>
            </div>
          </div>
          <div className="team-card">
            <img src="/team4.jpg" alt="Team Member 4" />
            <div className="team-info">
              <h3>Emily Davis</h3>
              <p>CFO</p>
            </div>
          </div>
          <div className="team-card">
            <img src="/team5.jpg" alt="Team Member 5" />
            <div className="team-info">
              <h3>Sarah Brown</h3>
              <p>CMO</p>
            </div>
          </div>
        </div>
      </section>

      {/* Find Your Dream Job Section */}
      <section className="dream-job-section">
        <div className="dream-job-container">
          <h2>Find Your Dream Job</h2>
          <p>Join JobPortalX and discover endless career opportunities!</p>
          <a href="#get-started" className="dream-job-button">Get Started</a>
        </div>
      </section>
    </div>
  );
}

export default Home;