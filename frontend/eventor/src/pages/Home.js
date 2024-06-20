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
    <div className='feature-text'>
      <h2>Unlimited Guests</h2>
    </div>
  </div>
  <div className='feature feature-two'>
    <div className='feature-text'>
      <h2>Customized Events</h2>
    </div>
  </div>
  <div className='feature feature-three'>
    <div className='feature-text'>
      <h2>Target Your Community</h2>
    </div>
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
          <p>204 123 4567</p>
          <p>eventor@email.com</p>
          <button>Chat with Us</button>
        </div>
        <div className='contact-img'></div>
      </section>
    </main>
  )
}

export default Home;
