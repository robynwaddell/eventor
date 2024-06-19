import React from 'react';

function Home() {
  return (
    <main>
      <section className='hero'>
        <div className='hero-img'>
          <div className='hero-text'>
            <h1>eventor</h1>
            <p>Plan, Participate, Party.</p>
          </div>
        </div>
      </section>
      <section className='features'>
        <div className='feature feature-one'>
            <h2>Unlimited Guests</h2>
        </div>
        <div className='feature feature-two'>
            <h2>Customized Events</h2>
        </div>
        <div className='feature feature-three'>
            <h2>Target Your Community</h2>
        </div>
      </section>
      <section className='about'>
        <div className='about-img'></div>
        <div className='about-text'>
          <h2>About Eventor</h2>
          <p>
            We began as a start-up company whose goal was to create easy party planning and attendance. 
            We wanted to bring people together so that special moments become special memories.
          </p>
        </div>
      </section>
      <section className='contact'>
        <div className='contact-text'>
          <h2>Speak to an Associate</h2>
          <p>
            We are here to help 24/7. Reach out to us by phone, email, or join our live chat to speak to an associate immediately.
          </p>
          <ul>
            <li><a href="tel:2041234567">204 123 4567</a></li>
            <li><a href="mailto:eventor@email.com">eventor@email.com</a></li>
            <li><button>Chat with Us</button></li>
          </ul>
        </div>
        <div className='contact-img'></div>
      </section>
      <section className='extra-section'>
        <div>
          <h2>Join Our Community</h2>
          <p>Become a part of our vibrant community and stay updated with the latest events and news. Sign up now!</p>
        </div>
      </section>
    </main>
  )
}

export default Home;
